// @ts-check
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";

import lenis from "astro-lenis";

import react from "@astrojs/react";

import icon from "astro-icon";

// @ts-ignore
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  experimental: {
    responsiveImages: true,
    svg: true,
  },
  devToolbar: {
    enabled: false,
  },

  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      article: "storyblok/Article",
      content: "storyblok/Content",
      paragraph: "storyblok/Paragraph",
      titleTwo: "storyblok/TitleTwo",
      titleThree: "storyblok/TitleThree",
      codeBlock: "storyblok/CodeBlock",
      codePen: "storyblok/CodePen",
      image: "storyblok/Picture",
    },
    bridge: false,
  }), tailwind(), react(), lenis(), icon()],

  vite: {
    plugins: [basicSsl()],
    server: {
      // @ts-ignore
      https: true,
    },
  },
});