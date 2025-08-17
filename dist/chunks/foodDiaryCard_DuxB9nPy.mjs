import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://nick-palpark.github.io/my-blog-2/");
const $$FoodDiaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FoodDiaryCard;
  const { date, restaurant, dish, image, excerpt, googleMapsUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="diary-card landscape-card"> <span class="diary-card-date">${date}</span> <div class="diary-card-image-wrapper"> <a${addAttribute(googleMapsUrl, "href")} target="_blank" rel="noopener"> <img${addAttribute(image, "src")}${addAttribute(dish, "alt")} class="diary-card-image"> </a> </div> <div class="diary-card-content"> <h2 class="diary-card-title">${restaurant}: ${dish}</h2> <p class="diary-card-excerpt">${excerpt}</p> <a${addAttribute(googleMapsUrl, "href")} target="_blank" rel="noopener" class="diary-card-link">
View Google Maps Review <span>&rarr;</span> </a> </div> </div>`;
}, "/workspaces/my-blog-2/src/components/foodDiaryCard.astro", void 0);

export { $$FoodDiaryCard as $ };
