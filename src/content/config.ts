// src/content/config.ts
import { defineCollection, z } from 'astro:content';

/** =========================
 * Movies Collection
 * ========================= */
const moviesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    poster: z.string(),          // صورة الغلاف
    description: z.string(),     // وصف الفيلم
    tags: z.string().optional(), // الكلمات الدلالية
    videoUrl: z.string(),        // رابط الفيلم
    year: z.number().optional(),
  }),
});

/** =========================
 * Series Collection
 * ========================= */
const seriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    poster: z.string(),          // صورة الغلاف للمسلسل
    description: z.string(),     // وصف المسلسل
    tags: z.string().optional(), // الكلمات الدلالية
    seasons: z.array(
      z.object({
        season: z.number(),
        episodes: z.array(
          z.object({
            episode: z.number(),   // رقم الحلقة
            title: z.string(),    // عنوان الحلقة
            videoUrl: z.string(), // رابط الحلقة
          })
        )
      })
    ),
    year: z.number().optional(),
  }),
});

export const collections = {
  movies: moviesCollection,
  series: seriesCollection,
};
