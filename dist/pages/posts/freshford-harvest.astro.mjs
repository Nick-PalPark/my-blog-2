import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_vzJ8iMoP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_SC8TzLBk.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$DiaryEntry = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/workspaces/my-blog-2/src/components/DiaryEntry.astro", void 0);

const $$FreshfordHarvest = createComponent(($$result, $$props, $$slots) => {
  const title = "Freshford Harvest";
  const date = "THU 10TH JUL '25";
  const image = "/my-blog-2/images/Ttoekbokki.jpg";
  const excerpt = "MY FIRST SEED HARVEST OF THE SEASON with Glorious Grasslands was a long way down. At the very bottom of the Cotswolds, the fields were bursting with life and color. It was hard work, but the sense of accomplishment at the end of the day made it all worthwhile.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DiaryEntry", $$DiaryEntry, { "image": image, "date": date, "title": title, "excerpt": excerpt, "url": url })} ` })}`;
}, "/workspaces/my-blog-2/src/pages/posts/freshford-harvest.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/posts/freshford-harvest.astro";
const $$url = "/my-blog-2/posts/freshford-harvest";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FreshfordHarvest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
