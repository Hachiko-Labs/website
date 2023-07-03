/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, s as spreadAttributes, u as unescapeHTML, F as Fragment, _ as __astro_tag_component__, f as renderHead } from '../astro.b6b04dd7.mjs';
import { Button } from '@hachiko-labs/ui-components';
import { optimize } from 'svgo';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';

const $$Astro$h = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { navItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="w-full h-20 fixed flex justify-center items-center backdrop-blur-xl bg-neutral-100/40 z-40">
  <div class="w-11/12 h-full flex items-center justify-between relative">
    <a class="flex items-center gap-2" href="/" aria-label="Home">
      <svg width="30" height="30" viewBox="0 0 181 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.642578" y="0.873047" width="179.381" height="42.433" rx="21.2165" fill="#3027D9"></rect>
        <rect x="23.0649" y="52.3988" width="134.536" height="42.433" rx="21.2165" fill="#4A3AFF"></rect>
        <rect x="52.9624" y="105.44" width="74.7423" height="42.433" rx="21.2165" fill="#7663FF"></rect>
      </svg>
      <div class="text-neutral font-[Inter] font-bold flex gap-1">
        <div class="text-xl">
          Hachiko
        </div>
        <div class="text-primary text-xl">
          Labs
        </div>
      </div>
    </a>
    <div class="hidden lg:flex h-full pr-12">
      ${navItems.map((navItem) => renderTemplate`<a class="flex items-center h-full px-4 text-dark"${addAttribute(navItem.href, "href")}${addAttribute(navItem.ariaLabel, "aria-label")}>
          ${navItem.label}
        </a>`)}
    </div>
    ${renderComponent($$result, "Button", Button, { "client:visible": true, "type": "primary", "client:component-hydration": "visible", "client:component-path": "@hachiko-labs/ui-components", "client:component-export": "Button" }, { "default": ($$result2) => renderTemplate`Sign up` })}
  </div>
</nav>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/Navbar.astro");

const $$Astro$g = createAstro();
const $$HeroTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$HeroTitle;
  return renderTemplate`${maybeRenderHead($$result)}<div class="text-neutral font-bold text-5xl sm:text-5xl lg:text-6xl xl:text-7xl px-0 sm:px-7 md:px-14 lg:px-3">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/HeroTitle.astro");

const $$Astro$f = createAstro();
const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Slider;
  const { items, repeat } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="group flex overflow-hidden">
  ${Array.from({ length: repeat ?? 3 }, () => renderTemplate`<div class="slider shrink-0 pr-12" data-slider>
      <ul class="flex gap-12">
        ${items.map(({ icon, alt }) => renderTemplate`<li class="flex items-center justify-center">
            <img${addAttribute(icon, "src")}${addAttribute(alt, "alt")} width="44">
          </li>`)}
      </ul>
    </div>`)}
</div>

<style>
  @keyframes slider {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .slider {
    animation: slider linear infinite;
    animation-duration: 60s;
  }
</style>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/Slider.astro");

const $$Astro$e = createAstro();
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Steps;
  const { title, highlight, step, fromColor = "", toColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="text-neutral-500 text-base lg:text-lg xl:text-xl sm:text-base flex flex-col items-center">
  ${title}
  <div${addAttribute(`w-[1px] h-36 mt-1 bg-gradient-to-b from-white from-0% via-${fromColor.split("from-")[1]} ${toColor} to-100%`, "class")}>
  </div>
  <div${addAttribute(`w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gradient-to-l ${fromColor} ${toColor}`, "class")}>
    <span class="text-white">${step}</span>
  </div>
  <div${addAttribute(`mt-2 text-xl inline text-transparent bg-clip-text font-bold bg-gradient-to-l ${fromColor} ${toColor}`, "class")}>
    ${highlight}
  </div>
</div>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/Steps/Steps.astro");

const $$Astro$d = createAstro();
const $$GradientText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$GradientText;
  const { text, fromColor, toColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(`inline text-transparent bg-clip-text bg-gradient-to-l ${fromColor} ${toColor} to-70%`, "class")}>
  ${text}
</span>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/GradientText.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$c = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hero;
  const logos = [
    { icon: "/assets/nextjs.svg", alt: "Next JS" },
    { icon: "/assets/React.svg", alt: "React" },
    { icon: "/assets/Angular.svg", alt: "Angular" },
    { icon: "/assets/Svelte.svg", alt: "Svelte" },
    { icon: "/assets/Astro.svg", alt: "Astro" },
    { icon: "/assets/NodeJS.svg", alt: "Node JS" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section class="w-screen flex items-center justify-center text-center pb-12">\n  <div class="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-52 px-4 md:px-8">\n    ', '\n    <div class="text-neutral-500 text-lg lg:text-xl xl:text-2xl sm:text-lg mt-6 px-9 md:px-20 lg:px-24 xl:px-44">\n      We offer exciting opportunities to work on cutting-edge projects with\n      top-tier US startups\n    </div>\n    <div class="flex flex-col sm:flex-row my-16 sm:my-12 justify-center">\n      ', `
    </div>
    <div class="flex flex-wrap flex-col items-center gap-y-6 px-4 mb-16 sm:mb-12">
      <div class="text-neutral-500 text-lg lg:text-xl xl:text-2xl sm:text-lg mt-6 px-9 md:px-20 lg:px-24 xl:px-44">
        Working with great technologies
      </div>
      <div class="w-[60vw] md:w-[50vw] sm:w-[80vw] relative flex flex-wrap items-center justify-center gap-x-14 gap-y-6 overflow-hidden before:w-20 before:bg-gradient-to-l before:from-white before:to-transparent before:top-0 before:bottom-0 before:content-[''] before:z-10 before:absolute before:right-0 after:w-20 after:bg-gradient-to-r after:from-white after:to-transparent after:top-0 after:bottom-0 after:content-[''] after:z-10 after:absolute after:left-0">
        `, '\n      </div>\n    </div>\n    <div id="how-it-works">\n      ', '\n    </div>\n  </div>\n</section>\n\n<script type="module">\n  const handleOnClick = () => {\n    console.log("Hello World");\n  };\n\n  const applyNowButton = document.getElementById("apply-now");\n  applyNowButton.addEventListener("click", handleOnClick);\n<\/script>'])), maybeRenderHead($$result), renderComponent($$result, "HeroTitle", $$HeroTitle, {}, { "default": ($$result2) => renderTemplate`
      <span class="inline">Take Your</span>
      ${renderComponent($$result2, "GradientText", $$GradientText, { "text": "Engineering", "fromColor": "from-primary-active", "toColor": "to-secondary-color3" })}
      <span class="inline">Career to the Next Level</span>
    ` }), renderComponent($$result, "Button", Button, { "client:visible": true, "type": "primary", "id": "apply-now", "client:component-hydration": "visible", "client:component-path": "@hachiko-labs/ui-components", "client:component-export": "Button" }, { "default": ($$result2) => renderTemplate`
        Join the waitlist
      ` }), renderComponent($$result, "Slider", $$Slider, { "items": logos }), renderComponent($$result, "Steps", $$Steps, { "title": "How it works", "step": "1", "highlight": "Apply", "fromColor": "from-neutral", "toColor": "to-primary-active" }));
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/Hero.astro");

const $$Astro$b = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead($$result)}<div class="text-neutral font-bold text-3xl sm:text-3xl lg:text-4xl xl:text-5xl px-0 sm:px-5 md:px-12 lg:px-1">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/Title.astro");

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$a = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/christiannajera/Christian/projects/UI/website/node_modules/astro-icon/lib/Icon.astro");

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$9 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "/Users/christiannajera/Christian/projects/UI/website/node_modules/astro-icon/lib/Spritesheet.astro");

const $$Astro$8 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/christiannajera/Christian/projects/UI/website/node_modules/astro-icon/lib/SpriteProvider.astro");

const $$Astro$7 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "/Users/christiannajera/Christian/projects/UI/website/node_modules/astro-icon/lib/Sprite.astro");

const Sprite = Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$6 = createAstro();
const $$MaterialIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MaterialIcon;
  const {
    bgColor = "bg-neutral-300",
    color = "text-neutral-600",
    icon,
    size = 50
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`flex items-center justify-center rounded-full ${bgColor} ${color}`, "class")}${addAttribute(`width: ${size}px; height: ${size}px;`, "style")}>
  ${renderComponent($$result, "Sprite", Sprite, { "pack": "mdi", "name": icon, "style": `width: ${size / 2}px; height: ${size / 2}px;` })}
</div>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/MaterialIcon.astro");

const $$Astro$5 = createAstro();
const $$Step1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Step1;
  const { default: Graphics } = await import('../graphics.0db1786e.mjs');
  return renderTemplate`${maybeRenderHead($$result)}<section class="w-full mb-8 sm:mb-16 xl:m pt-[2rem] md:pt-[12vw] lg:pt-0">
  <div class="text-center mx-auto md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center px-4 md:px-8">
    ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate`
      Unlock a new level of job search, with a ${renderComponent($$result2, "GradientText", $$GradientText, { "fromColor": "from-neutral", "toColor": "to-primary-active", "text": "Personalized" })} approach.
    ` })}
    <div class="text-neutral-500 text-lg lg:text-xl xl:text-2xl sm:text-lg mt-6">
      We understand that your are more than just your CV. We help you create a
      profile that truly represents you - your qualities, career goals and
      values.
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-center gap-16 mt-20 mb-8 sm:mt-16 sm:mb-16 px-4 md:px-8">
    <div class="w-full md:w-7/12 lg:w-6/12 xl:w-4/12">
      ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Graphics)}` })}
    </div>
    <div class="w-full md:w-8/12 lg:w-5/12 xl:w-4/12 flex flex-col gap-8 items-center">
      <div class="w-5/6 flex flex-col gap-4">
        ${renderComponent($$result, "MaterialIcon", $$MaterialIcon, { "size": 40, "icon": "auto-awesome" })}
        <span class="text-xl md:text-xl font-bold text-neutral">
          Personalized job matching
        </span>
        <p class="text-neutral-500 text-base md:text-sm">
          Create a profile with your unique skills, experience, and career goals
          to get matched with job opportunities that fit your needs.
        </p>
      </div>
      <div class="w-5/6 flex flex-col gap-4">
        ${renderComponent($$result, "MaterialIcon", $$MaterialIcon, { "size": 40, "icon": "chart-timeline-variant-shimmer" })}
        <span class="text-xl md:text-xl font-bold text-neutral">
          Streamlined application process
        </span>
        <p class="text-neutral-500 text-base md:text-sm">
          Say goodbye to long, tedious application forms and say hello to a fast
          and efficient way to apply for your dream job.
        </p>
      </div>
    </div>
  </div>
  ${renderComponent($$result, "Steps", $$Steps, { "step": "2", "highlight": "Connect", "fromColor": "from-secondary-color3", "toColor": "to-primary-active" })}
</section>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/HowItWorks/Step1.astro");

const $$Astro$4 = createAstro();
const $$Step2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Step2;
  return renderTemplate`${maybeRenderHead($$result)}<section class="w-full text-center flex flex-col items-center mb-8 sm:mb-16 xl:m pt-[2rem] md:pt-[12vw] lg:pt-0 px-4 md:px-8">
  <div class="text-center mx-auto md:w-[600px] xl:w-[700px] flex flex-col justify-center items-center">
    ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate`
      Personalized, human 
      ${renderComponent($$result2, "GradientText", $$GradientText, { "fromColor": "from-secondary-color3", "toColor": "to-primary-active", "text": "Connection" })}
    ` })}
    <div class="text-neutral-500 text-lg lg:text-xl xl:text-2xl sm:text-lg mt-6">
      A short call with our talent manager can help you identify your strengths
      and weaknesses, and provide you with actionable steps to achieve your
      career goals.
    </div>
  </div>
  <div class="mt-8 w-full md:w-7/12 lg:w-5/12 xl:w-4/12">
    <img src="../../assets/svgs/zoomcall.svg" alt="first call interview">
  </div>
  ${renderComponent($$result, "Steps", $$Steps, { "step": "3", "highlight": "Get matched", "fromColor": "from-warning-400", "toColor": "to-secondary-color3" })}
