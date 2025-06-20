import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mohammedyh.dev",
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
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Inter",
        cssVariable: "--font-inter",
        variants: [
          {
            style: "normal",
            src: ["./src/assets/fonts/InterVariable.woff2", "./src/assets/fonts/InterVariable.ttf"],
          },
        ],
      },
      {
        provider: "local",
        name: "Satoshi",
        cssVariable: "--font-satoshi",
        variants: [
          {
            style: "normal",
            src: [
              "./src/assets/fonts/Satoshi-Variable.woff2",
              "./src/assets/fonts/Satoshi-Variable.woff",
              "./src/assets/fonts/Satoshi-Variable.ttf",
            ],
          },
        ],
      },
    ],
  },
});
