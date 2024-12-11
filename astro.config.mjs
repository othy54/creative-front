// @ts-check
import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';

import basicSsl from '@vitejs/plugin-basic-ssl'

// @ts-ignore
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
    experimental: {
        responsiveImages: true,
        svg: true,
    },
    integrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                article: 'storyblok/Article',
                content: 'storyblok/Content',
                paragraph: 'storyblok/Paragraph',
                titleTwo: 'storyblok/TitleTwo',
            },
        }),
        tailwind(),
    ],
    vite: {
        plugins:[basicSsl()],
        server: {
            https: true,
          },
    }
});