</section>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/HowItWorks/Step2.astro");

const $$Astro$3 = createAstro();
const $$Step3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Step3;
  const { default: Email } = await import('../email.56d028cb.mjs');
  return renderTemplate`${maybeRenderHead($$result)}<section class="w-full text-center flex flex-col items-center mb-8 sm:mb-16 xl:m pt-[2rem] md:pt-[12vw] lg:pt-0 px-4 md:px-8">
  <div class="text-center mx-auto md:w-[600px] xl:w-[700px] flex flex-col justify-center items-center">
    ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate`
      Discover your perfect 
      ${renderComponent($$result2, "GradientText", $$GradientText, { "fromColor": "from-secondary-color3", "toColor": "to-warning-400", "text": "Startup" })} match
    ` })}
    <div class="text-neutral-500 text-lg lg:text-xl xl:text-2xl sm:text-lg mt-6">
      We'll connect you with startups that align with your skills, interests,
      and career goals, making your job search easier and more efficient.
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-center gap-16 mt-20 mb-8 sm:mt-16 sm:mb-16 px-4 md:px-8">
    <div class="w-full md:w-7/12 lg:w-6/12 xl:w-6/12">
      ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Email)}` })}
    </div>
    <div class="w-full md:w-7/12 lg:w-5/12 xl:w-5/12 flex flex-col gap-8 justify-center items-center">
      <div class="w-5/6 flex flex-col gap-4 text-left">
        ${renderComponent($$result, "MaterialIcon", $$MaterialIcon, { "size": 40, "icon": "attach-money" })}
        <span class="text-xl md:text-xl font-bold text-neutral">
          Earn 3-5x local rates on average
        </span>
        <p class="text-neutral-500 text-base md:text-sm">
          You'll earn above average salaries, paid on a monthly basis, always in
          USD.
        </p>
      </div>
      <div class="w-5/6 flex flex-col gap-4 text-left">
        ${renderComponent($$result, "MaterialIcon", $$MaterialIcon, { "size": 40, "icon": "bank" })}
        <span class="text-xl md:text-xl font-bold text-neutral">
          Paid direct to your bank every 2 weeks
        </span>
        <p class="text-neutral-500 text-base md:text-sm">
          Say goodbye to delays and paperwork, and embrace the ease of receiving
          regular payments that help you stay financially empowered
        </p>
      </div>
    </div>
  </div>
