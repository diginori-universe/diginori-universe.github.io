import{_ as e,c as s,o as a,a as n}from"./app.7a3f20fd.js";const o="/bench.png",f=JSON.parse('{"title":"Vue 3.2 Released!","description":"","frontmatter":{"title":"Vue 3.2 Released!","date":"2021-08-05T00:00:00.000Z","author":"Evan You","gravatar":"eca93da2c67aadafe35d477aa8f454b8","twitter":"@youyuxi"},"headers":[{"level":2,"title":"New SFC Features","slug":"new-sfc-features","link":"#new-sfc-features","children":[]},{"level":2,"title":"Web Components","slug":"web-components","link":"#web-components","children":[]},{"level":2,"title":"Performance Improvements","slug":"performance-improvements","link":"#performance-improvements","children":[]},{"level":2,"title":"Server-side Rendering","slug":"server-side-rendering","link":"#server-side-rendering","children":[]},{"level":2,"title":"Effect Scope API","slug":"effect-scope-api","link":"#effect-scope-api","children":[]}],"relativePath":"posts/vue-3.2.md"}'),t={name:"posts/vue-3.2.md"},l=n(`<p>We are excited to announce the release of Vue.js 3.2 &quot;Quintessential Quintuplets&quot;! This release includes many significant new features and performance improvements, and contains no breaking changes.</p><hr><h2 id="new-sfc-features" tabindex="-1">New SFC Features <a class="header-anchor" href="#new-sfc-features" aria-hidden="true">#</a></h2><p>Two new features for Single File Components (SFCs, aka <code>.vue</code> files) have graduated from experimental status and are now considered stable:</p><ul><li><p><code>&lt;script setup&gt;</code> is a compile-time syntactic sugar that greatly improves the ergonomics when using Composition API inside SFCs.</p></li><li><p><code>&lt;style&gt; v-bind</code> enables component state-driven dynamic CSS values in SFC <code>&lt;style&gt;</code> tags.</p></li></ul><p>Here is an example component using these two new features together:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> === </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">green</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color is: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> color </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> v-bind(color)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Try it out in the <a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgY29sb3IgPSByZWYoJ3JlZCcpXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8YnV0dG9uIEBjbGljaz1cImNvbG9yID0gY29sb3IgPT09ICdyZWQnID8gJ2dyZWVuJyA6ICdyZWQnXCI+XG4gICAgQ29sb3IgaXM6IHt7IGNvbG9yIH19XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZD5cbmJ1dHRvbiB7XG4gIGNvbG9yOiB2LWJpbmQoY29sb3IpO1xufVxuPC9zdHlsZT4ifQ==" target="_blank" rel="noreferrer">SFC Playground</a>, or read their respective documentations:</p><ul><li><a href="https://v3.vuejs.org/api/sfc-script-setup.html" target="_blank" rel="noreferrer"><code>&lt;script setup&gt;</code></a></li><li><a href="https://v3.vuejs.org/api/sfc-style.html#state-driven-dynamic-css" target="_blank" rel="noreferrer"><code>&lt;style&gt; v-bind</code></a></li></ul><p>Building on top of <code>&lt;script setup&gt;</code>, we also have a new RFC for improving the ergonomics of ref usage with compiler-enabled sugar - please share your feedback <a href="https://github.com/vuejs/rfcs/discussions/369" target="_blank" rel="noreferrer">here</a>.</p><h2 id="web-components" tabindex="-1">Web Components <a class="header-anchor" href="#web-components" aria-hidden="true">#</a></h2><p>Vue 3.2 introduces a new <code>defineCustomElement</code> method for easily creating native <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank" rel="noreferrer">custom elements</a> using Vue component APIs:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineCustomElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MyVueElement </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineCustomElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// normal Vue component options here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Register the custom element.</span></span>
<span class="line"><span style="color:#676E95;">// After registration, all \`&lt;my-vue-element&gt;\` tags</span></span>
<span class="line"><span style="color:#676E95;">// on the page will be upgraded.</span></span>
<span class="line"><span style="color:#A6ACCD;">customElements</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-vue-element</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MyVueElement)</span></span>
<span class="line"></span></code></pre></div><p>This API allows developers to create Vue-powered UI component libraries that can be used with any framework, or no framework at all. We have also added a new section in our docs on <a href="https://v3.vuejs.org/guide/web-components.html" target="_blank" rel="noreferrer">consuming and creating Web Components in Vue</a>.</p><h2 id="performance-improvements" tabindex="-1">Performance Improvements <a class="header-anchor" href="#performance-improvements" aria-hidden="true">#</a></h2><p>3.2 includes some significant performance improvements to Vue&#39;s reactivity system, thanks to the great work by <a href="https://github.com/basvanmeurs" target="_blank" rel="noreferrer">@basvanmeurs</a>. Specifically:</p><ul><li><a href="https://github.com/vuejs/vue-next/pull/3995" target="_blank" rel="noreferrer">More efficient ref implementation (~260% faster read / ~50% faster write)</a></li><li><a href="https://github.com/vuejs/vue-next/pull/4017" target="_blank" rel="noreferrer">~40% faster dependency tracking</a></li><li><a href="https://github.com/vuejs/vue-next/pull/4001" target="_blank" rel="noreferrer">~17% less memory usage</a></li></ul><p>The template compiler also received a number of improvements:</p><ul><li><a href="https://github.com/vuejs/vue-next/pull/3334" target="_blank" rel="noreferrer">~200% faster creation of plain element VNodes</a></li><li>More aggressive constant hoisting [<a href="https://github.com/vuejs/vue-next/commit/b7ea7c148552874e8bce399eec9fbe565efa2f4d" target="_blank" rel="noreferrer">1</a>] [<a href="https://github.com/vuejs/vue-next/commit/02339b67d8c6fab6ee701a7c4f2773139ed007f5" target="_blank" rel="noreferrer">2</a>]</li></ul><p>Finally, there is a new <a href="https://v3.vuejs.org/api/directives.html#v-memo" target="_blank" rel="noreferrer"><code>v-memo</code> directive</a> that provides the ability to memoize part of the template tree. A <code>v-memo</code> hit allows Vue to skip not only the Virtual DOM diffing, but the creation of new VNodes altogether. Although rarely needed, it provides an escape hatch to squeeze out maximum performance in certain scenarios, for example large <code>v-for</code> lists.</p><p>The usage of <code>v-memo</code>, which is a one-line addition, places Vue among the fastest mainstream frameworks in <a href="https://github.com/krausest/js-framework-benchmark" target="_blank" rel="noreferrer">js-framework-benchmark</a>:</p><p><img src="`+o+'" alt="benchmark"></p><h2 id="server-side-rendering" tabindex="-1">Server-side Rendering <a class="header-anchor" href="#server-side-rendering" aria-hidden="true">#</a></h2><p>The <code>@vue/server-renderer</code> package in 3.2 now ships an ES module build which is also decoupled from Node.js built-ins. This makes it possible to bundle and leverage <code>@vue/server-renderer</code> for use inside non-Node.js runtimes such as <a href="https://developers.cloudflare.com/workers/" target="_blank" rel="noreferrer">CloudFlare Workers</a> or Service Workers.</p><p>We also improved the streaming render APIs, with new methods for rendering to the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Streams_API" target="_blank" rel="noreferrer">Web Streams API</a>. Check out the <a href="https://github.com/vuejs/vue-next/tree/master/packages/server-renderer#streaming-api" target="_blank" rel="noreferrer">documentation of <code>@vue/server-renderer</code></a> for more details.</p><h2 id="effect-scope-api" tabindex="-1">Effect Scope API <a class="header-anchor" href="#effect-scope-api" aria-hidden="true">#</a></h2><p>3.2 introduces a new <a href="https://v3.vuejs.org/api/effect-scope.html" target="_blank" rel="noreferrer">Effect Scope API</a> for directly controlling the disposal timing of reactive effects (computed and watchers). It makes it easier to leverage Vue&#39;s reactivity API out of a component context, and also unlocks some advanced use cases inside components.</p><p>This is low-level API largely intended for library authors, so it&#39;s recommended to read the feature&#39;s <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md" target="_blank" rel="noreferrer">RFC</a> for the motivation and use cases of this feature.</p><hr><p>For a detailed list of all changes in 3.2, please refer to the <a href="https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer">full changelog</a>.</p>',30),r=[l];function p(c,i,d,u,m,h){return a(),s("div",null,r)}const D=e(t,[["render",p]]);export{f as __pageData,D as default};
