import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_vzJ8iMoP.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/my-blog-2/","cacheDir":"file:///workspaces/my-blog-2/node_modules/.astro/","outDir":"file:///workspaces/my-blog-2/dist/","srcDir":"file:///workspaces/my-blog-2/src/","publicDir":"file:///workspaces/my-blog-2/public/","buildClientDir":"file:///workspaces/my-blog-2/dist/client/","buildServerDir":"file:///workspaces/my-blog-2/dist/server/","adapterName":"","routes":[{"file":"file:///workspaces/my-blog-2/dist/About-me/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-me","isIndex":false,"type":"page","pattern":"^\\/About-me\\/?$","segments":[[{"content":"About-me","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/About-me.astro","pathname":"/About-me","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/my-blog-2/dist/diary/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/diary","isIndex":false,"type":"page","pattern":"^\\/diary\\/?$","segments":[[{"content":"diary","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/diary.astro","pathname":"/diary","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/my-blog-2/dist/posts/freshford-harvest/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/freshford-harvest","isIndex":false,"type":"page","pattern":"^\\/posts\\/freshford-harvest\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"freshford-harvest","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/freshford-harvest.astro","pathname":"/posts/freshford-harvest","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/my-blog-2/dist/posts/heritage-heroes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/heritage-heroes","isIndex":false,"type":"page","pattern":"^\\/posts\\/heritage-heroes\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"heritage-heroes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/heritage-heroes.astro","pathname":"/posts/heritage-heroes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/my-blog-2/dist/posts/towering-balsam/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/towering-balsam","isIndex":false,"type":"page","pattern":"^\\/posts\\/towering-balsam\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"towering-balsam","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/towering-balsam.astro","pathname":"/posts/towering-balsam","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/my-blog-2/dist/posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts","isIndex":false,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts.astro","pathname":"/posts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/my-blog-2/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://nick-palpark.github.io/my-blog-2/","base":"/my-blog-2/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/my-blog-2/src/pages/About-me.astro",{"propagation":"none","containsHead":true}],["/workspaces/my-blog-2/src/pages/diary.astro",{"propagation":"none","containsHead":true}],["/workspaces/my-blog-2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/my-blog-2/src/pages/posts.astro",{"propagation":"none","containsHead":true}],["/workspaces/my-blog-2/src/pages/posts/freshford-harvest.astro",{"propagation":"none","containsHead":true}],["/workspaces/my-blog-2/src/pages/posts/heritage-heroes.astro",{"propagation":"none","containsHead":true}],["/workspaces/my-blog-2/src/pages/posts/towering-balsam.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/About-me@_@astro":"pages/about-me.astro.mjs","\u0000@astro-page:src/pages/diary@_@astro":"pages/diary.astro.mjs","\u0000@astro-page:src/pages/posts/freshford-harvest@_@astro":"pages/posts/freshford-harvest.astro.mjs","\u0000@astro-page:src/pages/posts/heritage-heroes@_@astro":"pages/posts/heritage-heroes.astro.mjs","\u0000@astro-page:src/pages/posts/towering-balsam@_@astro":"pages/posts/towering-balsam.astro.mjs","\u0000@astro-page:src/pages/posts@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CHnv_6ae.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/my-blog-2/file:///workspaces/my-blog-2/dist/About-me/index.html","/my-blog-2/file:///workspaces/my-blog-2/dist/diary/index.html","/my-blog-2/file:///workspaces/my-blog-2/dist/posts/freshford-harvest/index.html","/my-blog-2/file:///workspaces/my-blog-2/dist/posts/heritage-heroes/index.html","/my-blog-2/file:///workspaces/my-blog-2/dist/posts/towering-balsam/index.html","/my-blog-2/file:///workspaces/my-blog-2/dist/posts/index.html","/my-blog-2/file:///workspaces/my-blog-2/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"LOpz1njP+CpS8tgkoqCti8zTkTsev61T1KlFXPkOUO8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