</section>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/HowItWorks/Step3.astro");

const FAQData = [{
  question: "What is Hachiko Labs?",
  answer: "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations."
}, {
  question: "How is Hachiko Labs different from other remote job marketplaces?",
  answer: "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase."
}, {
  question: "How can I get paid in USD while working outside of the US?",
  answer: "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund."
}, {
  question: "What kind of companies does Hachiko Labs partner with?",
  answer: "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have"
}];
const FAQ = () => /* @__PURE__ */ jsxs("section", {
  className: "relative pt-16 pb-16 overflow-hidden",
  children: [/* @__PURE__ */ jsx("div", {
    className: "absolute -top-10",
    id: "FAQ"
  }), /* @__PURE__ */ jsx("div", {
    className: "relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "md:max-w-4xl mx-auto",
      children: [/* @__PURE__ */ jsx("p", {
        className: "mb-7 text-xs text-neutral-500  tracking-wider font-bold uppercase text-center",
        children: "Have any questions?"
      }), /* @__PURE__ */ jsx("h2", {
        className: "mb-16 text-neutral text-4xl xl:text-5xl font-bold tracking-normal text-center",
        children: "FAQs"
      }), /* @__PURE__ */ jsx("div", {
        className: "mb-11 flex flex-wrap -m-1",
        children: FAQData.map((item, index) => /* @__PURE__ */ jsx("div", {
          className: "w-full p-1",
          children: /* @__PURE__ */ jsx(FAQBox, {
            title: item.question,
            content: item.answer
          })
        }, `${item.question}-${item.answer}`))
      })]
    })
  })]
});
const FAQBox = ({
  defaultOpen,
  title,
  content
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return /* @__PURE__ */ jsxs("div", {
    className: "pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-xl border border-solid border-neutral-border mb-4 relative cursor-pointer",
    onClick: () => setIsOpen(!isOpen),
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex flex-col p-2  justify-center items-start",
      children: [/* @__PURE__ */ jsx("h3", {
        className: "text-neutral font-bold text-lg pt-3 sm:pt-0 pr-8 sm:pr-0",
        children: title
      }), /* @__PURE__ */ jsx("p", {
        className: `text-neutral-500 pt-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`,
        children: content
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "w-[28px] h-[28px] flex items-center justify-center rounded-full bg-neutral-200 absolute top-6 right-4 sm:top-8 sm:right-8",
      children: /* @__PURE__ */ jsx("svg", {
        width: "20px",
        height: "20px",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: `transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"}`,
        children: /* @__PURE__ */ jsx("path", {
          d: "M4.16732 12.5L10.0007 6.66667L15.834 12.5",
          stroke: "#6E7191",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })
    })]
  });
};
__astro_tag_component__(FAQ, "@astrojs/react");

const $$Astro$2 = createAstro();
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Landing;
  const { title, meta } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="mask-icon" href="/favicon.svg" color="#4a3aff">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta${addAttribute(meta.name, "name")}${addAttribute(meta.content, "content")}>
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "Sprite.Provider", Sprite.Provider, {}, { "default": ($$result2) => renderTemplate`
      ${renderSlot($$result2, $$slots["default"])}
    ` })}

    
  </body>
</html>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/layouts/Landing.astro");

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { footerData } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<footer>
  <div class="py-10 bg-neutral-200">
    <div class="container mx-auto px-2 w-full md:w-4/5">
      <div class="flex flex-wrap gap-4 items-center md:gap-0">
        <div class="w-full md:w-1/3">
          <div class="flex sm:justify-center md:justify-start grow basis-0">
            <div class="mr-2 text-6xl">
              <svg width="30" height="30" viewBox="0 0 181 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.642578" y="0.873047" width="179.381" height="42.433" rx="21.2165" fill="#3027D9"></rect>
                <rect x="23.0649" y="52.3988" width="134.536" height="42.433" rx="21.2165" fill="#4A3AFF"></rect>
                <rect x="52.9624" y="105.44" width="74.7423" height="42.433" rx="21.2165" fill="#7663FF"></rect>
              </svg>
            </div>
            <div class="font-['Inter'] flex gap-1 font-bold text-xl">
              <div class="text-xl">
                Hachiko
              </div>
              <div class="text-primary text-xl">
                Labs
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/3 flex flex-wrap justify-between">
          <div class="text-center w-full flex sm:justify-center md:justify-end gap-8 mb-0 lg:mb-0">
            ${footerData.map((item) => renderTemplate`<div>
                <a href="#"${addAttribute(`mb-6 ${item.items?.length ? "font-bold text-2xl" : "font-normal text-base"} text-neutral hover:text-primary`, "class")}>${item.title}</a>
                <ul>
                  ${item.items?.map((listItem) => renderTemplate`<li class="mb-4">
                      <a class="text-neutral hover:text-primary" href="#" aria-label="">${listItem}</a>
                    </li>`)}
                </ul>
              </div>`)}
          </div>
        </div>
      </div>
      <div class="flex-col-reverse mt-2 items-center flex md:flex-row md:justify-between">
        <p class="text-sm text-gray-400 text-center">
          Copyright &copy; 2023 Hachiko Labs. All rights reserved.
        </p>
        <a class="w-10 h-10 flex p-1 rounded-xl text-neutral" href="#">
          ${renderComponent($$result, "Sprite", Sprite, { "pack": "mdi", "name": "linkedin", "style": "width: 22px; height: 22px;" })}
        </a>
      </div>
    </div>
  </div>
</footer>`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/components/Footer.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const navItems = [
    { label: "For Companies", href: "" },
    { label: "How it works", href: "#how-it-works", ariaLabel: "How it works" },
    { label: "FAQ", href: "" }
  ];
  const footerData = [
    {
      title: "About"
    },
    {
      title: "How it works",
      href: "#how-it-works",
      ariaLabel: "How it works"
    },
    {
      title: "Vetting process"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Landing", $$Landing, { "title": "Hachiko: Find your dream job", "meta": {
    name: "hachiko-labs",
    content: "We're making it easy for everyone to find their dream job and companies to find their dream team."
  } }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Navbar", $$Navbar, { "navItems": navItems })}
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${renderComponent($$result2, "Step1", $$Step1, {})}
  ${renderComponent($$result2, "Step2", $$Step2, {})}
  ${renderComponent($$result2, "Step3", $$Step3, {})}
  ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/FAQ", "client:component-export": "FAQ" })}
  ${renderComponent($$result2, "Footer", $$Footer, { "footerData": footerData })}
` })}`;
}, "/Users/christiannajera/Christian/projects/UI/website/src/pages/index.astro");

const $$file = "/Users/christiannajera/Christian/projects/UI/website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
