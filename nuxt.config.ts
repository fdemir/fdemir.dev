// @ts-nocheck
import { defineNuxtConfig } from "nuxt";
import Icons from "unplugin-icons/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Furkan Demir",
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
});
