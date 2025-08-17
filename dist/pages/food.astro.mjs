import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_pMoYtizE.mjs';
import { $ as $$FoodDiaryCard } from '../chunks/foodDiaryCard_DuxB9nPy.mjs';
export { renderers } from '../renderers.mjs';

const foodDiary = [
  {
    date: "2025-07-15",
    restaurant: "산들애건강밥상",
    dish: "Ttoekbokki",
    image: "/my-blog-2/images/Ttoekbokki.jpg",
    excerpt: "Delicious healthy food. You need to order when you get a ticket to wait in line; lots of tasty side dishes and a succulent spicy octopus.",
    googleMapsUrl: "https://maps.app.goo.gl/udvM3eWHy65WAusj9"
  },
  {
    date: "2025-07-20",
    restaurant: "Kimchi House",
    dish: "Kimchi Jjigae",
    image: "/my-blog-2/images/Ttoekbokki.jpg",
    excerpt: "Comforting and spicy stew — perfect on a rainy day.",
    googleMapsUrl: "https://maps.app.goo.gl/udvM3eWHy65WAusj9"
  }
];

const $$Food = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Food Diary" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Food Diary</h1> <div class="diary-grid"> ${foodDiary.map((entry) => renderTemplate`${renderComponent($$result2, "FoodDiaryCard", $$FoodDiaryCard, { ...entry })}`)} </div> ` })}`;
}, "/workspaces/my-blog-2/src/pages/food.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/food.astro";
const $$url = "/my-blog-2/food";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Food,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
