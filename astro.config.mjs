import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: { assets: true },
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  }), react()],
  site: "https://davidjaimes.github.io",
  base: "/davidjaimes.github.io",
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: false
    },
    remarkPlugins: ['remark-math'],
    rehypePlugins: ['rehype-katex']
  }
});
