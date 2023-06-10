import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  }), react()],
  site: "https://davidjaimes.github.io",
  markdown: {
    shikiConfig: {
      theme: 'min-dark'
    },
    remarkPlugins: ['remark-math'],
    rehypePlugins: ['rehype-katex']
  }
});