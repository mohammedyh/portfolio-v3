import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(99),
    description: z.string().max(220),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
