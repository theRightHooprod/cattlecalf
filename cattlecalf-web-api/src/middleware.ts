// Copyright (C) 2025 theRightHoopRod
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";
import { NextURL } from "next/dist/server/web/next-url";

const locales = ["en", "es"];
const defaultLocale = "en";
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup", "/"];

function getLocale(request: NextRequest): string {
  // Convert NextRequest headers to a plain object for Negotiator
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
}

function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (locales.includes(parts[0] as (typeof locales)[number])) {
    parts.shift(); // remove the locale part
  }
  return "/" + parts.join("/");
}

async function authenticationRedirect(
  request: NextRequest,
  hasLocale: boolean,
) {
  const pathname = stripLocale(request.nextUrl.pathname);

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !request.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!hasLocale) {
    return NextResponse.redirect(request.nextUrl);
  }

  return;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internal paths and APIs
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return;
  }

  // Check if the URL already includes a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return await authenticationRedirect(request, pathnameHasLocale);
  }

  const locale = getLocale(request);

  // Rewrite the URL to include the detected locale
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // return NextResponse.redirect(request.nextUrl);
  return await authenticationRedirect(request, false);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|favicon-dark.svg|favicon-light.svg).*)",
  ],
};
