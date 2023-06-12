/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, _ as __astro_tag_component__ } from '../astro.250d703e.mjs';
import 'html-escaper';
import { a as $$Image, b as $$GithubIcon, c as $$BaseLayout } from './about.md.61b6a5c1.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'slash';
import 'node:fs/promises';
import Fuse from 'fuse.js';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

const profileCircle = {"src":"/_astro/profile-circle.b5c66c5b.png","width":717,"height":717,"format":"png"};

const profileCircle$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: profileCircle
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://davidjaimes.github.io/");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Card;
  const { path, image, date, excerpt } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(path, "href")}>
    <div class="lg:max-w-3xl lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[24px] text-center overflow-hidden border border-b-0 border-gray-300 lg:border-r-0 lg:border-b"${addAttribute(`background-image: url(${image})`, "style")} title="David Jaimes"></div>
        <div class="border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b-[24px] lg:rounded-l-none lg:rounded-r-[24px] p-4 flex flex-col justify-between leading-normal bg-[#161b22]">
            <div class="mb-2">
                <p class="text-sm text-[#b1bac4] flex items-center">
                    </p><div class="flex items-center">
                        <svg aria-hidden="true" class="w-4 h-4 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-4 h-4 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-4 h-4 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-4 h-4 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-4 h-4 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                
                <div class="text-[#c9d1d9] font-bold mb-2">${excerpt}</div>
                <!-- <p class="text-gray-700 text-base">{excerpt}</p> -->
            </div>
            <div class="flex items-center">
                ${renderComponent($$result, "Image", $$Image, { "src": profileCircle, "alt": "Avatar of David Jaimes", "class": "w-10 h-10 mr-4" })}
                <div class="text-sm">
                    <p class="text-[#b1bac4] leading-none">David Jaimes</p>
                    <p class="text-[#b1bac4]">${date}</p>
                </div>
            </div>
        </div>
    </div>
</a>`;
}, "/Users/davidjaimes/davidjaimes.github.io/src/components/card.astro");

const $$Astro$3 = createAstro("https://davidjaimes.github.io/");
const $$GoogleDomainsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GoogleDomainsIcon;
  const { pathfill } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg class="h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Domains</title><path${addAttribute(pathfill, "fill")} d="M17.29.817c-.811 0-1.388.469-1.713 1.208L13.491 7.01c-3.121-3.072-8.145-3.015-11.207.102-3.066 3.12-3.048 8.134.072 11.218a7.991 7.991 0 0 0 5.467 2.29l-.597 1.444a.942.942 0 0 0-.054.325c0 .45.379.811.83.793h5.717c.794 0 1.515-.468 1.84-1.208l8.369-20.003A.708.708 0 0 0 24 1.647a.827.827 0 0 0-.83-.83zm-3.787 6.205a7.94 7.94 0 0 1 2.399 5.609c.018 4.365-3.5 7.936-7.864 7.972h-.199Z"></path></svg>`;
}, "/Users/davidjaimes/davidjaimes.github.io/src/components/google-domains-icon.astro");

