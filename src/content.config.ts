import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// مجموعة الأفلام
const movies = defineCollection({
	loader: glob({ base: './src/content/movies', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		poster: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		video: z.string(), // mp4 أو m3u8
	}),
});

// مجموعة المسلسلات
const series = defineCollection({
	loader: glob({ base: './src/content/series', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		poster: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		seasons: z.array(z.object({ number: z.number() })),
	}),
});

// مجموعة الحلقات
const episodes = defineCollection({
	loader: glob({ base: './src/content/episodes', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		seriesSlug: z.string(),
		season: z.number(),
		poster: z.string(),
		video: z.string(), // mp4 أو m3u8
	}),
});

export const collections = { movies, series, episodes };
