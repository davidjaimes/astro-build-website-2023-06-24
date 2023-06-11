/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.250d703e.mjs';
import 'html-escaper';
import { c as $$BaseLayout } from './about.md.3b8b97f2.mjs';
import { S as Search } from './index.astro.42e2a407.mjs';
import '@astrojs/internal-helpers/path';
import 'fs';
import 'node:fs/promises';
import 'node:url';
import 'node:fs';
import 'node:path';
import 'slash';
import 'path';
import 'node:worker_threads';
import 'os';
import 'url';
import 'module';
import 'worker_threads';
import 'fuse.js';
import 'react';
import 'react/jsx-runtime';

const $$Astro = createAstro("https://davidjaimes.github.io");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./about.md": () => import('./about.md.3b8b97f2.mjs').then(n => n.d),"./eclipsing-binaries.md": () => import('./eclipsing-binaries.md.296f06b5.mjs'),"./gatsby.md": () => import('./gatsby.md.8a703eeb.mjs'),"./github-google-domains.md": () => import('./github-google-domains.md.76d7b904.mjs'),"./jskycalc.md": () => import('./jskycalc.md.582380ce.mjs'),"./kepler-16b.md": () => import('./kepler-16b.md.b014ef70.mjs'),"./linear-regression.md": () => import('./linear-regression.md.48768a5c.mjs'),"./nearby-stars.md": () => import('./nearby-stars.md.313f6742.mjs'),"./terms.md": () => import('./terms.md.bb1fa5cd.mjs')}), () => "../pages/*.md");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="max-w-4xl mx-auto px-4 md:px-6 sm:px-4 xs:px-6 lg:px-0 xl:px-0 py-14 text-zinc-700">
    ${renderComponent($$result2, "Search", Search, { "client:load": true, "searchList": posts, "class": "pb-12", "client:component-hydration": "load", "client:component-path": "/Users/davidjaimes/davidjaimes.github.io/src/components/Search", "client:component-export": "default" })}
	</div>
` })}`;
}, "/Users/davidjaimes/davidjaimes.github.io/src/pages/search.astro");

const $$file = "/Users/davidjaimes/davidjaimes.github.io/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
