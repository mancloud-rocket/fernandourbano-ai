import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Forwards the current pathname as a request header so server components
 * (root layout) can derive the active locale and set <html lang>.
 *
 * Renamed from `middleware` per the Next.js 16 migration.
 */
function sanitizePathname(pathname: string): string {
  if (
    !pathname.startsWith("/") ||
    pathname.includes("..") ||
    pathname.includes("\\") ||
    pathname.length > 256
  ) {
    return "/";
  }
  return pathname;
}

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", sanitizePathname(request.nextUrl.pathname));
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|txt|xml|woff2?)$).*)"],
};
