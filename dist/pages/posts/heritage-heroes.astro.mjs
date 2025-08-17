import { c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_pMoYtizE.mjs';
import { $ as $$DiaryEntry } from '../../chunks/DiaryEntry_BFReclWa.mjs';
export { renderers } from '../../renderers.mjs';

const $$HeritageHeroes = createComponent(($$result, $$props, $$slots) => {
  const title = "Heritage Heroes";
  const date = "WED 9TH JUL '25";
  const image = "/my-blog-2/images/Ttoekbokki.jpg";
  const excerpt = "A MID MORNING APPOINTMENT AT THE council chambers at Ebley where the students at the Star College were presented with their awards...";
  const url = "/my-blog-2/posts/heritage-heroes";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DiaryEntry", $$DiaryEntry, { "image": image, "date": date, "title": title, "excerpt": excerpt, "url": url })} ` })}`;
}, "/workspaces/my-blog-2/src/pages/posts/heritage-heroes.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/posts/heritage-heroes.astro";
const $$url = "/my-blog-2/posts/heritage-heroes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HeritageHeroes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
