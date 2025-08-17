import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CfgbM27m.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import '../chunks/Layout_pMoYtizE.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>About Me</h1> <p>Hey there — I’m Nick, and this blog is a reflection of what I’m building, learning, and questioning.</p> <h2>🎯 What I Do</h2> <p>I specialize in strategic transitions, intellectual property, and organizational clarity — often at the intersection of tech, law, and diplomacy.</p> <h2>🧩 Why I Started This Site</h2> <p>After navigating complex corporate pivots and diving deep into modular dashboard creation, I wanted a space that’s both technically curious and personally honest. Enter: Nick’s Diary.</p> <h2>🔍 Topics I Explore</h2> <ul> <li>Tech workflows & automation</li> <li>Language, meaning & accessibility</li> <li>Innovation, IP, and fairness</li> <li>Personal transitions and decision-making</li> </ul> <h2>✨ Random Facts</h2> <ul> <li>Big fan of structured problem-solving and dashboards that don’t waste a click</li> <li>Reads legal docs like bedtime stories</li> <li>Secretly enjoys wrangling CI errors (well, almost)</li> </ul>`;
}, "/workspaces/my-blog-2/src/pages/About-me.astro", void 0);

const $$file = "/workspaces/my-blog-2/src/pages/About-me.astro";
const $$url = "/my-blog-2/About-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutMe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