const $$Astro$2 = createAstro("https://davidjaimes.github.io/");
const $$AstroIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  const { pathfill } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg class="h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Astro</title><path${addAttribute(pathfill, "fill")} d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494 3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"></path></svg>`;
}, "/Users/davidjaimes/davidjaimes.github.io/src/components/astro-icon.astro");

const $$Astro$1 = createAstro("https://davidjaimes.github.io/");
const $$Jumbotron = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Jumbotron;
  return renderTemplate`${maybeRenderHead($$result)}<section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Bienvenidx!</h1>
        <p class="mb-8 text-lg font-normal text-[#b1bac4] lg:text-xl sm:px-16 lg:px-48">website powered by</p>

        <div class="flex pb-10 space-x-1 justify-center text-[#b1bac4]">
        	${renderComponent($$result, "GoogleIcon", $$GoogleDomainsIcon, { "pathfill": "#b1bac4" })}
        	<p class="text-sm pr-4">Google</p>
        	${renderComponent($$result, "AstroIcon", $$AstroIcon, { "pathfill": "#b1bac4" })}
        	<p class="text-sm pr-4">Astro</p>
        	${renderComponent($$result, "GithubIcon", $$GithubIcon, { "pathfill": "#b1bac4" })}
        	<p class="text-sm">GitHub</p>
        </div>

        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border text-[#c9d1d9] border-[#b1bac4] bg-[#161b22] hover:bg-[#0d1117]">
                learn more about me
            </a>  
        </div>
    </div>
</section>`;
}, "/Users/davidjaimes/davidjaimes.github.io/src/components/jumbotron.astro");

const options = {
  keys: ["frontmatter.title", "frontmatter.excerpt"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5
};
function Search({
  searchList
}) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);
  const posts = fuse.search(query).map((result) => result.item).slice(0, 10);
  function handleOnSearch({
    target = {}
  }) {
    const {
      value
    } = target;
    setQuery(value);
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("label", {
      htmlFor: "search",
      className: "mb-2 font-medium text-gray-900 sr-only dark:text-white",
      children: "Search"
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative",
      children: [/* @__PURE__ */ jsx("div", {
        className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-auto",
        children: /* @__PURE__ */ jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "icon icon-tabler icon-tabler-search",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/* @__PURE__ */ jsx("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
          }), /* @__PURE__ */ jsx("circle", {
            cx: 10,
            cy: 10,
            r: 7
          }), /* @__PURE__ */ jsx("line", {
            x1: 21,
            y1: 21,
            x2: 15,
            y2: 15
          })]
        })
      }), /* @__PURE__ */ jsx("input", {
        type: "text",
        id: "search",
        value: query,
        onChange: handleOnSearch,
        className: "block w-full p-4 pl-10\n                              text-gray-900 \n                              border border-gray-300\n                              rounded-lg bg-gray-50\n\n                              focus:outline-none\n                              focus:ring-sky-500\n                              focus:border-sky-500",
        placeholder: "Search for anything..."
      })]
    }), query.length > 0 && /* @__PURE__ */ jsxs("div", {
      className: "mt-4 mb-6 text-white",
      children: ["Found ", posts.length, " ", posts.length === 1 ? "result" : "results", " for: ", /* @__PURE__ */ jsx("span", {
        className: "text-pink-500",
        children: query
      })]
    }), /* @__PURE__ */ jsx("ul", {
      className: "list-none",
      children: posts && posts.map((post) => /* @__PURE__ */ jsxs("li", {
        className: "pb-6",
        children: [/* @__PURE__ */ jsx("a", {
          className: "text-lg text-sky-500 hover:text-sky-700 hover:underline underline-offset-2",
          href: post.url,
          children: post.frontmatter.title
        }), /* @__PURE__ */ jsx("p", {
          className: "text-sm text-[#b1bac4]",
          children: post.frontmatter.excerpt
        })]
      }))
    })]
  });
}
__astro_tag_component__(Search, "@astrojs/react");

const $$Astro = createAstro("https://davidjaimes.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./about.md": () => import('./about.md.61b6a5c1.mjs').then(n => n.d),"./eclipsing-binaries.md": () => import('./eclipsing-binaries.md.8407651b.mjs'),"./gatsby.md": () => import('./gatsby.md.19613c40.mjs'),"./github-google-domains.md": () => import('./github-google-domains.md.5e9f8dd6.mjs'),"./jskycalc.md": () => import('./jskycalc.md.f023a0ef.mjs'),"./kepler-16b.md": () => import('./kepler-16b.md.0853b35f.mjs'),"./linear-regression.md": () => import('./linear-regression.md.1dcc8990.mjs'),"./nearby-stars.md": () => import('./nearby-stars.md.5140aadf.mjs'),"./terms.md": () => import('./terms.md.e3b8682e.mjs')}), () => "../pages/*.md");
  posts.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="max-w-4xl mx-auto px-4 md:px-6 sm:px-4 xs:px-6 lg:px-0 xl:px-0 pb-14 text-zinc-700">

      ${renderComponent($$result2, "Jumbotron", $$Jumbotron, {})}

      <div class="max-w-4xl mx-auto px-0 md:px-0 sm:px-0 xs:px-0 lg:px-14 xl:px-14 pb-20 text-zinc-700">
        ${renderComponent($$result2, "Search", Search, { "client:load": true, "searchList": posts, "class": "pb-12", "client:component-hydration": "load", "client:component-path": "/Users/davidjaimes/davidjaimes.github.io/src/components/Search", "client:component-export": "default" })}
      </div>
      

      ${posts.map((post) => renderTemplate`<div class="flex justify-center pb-12 last:pb-0">
            ${renderComponent($$result2, "Card", $$Card, { "title": post.frontmatter.title, "path": post.url, "image": post.frontmatter.image, "date": post.frontmatter.date, "excerpt": post.frontmatter.excerpt })}
        </div>`)}
	</div>
` })}`;
}, "/Users/davidjaimes/davidjaimes.github.io/src/pages/index.astro");

const $$file = "/Users/davidjaimes/davidjaimes.github.io/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Search as S, index as i, profileCircle$1 as p };
