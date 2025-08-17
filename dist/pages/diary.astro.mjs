import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import '../chunks/Layout_pMoYtizE.mjs';
import 'clsx';
import { e as entries } from '../chunks/entries_AZng_h4E.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nick-palpark.github.io/my-blog-2/");
const $$DiaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DiaryCard;
  return renderTemplate`const ${image, date, title, excerpt, url} = Astro.props;
---
${maybeRenderHead()}<div class="diary-card landscape-card"> <span class="diary-card-date">${date}</span> <div class="diary-card-image-wrapper"> <a${addAttribute(url, "href")}> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="diary-card-image"> </a> </div> <div class="diary-card-content"> <h2 class="diary-card-title">${title}</h2> <p class="diary-card-excerpt">${excerpt}</p> <div style="margin-top:0.5rem;"> <a${addAttribute(url, "href")} class="diary-card-link">READ ON <span>&rarr;</span></a> </div> </div> </div>`;
}, "/workspaces/my-blog-2/src/components/DiaryCard.astro", void 0);

const $$Diary = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="diary-grid"> ${entries.map((entry) => renderTemplate`${renderComponent($$result, "DiaryCard", $$DiaryCard, { ...entry })}`)} </div>`;
}, "/workspaces/my-blog-2/src/pages/diary.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/diary.astro";
const $$url = "/my-blog-2/diary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Diary,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
