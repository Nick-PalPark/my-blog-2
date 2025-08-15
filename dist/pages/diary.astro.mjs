import { c as createComponent, m as maybeRenderHead, a as renderComponent, r as renderTemplate } from '../chunks/astro/server_vzJ8iMoP.mjs';
import 'kleur/colors';
import 'html-escaper';
import '../chunks/Layout_SC8TzLBk.mjs';
import { $ as $$DiaryCard } from '../chunks/DiaryCard_B3owSADM.mjs';
import { e as entries } from '../chunks/entries_BpulxfSA.mjs';
export { renderers } from '../renderers.mjs';

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
