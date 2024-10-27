import { describe, it, expect } from "vitest";
import { createSession, validateAndRefreshSession } from "$lib/server/session";

const now = Math.floor(new Date().getTime() / 1000);

describe("createSession produces valid session tokens", () => {
  const token = createSession({
    sub: "-1",
    name: "Test User",
    email: "test@hi.invalid",
    role: "CUSTOMER",
  });
  const validatedSession = validateAndRefreshSession(token);
  it("The session validation was successful", () => {
    expect(validatedSession.success).toBe(true);
  });
  it("The session contains the correct name", () => {
    // @ts-expect-error force unwrap user
    expect(validatedSession.user.id).toBe(-1);
  });
  it("The session contains the correct name", () => {
    // @ts-expect-error force unwrap user
    expect(validatedSession.user.name).toBe("Test User");
  });
  it("The session contains the correct email", () => {
    // @ts-expect-error force unwrap user
    expect(validatedSession.user.email).toBe("test@hi.invalid");
  });
  it("The session contains the correct role", () => {
    // @ts-expect-error force unwrap user
    expect(validatedSession.user.role).toBe("CUSTOMER");
  });
  it("The refreshed token is defined", () => {
    expect(validatedSession.newSession).toBeDefined();
  });
});

describe("Stale sessions will not be valid", () => {
  const token = createSession({
    sub: "-1",
    name: "Test User",
    email: "test@hi.invalid",
    role: "CUSTOMER",
    iat: now - 43201,
  });
  const validatedSession = validateAndRefreshSession(token);
  it("The session validation is not successful", () => {
    expect(validatedSession.success).toEqual(false);
  });
});

/* Future tests that are a little harder to set up because
createSession doesn't expose the functionality: expired tokens,
different audience, invalid signature but valid data */
