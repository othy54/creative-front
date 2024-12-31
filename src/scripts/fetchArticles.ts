import { useStoryblokApi } from "@storyblok/astro";
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/stories", {
    content_type: "article",
    version: import.meta.env.DEV ? "draft" : "published",
    starts_with: "blog/",
});

export const stories: object[] = data.stories;