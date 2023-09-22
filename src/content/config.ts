import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        description: z.string(),
    }),
})

export const collections = {
    posts: postsCollection,
}
