import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_vzJ8iMoP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_SC8TzLBk.mjs';
import { $ as $$DiaryCard } from '../chunks/DiaryCard_B3owSADM.mjs';
import { e as entries } from '../chunks/entries_BpulxfSA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nick-palpark.github.io/my-blog-2/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to My Astro Blog!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome to My Astro Blog!</h1> <nav> <ul> <li><a href="/my-blog-2/About-me">About</a></li> <li><a href="/my-blog-2/posts">Food</a></li> </ul> </nav> <div class="diary-grid"> ${entries.map((entry) => renderTemplate`${renderComponent($$result2, "DiaryCard", $$DiaryCard, { ...entry })}`)} </div> ` })}`;
}, "/workspaces/my-blog-2/src/pages/index.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/index.astro";
const $$url = "/my-blog-2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
