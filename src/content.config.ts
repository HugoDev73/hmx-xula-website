import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: glob({ base: "./src/content/products", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    label: z.string(),
    tagline: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    accent: z.string(),
    accentSoft: z.string(),
    accentContainer: z.string(),
    onAccent: z.string(),
    cta: z.string(),
    ctaLink: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    agave: z.string(),
    origin: z.string(),
    abv: z.string().optional().default("Por confirmar"),
    size: z.string().optional().default("Por confirmar"),
    tastingNotes: z.string().optional().default("Por confirmar"),
    personalizable: z.boolean().default(false),
    personalizationDescription: z.string().optional().default(""),
    useCases: z.array(z.string()).default([]),
    benefits: z.array(z.string()).default([]),
    avoidClaims: z.array(z.string()).default([]),
  }),
});

export const collections = {
  products,
};
