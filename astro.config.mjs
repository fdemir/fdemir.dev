import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://fdemir.dev",

  integrations: [solidJs(), robotsTxt()],
});
