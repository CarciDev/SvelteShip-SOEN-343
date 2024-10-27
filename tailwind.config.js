import { skeleton } from "@skeletonlabs/tw-plugin";
import { join } from "path";
import { customTheme } from "./src/custom-theme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // dark mode is handled via the class method
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}",
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    skeleton({
      themes: {
        preset: [
          { name: "skeleton", enhancements: true },
          { name: "modern", enhancements: true },
        ],
        custom: [customTheme],
      },
    }),
  ],
};
