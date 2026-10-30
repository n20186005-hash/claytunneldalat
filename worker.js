import { securityHeaders } from "./security.js";
const known = new Set([
  "/vi",
  "/zh",
  "/ko",
  "/ticket-price",
  "/how-to-get-there",
  "/highlights",
  "/vi/gia-ve",
  "/vi/cach-di",
  "/vi/diem-check-in",
  "/zh/menpiao",
  "/zh/jiaotong",
  "/zh/liangdian",
  "/ko/ticket-price",
  "/ko/how-to-get-there",
  "/ko/highlights",
  "/privacy",
  "/terms",
  "/cookies",
  "/photo-credits",
]);
export async function route(request, env) {
  const url = new URL(request.url);
  const alias =
    url.hostname === "www.claytunneldalat.com" ||
    (url.hostname === "claytunneldalat.com" && url.protocol === "http:");
  if (alias || known.has(url.pathname)) {
    if (alias) {
      url.hostname = "claytunneldalat.com";
      url.protocol = "https:";
      url.port = "";
    }
    if (known.has(url.pathname)) url.pathname += "/";
    return new Response(null, {
      status: 308,
      headers: {
        location: url.toString(),
        "cache-control": "no-store",
        ...securityHeaders,
      },
    });
  }
  const errorDocument = ["/404", "/404/", "/404.html"].includes(url.pathname);
  const assetRequest = errorDocument
    ? new Request(new URL("/404", url), request)
    : request;
  const response = await env.ASSETS.fetch(assetRequest);
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(securityHeaders)) headers.set(k, v);
  const status = errorDocument ? 404 : response.status;
  if (status === 404) {
    headers.set("x-robots-tag", "noindex");
    headers.set("cache-control", "no-store");
  }
  return new Response(request.method === "HEAD" ? null : response.body, {
    status,
    headers,
  });
}
export default { fetch: route };
