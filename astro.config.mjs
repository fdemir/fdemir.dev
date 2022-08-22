import { defineConfig } from "astro/config";

import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://fdemir.dev",
  integrations: [
    robotsTxt({
      sitemap: false,
    }),
    compress(),
  ],
});
