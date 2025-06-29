import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
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
      styleOverrides: {
        codeFontFamily: "var(--default-mono-font-family)",
      },
    }),
    mdx(),
    sitemap(),
  ],
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Inter",
        cssVariable: "--font-inter",
        variants: [
          {
            display: 'swap',
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
            display: 'swap',
            style: "normal",
            src: [
              "./src/assets/fonts/Satoshi-Variable.woff2",
              "./src/assets/fonts/Satoshi-Variable.woff",
              "./src/assets/fonts/Satoshi-Variable.ttf",
            ],
          },
        ],
      },
      {
        provider: "local",
        name: "IBM Plex Mono",
        cssVariable: "--font-plex-mono",
        variants: [
          {
            display: 'swap',
            style: "normal",
            src: [
              "./src/assets/fonts/IBMPlexMono-Regular.woff2",
              "./src/assets/fonts/IBMPlexMono-Regular.woff",
            ],
          },
          {
            display: 'swap',
            style: "italic",
            src: [
              "./src/assets/fonts/IBMPlexMono-Italic.woff2",
              "./src/assets/fonts/IBMPlexMono-Italic.woff",
            ],
          },
        ],
      },
    ],
  },
});
