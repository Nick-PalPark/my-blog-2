import { a as createAstro, c as createComponent, e as renderHead, f as renderSlot, r as renderTemplate } from './astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro("https://nick-palpark.github.io/my-blog-2/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/workspaces/my-blog-2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
