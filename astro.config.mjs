import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://klinikmillenium.id",
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});