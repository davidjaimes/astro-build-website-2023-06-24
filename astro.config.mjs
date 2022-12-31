import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: { applyBaseStyles: true },
  })],
  site: "https://davidjaimes.github.io",
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
  },
});
