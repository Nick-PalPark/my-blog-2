import { c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_pMoYtizE.mjs';
import { $ as $$DiaryEntry } from '../../chunks/DiaryEntry_BFReclWa.mjs';
export { renderers } from '../../renderers.mjs';

const $$ToweringBalsam = createComponent(($$result, $$props, $$slots) => {
  const title = "Towering Balsam";
  const date = "WED 23RD JUL '25";
  const image = "/my-blog-2/images/Ttoekbokki.jpg";
  const excerpt = "IT\u2019S BEEN QUITE A WHILE SINCE I WAS OUT with Stroud Valleys Project, so it was nice to catch up with friends...";
  const url = "/my-blog-2/posts/towering-balsam";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DiaryEntry", $$DiaryEntry, { "image": image, "date": date, "title": title, "excerpt": excerpt, "url": url })} ` })}`;
}, "/workspaces/my-blog-2/src/pages/posts/towering-balsam.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/posts/towering-balsam.astro";
const $$url = "/my-blog-2/posts/towering-balsam";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ToweringBalsam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
