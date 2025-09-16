import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url
  const hostname = request.headers.get("host") || ""

  // Check if the request is for the AI subdomain
  const isAiSubdomain = hostname.startsWith("shuai.")

  // Skip for API routes, static files, and _next paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next()
  }

  // Rewrite the URL based on the hostname
  if (isAiSubdomain) {
    url.pathname = `/ai${pathname}`
    return NextResponse.rewrite(url)
  }

  // For the main domain, use the default app routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
