import { defineCollection, z } from 'astro:content';

const movies = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    poster: z.string(),
    video: z.string(),
    tags: z.array(z.string()),
    genres: z.array(z.string()),
    year: z.number(),
    type: z.literal("movie"),
    recommendations: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        poster: z.string()
      })
    ).optional()
  })
});

const series = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    poster: z.string(),
    video: z.string().optional(),
    tags: z.array(z.string()),
    genres: z.array(z.string()),
    year: z.number(),
    type: z.literal("series"),
    episodes: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        poster: z.string()
      })
    ).optional(),
    similar: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        poster: z.string()
      })
    ).optional()
  })
});

const episodes = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    poster: z.string(),
    video: z.string(),
    tags: z.array(z.string()),
    seriesSlug: z.string(),
    type: z.literal("episode")
  })
});

export const collections = { movies, series, episodes };
