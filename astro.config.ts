import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig, fontProviders } from "astro/config";

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
      styleOverrides: {
        codeFontFamily: "var(--default-mono-font-family)",
      },
    }),
    mdx(),
    sitemap(),
  ],
  experimental: {
    svgo: true,
    fonts: [
      {
        provider: fontProviders.local(),
        name: "Inter",
        cssVariable: "--font-inter",
        options: {
          variants: [
            {
              display: "swap",
              style: "normal",
              src: ["./src/assets/fonts/InterVariable.woff2"],
            },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "Satoshi",
        cssVariable: "--font-satoshi",
        options: {
          variants: [
            {
              display: "swap",
              style: "normal",
              src: ["./src/assets/fonts/Satoshi-Variable.woff2"],
            },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "IBM Plex Mono",
        cssVariable: "--font-plex-mono",
        options: {
          variants: [
            {
              display: "swap",
              style: "normal",
              src: ["./src/assets/fonts/IBMPlexMono-Regular.woff2"],
            },
            {
              display: "swap",
              style: "italic",
              src: ["./src/assets/fonts/IBMPlexMono-Italic.woff2"],
            },
          ],
        },
      },
    ],
  },
});
