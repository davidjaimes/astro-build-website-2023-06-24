/* empty css                           */import { i as createVNode, s as spreadAttributes, F as Fragment } from '../astro.250d703e.mjs';
import { $ as $$PostLayout } from './about.md.61b6a5c1.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'slash';
import 'node:fs/promises';
import 'html-escaper';
import 'fs';
import 'path';
import 'node:worker_threads';
import 'os';
import 'url';
import 'module';
import 'worker_threads';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<br>\n<p>Gatsby is a free and open source framework based on React that helps developers build blazing fast <strong>websites</strong> and <strong>apps</strong>.</p>\n<h2 id=\"quick-start\">Quick Start</h2>\n<p>Install the Gatsby CLI (Command Line Interface):</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">-g</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gatsby-cli</span></span></code></pre>\n<p>Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React. Use the Gatsby CLI to create a new site, specifying the hello-world starter.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">gatsby</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">new</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">davidjaimes.github.io.source.code</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">https://github.com/gatsbyjs/gatsby-starter-hello-world</span></span></code></pre>\n<h2 id=\"github-pages\">GitHub Pages</h2>\n<p>Publish files to a gh-pages branch on GitHub (or any other branch anywhere else).</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gh-pages</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">--save-dev</span></span></code></pre>\n<p>Create a new branch called <code>source</code> and switch to it:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">git</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">checkout</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">-b</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">source</span></span></code></pre>\n<p>Then add a <code>deploy</code> script to <code>package.json</code> in your repository’s codebase:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #ADBAC7\">{</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #96D0FF\">\"scripts\"</span><span style=\"color: #ADBAC7\">: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">\"deploy\"</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #96D0FF\">\"gatsby build &#x26;&#x26; gh-pages -d public -b main\"</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  }</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">}</span></span></code></pre>\n<p>When you run <code>npm run deploy</code> all contents of the public folder will be moved to your repository’s <code>main</code> branch. Make sure that your repository’s settings has the <code>main</code> branch set as the source to deploy from. Make all your changes in the <code>source</code> branch, <strong>not</strong> the <code>main</code> branch.</p>\n<h2 id=\"react-dependencies\">React Dependencies</h2>\n<p>Include popular icons in your React projects easily with <code>react-icons</code>, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">react-icons</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">--save</span></span></code></pre>\n<p>The best way to consume React-Bootstrap is via the npm package which you can install with <code>npm</code> (or <code>yarn</code> if you prefer).</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">react-bootstrap</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">bootstrap</span></span></code></pre>\n<p>In order for Bootstrap to render properly you need the following line in <code>gatsby-browser.js</code>:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F47067\">import</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">'bootstrap/dist/css/bootstrap.css'</span><span style=\"color: #ADBAC7\">;</span></span></code></pre>\n<h2 id=\"markdown\">Markdown</h2>\n<p>MDX is markdown for the component era. It lets you write JSX embedded inside markdown. It’s a great combination because it allows you to use markdown’s often terse syntax (such as <code># heading</code>) for the little things and JSX for more advanced components.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gatsby-plugin-mdx</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">@mdx-js/mdx</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">@mdx-js/react</span></span></code></pre>\n<h2 id=\"prismjs\">PrismJS</h2>\n<p>Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in thousands of websites, including some of those you visit daily. Add syntax highlighting to code blocks in markdown files using PrismJS.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">--save</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gatsby-remark-prismjs</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">prismjs</span></span></code></pre>\n<p>In order for Prism to render properly with a custom theme you need the following line in <code>gatsby-browser.js</code> and also save the theme in <code>node_modules/prismjs/themes</code>:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #DCBDFB\">require</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">\"prismjs/themes/base16-google.light.css\"</span><span style=\"color: #ADBAC7\">)</span></span>\n<span class=\"line\"><span style=\"color: #DCBDFB\">require</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">\"prismjs/plugins/line-numbers/prism-line-numbers.css\"</span><span style=\"color: #ADBAC7\">)</span></span>\n<span class=\"line\"><span style=\"color: #DCBDFB\">require</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">\"prismjs/plugins/command-line/prism-command-line.css\"</span><span style=\"color: #ADBAC7\">)</span></span></code></pre>\n<h2 id=\"katex\">KaTeX</h2>\n<p>The fastest math typesetting library for the web.</p>\n<ul>\n<li><strong>Fast:</strong> KaTeX renders its math synchronously and doesn’t need to reflow the page.</li>\n<li><strong>Print quality:</strong> KaTeX’s layout is based on Donald Knuth’s TeX, the gold standard for math typesetting.</li>\n<li><strong>Self contained:</strong> KaTeX has no dependencies and can easily be bundled with your website resources.</li>\n<li><strong>Server side rendering:</strong> KaTeX produces the same output regardless of browser or environment, so you can pre-render expressions using Node.js and send them as plain HTML.</li>\n</ul>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">remark-math</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">rehype-katex</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">katex</span></span></code></pre>\n<p>I tried installation <code>gatsby-remark-katex</code> and <code>gatsby-remark-mathjax</code> but it didn’t work. Check out the <a href=\"https://github.com/gatsbyjs/gatsby/issues/21866\">reasons</a> why. KaTeX will render properly with the following line in <code>gatsby-browser.js</code></p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #DCBDFB\">require</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">`katex/dist/katex.min.css`</span><span style=\"color: #ADBAC7\">)</span></span></code></pre>\n<h2 id=\"other-plugins\">Other Plugins</h2>\n<p>The web app manifest (part of the PWA specification) enabled by this plugin allows users to add your site to their home screen on most mobile browsers. The manifest provides configuration and icons to the phone.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">--save</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gatsby-plugin-manifest</span></span></code></pre>\n<p>A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">--save</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gatsby-source-filesystem</span></span></code></pre>\n<p>Processes images in markdown so they can be used in the production build.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">npm</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">install</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">--save</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gatsby-remark-images</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">gatsby-plugin-sharp</span></span></code></pre>\n<h2 id=\"gatsby-config-file\">Gatsby Config File</h2>\n<p>Setup your <code>gatsby-config.js</code> file:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #6CB6FF\">module</span><span style=\"color: #ADBAC7\">.</span><span style=\"color: #6CB6FF\">exports</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">=</span><span style=\"color: #ADBAC7\"> {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  siteMetadata: {siteUrl: </span><span style=\"color: #96D0FF\">`https://davidjaimes.com`</span><span style=\"color: #ADBAC7\">},</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  plugins: [</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">`gatsby-plugin-react-helmet`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      resolve: </span><span style=\"color: #96D0FF\">`gatsby-plugin-sharp`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      options: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      useMozJpeg: </span><span style=\"color: #6CB6FF\">false</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      stripMetadata: </span><span style=\"color: #6CB6FF\">false</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      defaultQuality: </span><span style=\"color: #6CB6FF\">75</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      resolve: </span><span style=\"color: #96D0FF\">`gatsby-source-filesystem`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      options: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        name: </span><span style=\"color: #96D0FF\">`pages`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        path: </span><span style=\"color: #96D0FF\">`${</span><span style=\"color: #ADBAC7\">__dirname</span><span style=\"color: #96D0FF\">}/src/pages/`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      resolve: </span><span style=\"color: #96D0FF\">`gatsby-source-filesystem`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      options: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        name: </span><span style=\"color: #96D0FF\">`images`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        path: </span><span style=\"color: #96D0FF\">`${</span><span style=\"color: #ADBAC7\">__dirname</span><span style=\"color: #96D0FF\">}/src/images/`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    {resolve: </span><span style=\"color: #96D0FF\">`gatsby-plugin-offline`</span><span style=\"color: #ADBAC7\">},</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      resolve: </span><span style=\"color: #96D0FF\">`gatsby-plugin-mdx`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      options: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        remarkPlugins: [</span><span style=\"color: #DCBDFB\">require</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">`remark-math`</span><span style=\"color: #ADBAC7\">)],</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        rehypePlugins: [</span><span style=\"color: #DCBDFB\">require</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">`rehype-katex`</span><span style=\"color: #ADBAC7\">)],</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        defaultLayouts: {default: require.</span><span style=\"color: #DCBDFB\">resolve</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">`./src/components/homepage.jsx`</span><span style=\"color: #ADBAC7\">)},</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        extensions: [</span><span style=\"color: #96D0FF\">`.mdx`</span><span style=\"color: #ADBAC7\">, </span><span style=\"color: #96D0FF\">`.md`</span><span style=\"color: #ADBAC7\">],</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        plugins: [</span><span style=\"color: #96D0FF\">`gatsby-remark-images`</span><span style=\"color: #ADBAC7\">],</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        gatsbyRemarkPlugins: [</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">          {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            resolve: </span><span style=\"color: #96D0FF\">`gatsby-remark-prismjs`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            options: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              classPrefix: </span><span style=\"color: #96D0FF\">'language-'</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              inlineCodeMarker: </span><span style=\"color: #6CB6FF\">null</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              showLineNumbers: </span><span style=\"color: #6CB6FF\">false</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              prompt: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                global: </span><span style=\"color: #6CB6FF\">true</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            },      </span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">          },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">          {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            resolve: </span><span style=\"color: #96D0FF\">`gatsby-remark-images`</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            options: {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              maxWidth: </span><span style=\"color: #6CB6FF\">768</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              showCaptions: </span><span style=\"color: #6CB6FF\">false</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              markdownCaptions: </span><span style=\"color: #6CB6FF\">true</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">              backgroundColor: </span><span style=\"color: #96D0FF\">'transparent'</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">          },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        ]</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  ],</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">}</span></span></code></pre>");

				const frontmatter = {"layout":"../layouts/post-layout.astro","date":"Dec 31, 2022","title":"GatsbyJS Configuration","path":"/gatsby","badges":["GatsbyJS"],"image":"gatsbyjs.webp","alt":"gatsbyjs","excerpt":"Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps."};
				const file = "/Users/davidjaimes/davidjaimes.github.io/src/pages/gatsby.md";
				const url = "/gatsby";
				function rawContent() {
					return "\n<br>\n\nGatsby is a free and open source framework based on React that helps developers build blazing fast **websites** and **apps**.\n\n## Quick Start\n\nInstall the Gatsby CLI (Command Line Interface):\n\n```shell\nnpm install -g gatsby-cli\n```\n\nKick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React. Use the Gatsby CLI to create a new site, specifying the hello-world starter.\n\n```shell\ngatsby new davidjaimes.github.io.source.code https://github.com/gatsbyjs/gatsby-starter-hello-world\n```\n\n## GitHub Pages\n\nPublish files to a gh-pages branch on GitHub (or any other branch anywhere else).\n\n```shell\nnpm install gh-pages --save-dev\n```\n\nCreate a new branch called `source` and switch to it:\n\n```shell\ngit checkout -b source\n``` \n\nThen add a `deploy` script to `package.json` in your repository’s codebase:\n\n```js\n{\n  \"scripts\": {\n    \"deploy\": \"gatsby build && gh-pages -d public -b main\"\n  }\n}\n```\n\nWhen you run `npm run deploy` all contents of the public folder will be moved to your repository’s `main` branch. Make sure that your repository’s settings has the `main` branch set as the source to deploy from. Make all your changes in the `source` branch, **not** the `main` branch.\n\n## React Dependencies\n\nInclude popular icons in your React projects easily with `react-icons`, which utilizes ES6 imports that allows you to include only the icons that your project is using.\n\n```bash\nnpm install react-icons --save\n```\n\nThe best way to consume React-Bootstrap is via the npm package which you can install with `npm` (or `yarn` if you prefer).\n\n```bash\nnpm install react-bootstrap bootstrap\n```\n\nIn order for Bootstrap to render properly you need the following line in `gatsby-browser.js`:\n\n```js\nimport 'bootstrap/dist/css/bootstrap.css';\n```\n\n## Markdown\n\nMDX is markdown for the component era. It lets you write JSX embedded inside markdown. It’s a great combination because it allows you to use markdown’s often terse syntax (such as `# heading`) for the little things and JSX for more advanced components.\n\n```bash\nnpm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react\n```\n\n## PrismJS\n\nPrism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in thousands of websites, including some of those you visit daily. Add syntax highlighting to code blocks in markdown files using PrismJS.\n\n```bash\nnpm install --save gatsby-remark-prismjs prismjs\n```\n\nIn order for Prism to render properly with a custom theme you need the following line in `gatsby-browser.js` and also save the theme in `node_modules/prismjs/themes`:\n\n```js\nrequire(\"prismjs/themes/base16-google.light.css\")\nrequire(\"prismjs/plugins/line-numbers/prism-line-numbers.css\")\nrequire(\"prismjs/plugins/command-line/prism-command-line.css\")\n```\n\n## KaTeX\n\nThe fastest math typesetting library for the web.\n- **Fast:** KaTeX renders its math synchronously and doesn’t need to reflow the page.\n- **Print quality:** KaTeX’s layout is based on Donald Knuth’s TeX, the gold standard for math typesetting.\n- **Self contained:** KaTeX has no dependencies and can easily be bundled with your website resources.\n- **Server side rendering:** KaTeX produces the same output regardless of browser or environment, so you can pre-render expressions using Node.js and send them as plain HTML.\n\n```bash\nnpm install remark-math rehype-katex katex\n```\n\nI tried installation `gatsby-remark-katex` and `gatsby-remark-mathjax` but it didn't work. Check out the [reasons](https://github.com/gatsbyjs/gatsby/issues/21866) why. KaTeX will render properly with the following line in `gatsby-browser.js`\n\n```js\nrequire(`katex/dist/katex.min.css`)\n```\n\n## Other Plugins\n\nThe web app manifest (part of the PWA specification) enabled by this plugin allows users to add your site to their home screen on most mobile browsers. The manifest provides configuration and icons to the phone.\n\n```bash\nnpm install --save gatsby-plugin-manifest\n```\n\nA Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.\n\n```bash\nnpm install --save gatsby-source-filesystem\n```\n\nProcesses images in markdown so they can be used in the production build.\n\n```bash\nnpm install --save gatsby-remark-images gatsby-plugin-sharp\n```\n\n## Gatsby Config File\n\nSetup your `gatsby-config.js` file:\n\n```js\nmodule.exports = {\n  siteMetadata: {siteUrl: `https://davidjaimes.com`},\n  plugins: [\n    `gatsby-plugin-react-helmet`,\n    {\n      resolve: `gatsby-plugin-sharp`,\n      options: {\n      useMozJpeg: false,\n      stripMetadata: false,\n      defaultQuality: 75,\n      },\n    },\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `pages`,\n        path: `${__dirname}/src/pages/`,\n      },\n    },\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `images`,\n        path: `${__dirname}/src/images/`,\n      },\n    },\n    {resolve: `gatsby-plugin-offline`},\n    {\n      resolve: `gatsby-plugin-mdx`,\n      options: {\n        remarkPlugins: [require(`remark-math`)],\n        rehypePlugins: [require(`rehype-katex`)],\n        defaultLayouts: {default: require.resolve(`./src/components/homepage.jsx`)},\n        extensions: [`.mdx`, `.md`],\n        plugins: [`gatsby-remark-images`],\n        gatsbyRemarkPlugins: [\n          {\n            resolve: `gatsby-remark-prismjs`,\n            options: {\n              classPrefix: 'language-',\n              inlineCodeMarker: null,\n              showLineNumbers: false,\n              prompt: {\n                global: true,\n              },\n            },      \n          },\n          {\n            resolve: `gatsby-remark-images`,\n            options: {\n              maxWidth: 768,\n              showCaptions: false,\n              markdownCaptions: true,\n              backgroundColor: 'transparent',\n            },\n          },\n        ]\n      },\n    },\n  ],\n}\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"quick-start","text":"Quick Start"},{"depth":2,"slug":"github-pages","text":"GitHub Pages"},{"depth":2,"slug":"react-dependencies","text":"React Dependencies"},{"depth":2,"slug":"markdown","text":"Markdown"},{"depth":2,"slug":"prismjs","text":"PrismJS"},{"depth":2,"slug":"katex","text":"KaTeX"},{"depth":2,"slug":"other-plugins","text":"Other Plugins"},{"depth":2,"slug":"gatsby-config-file","text":"Gatsby Config File"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$PostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
