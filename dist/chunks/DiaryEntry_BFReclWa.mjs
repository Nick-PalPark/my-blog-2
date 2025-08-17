import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://nick-palpark.github.io/my-blog-2/");
const $$DiaryEntry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DiaryEntry;
  const { image, date, title, excerpt, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="diary-card landscape-card"> <span class="diary-card-date">${date}</span> <div class="diary-card-image-wrapper"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="diary-card-image"> </div> <div class="diary-card-content"> <h2 class="diary-card-title">${title}</h2> <p class="diary-card-excerpt">${excerpt}</p>  </div> </div>`;
}, "/workspaces/my-blog-2/src/components/DiaryEntry.astro", void 0);

export { $$DiaryEntry as $ };
