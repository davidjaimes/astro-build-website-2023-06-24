/* empty css                           */import { i as createVNode, s as spreadAttributes, F as Fragment } from '../astro.250d703e.mjs';
import { $ as $$PostLayout } from './about.md.3b8b97f2.mjs';
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

				const html = updateImageReferences("<br>\n<p>Turn your GitHub respository into an elegant webiste using GitHub Pages. GitHub Pages also supports using custom domains and changing from the default, like <code>username.github.io</code>, to any domain you own.</p>\n<p>In this tutorial I will show you how to your host own website (domain purchase necessary) and create a custom email address (e.g., <code>hello@davidjaimes.com</code>) for free. This is an alternative to using services such as Squarespace, Wix, Google Workspace. That’s a savings of $20 USD per month. This tutorial assumes you have a website ready to be published.</p>\n<h2 id=\"custom-domain\">Custom Domain</h2>\n<p>Go to <a href=\"https://domains.google\">Google Domains website</a> and select your desired personal or professional domain. I went ahead and purchased <code>https://davidjaimes.com</code> for $12 USD per year. No need to buy a more expensive domain ending (i.e., <code>https://davidjaimes.movie</code> for $320 USD per year).</p>\n<p>The first thing to do is head on over to <strong>DNS</strong> settings and create new custom resource records. This <a href=\"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site\">GitHub Docs page</a> gives specific instructions but can be a little confusing to follow because they are not Google Domains specific. Create the <code>A</code> record:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">Host</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">Name</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">Type</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">TTL</span><span style=\"color: #ADBAC7\">     </span><span style=\"color: #96D0FF\">Data</span></span>\n<span class=\"line\"><span style=\"color: #F69D50\">@</span><span style=\"color: #ADBAC7\">            </span><span style=\"color: #96D0FF\">A</span><span style=\"color: #ADBAC7\">       </span><span style=\"color: #6CB6FF\">3600</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #6CB6FF\">185.199</span><span style=\"color: #96D0FF\">.108.153</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                             </span><span style=\"color: #F69D50\">185.199.109.153</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                             </span><span style=\"color: #F69D50\">185.199.110.153</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                             </span><span style=\"color: #F69D50\">185.199.111.153</span></span></code></pre>\n<p>Next, create a <code>CNAME</code> record and don’t forget the period (”.”) at the end of your data entry:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">Host</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">Name</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">Type</span><span style=\"color: #ADBAC7\">     </span><span style=\"color: #96D0FF\">TTL</span><span style=\"color: #ADBAC7\">     </span><span style=\"color: #96D0FF\">Data</span></span>\n<span class=\"line\"><span style=\"color: #F69D50\">www</span><span style=\"color: #ADBAC7\">          </span><span style=\"color: #96D0FF\">CNAME</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #6CB6FF\">3600</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">davidjaimes.github.io.</span></span></code></pre>\n<p><img src=\"/custom-records.png\" alt=\"Custom DNS Records\"></p>\n<h2 id=\"github-account\">GitHub Account</h2>\n<p>Setup a free account with <a href=\"https://github.com\">Github</a> and create a repository with structure <code>username.github.io</code>. For example, my repository name is <code>davidjaimes.github.io</code> and it set as a public repo and not to private. This will not work if your repo is set to private.</p>\n<p>Next, go to <strong>Settings > Pages</strong> and enter your newly acquired domain address in the <strong>Custom domain</strong> field and make sure to check the <strong>Enforce HTTPS</strong> option. Now test your settings by entering the following command into your terminal:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">dig</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">+noall</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">+answer</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">davidjaimes.com</span></span></code></pre>\n<p>This is the ouput:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark-dimmed\" style=\"background-color: #22272e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F69D50\">davidjaimes.com.</span><span style=\"color: #ADBAC7\">        </span><span style=\"color: #6CB6FF\">3055</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">IN</span><span style=\"color: #ADBAC7\">      </span><span style=\"color: #96D0FF\">A</span><span style=\"color: #ADBAC7\">       </span><span style=\"color: #6CB6FF\">185.199</span><span style=\"color: #96D0FF\">.110.153</span></span>\n<span class=\"line\"><span style=\"color: #F69D50\">davidjaimes.com.</span><span style=\"color: #ADBAC7\">        </span><span style=\"color: #6CB6FF\">3055</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">IN</span><span style=\"color: #ADBAC7\">      </span><span style=\"color: #96D0FF\">A</span><span style=\"color: #ADBAC7\">       </span><span style=\"color: #6CB6FF\">185.199</span><span style=\"color: #96D0FF\">.111.153</span></span>\n<span class=\"line\"><span style=\"color: #F69D50\">davidjaimes.com.</span><span style=\"color: #ADBAC7\">        </span><span style=\"color: #6CB6FF\">3055</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">IN</span><span style=\"color: #ADBAC7\">      </span><span style=\"color: #96D0FF\">A</span><span style=\"color: #ADBAC7\">       </span><span style=\"color: #6CB6FF\">185.199</span><span style=\"color: #96D0FF\">.109.153</span></span>\n<span class=\"line\"><span style=\"color: #F69D50\">davidjaimes.com.</span><span style=\"color: #ADBAC7\">        </span><span style=\"color: #6CB6FF\">3055</span><span style=\"color: #ADBAC7\">    </span><span style=\"color: #96D0FF\">IN</span><span style=\"color: #ADBAC7\">      </span><span style=\"color: #96D0FF\">A</span><span style=\"color: #ADBAC7\">       </span><span style=\"color: #6CB6FF\">185.199</span><span style=\"color: #96D0FF\">.108.153</span></span></code></pre>\n<h2 id=\"custom-email-address\">Custom Email Address</h2>\n<p>Login into your Google account and go to <strong>Manage Google Account > Security > Signing into to Google > App passwords</strong>. Generate an app password. For example, mine is <code>itdmwqjhowffvbgj</code>. Next, go to your Gmail inbox and go to <strong>Settings > See all settings > Accounts and Import > Send mail as</strong> and click on “add another email address”.</p>");

				const frontmatter = {"layout":"../layouts/post-layout.astro","date":"Dec 31, 2022","title":"Setting up GitHub with Google Domains and Gmail","path":"/github-google-domains","badges":["Hosting","Domain","Custom"],"image":"custom-records.webp","alt":"Custom DNS Records.","excerpt":"Turn your GitHub respository into an elegant webiste using GitHub Pages."};
				const file = "/Users/davidjaimes/davidjaimes.github.io/src/pages/github-google-domains.md";
				const url = "/github-google-domains";
				function rawContent() {
					return "\n<br>\n\nTurn your GitHub respository into an elegant webiste using GitHub Pages. GitHub Pages also supports using custom domains and changing from the default, like `username.github.io`, to any domain you own.\n\nIn this tutorial I will show you how to your host own website (domain purchase necessary) and create a custom email address (e.g., `hello@davidjaimes.com`) for free. This is an alternative to using services such as Squarespace, Wix, Google Workspace. That's a savings of $20 USD per month. This tutorial assumes you have a website ready to be published.\n\n## Custom Domain\nGo to [Google Domains website](https://domains.google) and select your desired personal or professional domain. I went ahead and purchased `https://davidjaimes.com` for \\$12 USD per year. No need to buy a more expensive domain ending (i.e., `https://davidjaimes.movie` for $320 USD per year).\n\nThe first thing to do is head on over to **DNS** settings and create new custom resource records. This [GitHub Docs page](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) gives specific instructions but can be a little confusing to follow because they are not Google Domains specific. Create the `A` record:\n\n```bash\nHost Name    Type    TTL     Data\n@            A       3600    185.199.108.153\n                             185.199.109.153\n                             185.199.110.153\n                             185.199.111.153\n```\n\nNext, create a `CNAME` record and don't forget the period (\".\") at the end of your data entry:\n\n```bash\nHost Name    Type     TTL     Data\nwww          CNAME    3600    davidjaimes.github.io.\n```\n\n![Custom DNS Records](/custom-records.png)\n\n## GitHub Account\nSetup a free account with [Github](https://github.com) and create a repository with structure `username.github.io`. For example, my repository name is `davidjaimes.github.io` and it set as a public repo and not to private. This will not work if your repo is set to private.\n\nNext, go to **Settings > Pages** and enter your newly acquired domain address in the **Custom domain** field and make sure to check the **Enforce HTTPS** option. Now test your settings by entering the following command into your terminal:\n\n```bash\ndig +noall +answer davidjaimes.com\n```\n\nThis is the ouput:\n\n```bash\ndavidjaimes.com.        3055    IN      A       185.199.110.153\ndavidjaimes.com.        3055    IN      A       185.199.111.153\ndavidjaimes.com.        3055    IN      A       185.199.109.153\ndavidjaimes.com.        3055    IN      A       185.199.108.153\n```\n\n## Custom Email Address\nLogin into your Google account and go to **Manage Google Account > Security > Signing into to Google > App passwords**. Generate an app password. For example, mine is `itdmwqjhowffvbgj`. Next, go to your Gmail inbox and go to **Settings > See all settings > Accounts and Import > Send mail as** and click on \"add another email address\".\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"custom-domain","text":"Custom Domain"},{"depth":2,"slug":"github-account","text":"GitHub Account"},{"depth":2,"slug":"custom-email-address","text":"Custom Email Address"}];
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
