import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_vzJ8iMoP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_SC8TzLBk.mjs';
export { renderers } from '../../renderers.mjs';

const $$ToweringBalsam = createComponent(($$result, $$props, $$slots) => {
  const title = "Towering Balsam";
  const date = "WED 23RD JUL '25";
  const image = "/my-blog-2/images/Ttoekbokki.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>${title}</h1> <p><em>${date}</em></p> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;"> <p>
IT’S BEEN QUITE A WHILE SINCE I WAS OUT with Stroud Valleys Project, so it was nice to catch up with friends.
</p> </article> ` })}`;
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
