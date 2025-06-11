import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    expressiveCode({
      themes: ["tokyo-night"],
      defaultProps: {
        wrap: true,
      },
    }),
    mdx(),
  ],
});
