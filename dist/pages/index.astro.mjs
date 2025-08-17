import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_pMoYtizE.mjs';
import { $ as $$FoodDiaryCard } from '../chunks/foodDiaryCard_DuxB9nPy.mjs';
import { e as entries } from '../chunks/entries_AZng_h4E.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "English Ajeossi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>English Ajeossi</h1> <nav> <ul> <li><a href="/my-blog-2/About-me">About</a></li> <li><a href="/my-blog-2/food">Food</a></li> </ul> </nav> <div class="diary-grid"> ${entries.map((entry) => renderTemplate`${renderComponent($$result2, "DiaryCard", $$FoodDiaryCard, { ...entry })}`)} </div> ` })}`;
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
