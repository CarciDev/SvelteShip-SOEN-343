import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
// See https://www.skeleton.dev/docs/purgecss for details on how to configure PurgeCSS (specificly for safelisting)
import { purgeCss } from "vite-plugin-tailwind-purgecss";

export default defineConfig({
  plugins: [
    sveltekit(),
    purgeCss({
      safelist: {
        greedy: [/^hljs-/],
      },
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
