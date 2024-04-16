import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://stylichess.github.io",
  base: "/dist",
  integrations: [tailwind(), react()],
});
