import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import '../chunks/Layout_pMoYtizE.mjs';
export { renderers } from '../renderers.mjs';

const $$Posts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>My First Post</h1> <article> <h2>Events in Korea & My Journey Back to Studying IoT</h2> <p>
Recently, there have been many exciting events happening in Korea. From cultural festivals to tech meetups, the atmosphere has been vibrant and inspiring.
</p> <p>
Despite all the activity, I’ve found it challenging to focus and get back into my studies, especially with IoT. Distractions are everywhere, but I’m determined to push through and continue learning about the Internet of Things. It’s a journey, and every step forward counts!
</p> </article>`;
}, "/workspaces/my-blog-2/src/pages/posts.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/posts.astro";
const $$url = "/my-blog-2/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Posts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
