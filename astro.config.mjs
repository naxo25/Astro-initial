import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import db from "@astrojs/db";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), db(), serviceWorker()]
});