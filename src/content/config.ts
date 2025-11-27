// src/content/config.ts
import { defineCollection, z } from 'astro:content';

/** =========================
 * Movies Collection
 * ========================= */
const moviesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    poster: z.string(),
    description: z.string(),
    genres: z.array(z.string()),
    year: z.number(),
    rating: z.number().optional(),
    duration: z.string().optional(),
    country: z.string().optional(),
    quality: z.string().optional(),
    videoUrl: z.string().optional(),
    embedUrl: z.string().optional(),
    type: z.literal('movie'),
  }),
});

/** =========================
 * Series Collection
 * ========================= */
const seriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    poster: z.string(),
    description: z.string(),
    genres: z.array(z.string()),
    year: z.number(),
    rating: z.number().optional(),
    country: z.string().optional(),
    type: z.literal('series'),
    seasons: z.array(z.object({
      season: z.number(),
      episodes: z.array(z.object({
        episode: z.number(),
        title: z.string(),
        videoUrl: z.string().optional(),
        embedUrl: z.string().optional(),
      })),
    })),
  }),
});

/** =========================
 * Blog Collection
 * ========================= */
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heroImage: z.string(),
    description: z.string().optional(),
    pubDate: z.preprocess(
      (val) => new Date(val as string), // تحويل أي نص إلى Date
      z.date()
    ),
  }),
});

-export const collections = {
  movies: movieCollection,
  series: movieCollection,
  episodes: movieCollection,
};
