import bcrypt from "bcrypt";
import { prisma } from "$lib/db/client";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { z } from "zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { createSession } from "$lib/server/session";
import type { User } from "@prisma/client";

const UserRegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const actions = {
  default: async ({ cookies, request, url }) => {
    const form = await request.formData();
    const data = Object.fromEntries(form);

    const result = UserRegisterSchema.safeParse(data);
    if (!result.success) {
      switch (result.error.issues[0].path[0]) {
        case "name":
          return fail(400, {
            name: data.name,
            email: data.email,
            error: "Invalid Email",
            errorMessage: "Invalid name. Please try again.",
          });
        case "email":
          return fail(400, {
            name: data.name,
            email: data.email,
            error: "Invalid Email",
            errorMessage: "Invalid email. Please try again.",
          });
        case "password":
          return fail(400, {
            name: data.name,
            email: data.email,
            error: "Invalid Password",
            errorMessage: "Invalid password. Please try again.",
          });
        case "confirmPassword":
          return fail(400, {
            name: data.name,
            email: data.email,
            error: "Invalid Password",
            errorMessage: "Invalid Confirm Password value. Please try again.",
          });
        default:
          return fail(400, {
            name: data.name,
            email: data.email,
            error: result.error.issues[0].path[0],
            errorMessage: result.error.issues[0].message,
          });
      }
    }

    const { name, email, password: passwordRaw, confirmPassword } = result.data;

    if (passwordRaw !== confirmPassword) {
      return fail(400, {
        name: name,
        email: email,
        error: "Password Mismatch",
        errorMessage:
          'The "Password" and "Confirm Password" you entered do not match.',
      });
    }

    if (
      passwordRaw.length < 8 ||
      !passwordRaw.match(/[a-z]/) ||
      !passwordRaw.match(/[A-Z]/) ||
      !passwordRaw.match(/[0-9]/)
    ) {
      return fail(400, {
        name: name,
        email: email,
        error: "Password Complexity",
        errorMessage:
          "Please ensure your password meets the complexity requirements.",
      });
    }

    const passwordHash = await bcrypt.hash(passwordRaw, 12);
    let user: User;

    try {
      user = await prisma.user.create({
        data: { email, name, passwordHash },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (
          error.code === "P2002" &&
          (error?.meta?.target as string[])?.includes("email")
        ) {
          return fail(400, {
            name: name,
            email: email,
            error: "Duplicate Email",
            errorMessage: "The email you entered already exists.",
          });
        }
      }

      return fail(500, {
        name: name,
        email: email,
        error: "Database Error",
        errorMessage: "An error occurred while creating your account.",
      });
    }

    cookies.set(
      "SvelteShip-Session",
      createSession({
        sub: String(user.id),
        name: user.name,
        email: user.email,
        role: user.role,
      }),
      { path: "/" },
    );

    // Prevent open redirect, only allow destinations starting with /
    if ((url.searchParams.get("destination") || "").indexOf("/") == 0) {
      return redirect(302, url.searchParams.get("destination") || "/");
    } else {
      return redirect(302, "/");
    }
  },
} satisfies Actions;
