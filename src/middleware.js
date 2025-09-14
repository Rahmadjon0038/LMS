import { NextResponse } from "next/server";

export function middleware(req) {
  const role = req.cookies.get("role")?.value;
  const url = req.nextUrl.clone();

  // Agar login qilmagan bo‘lsa
  if (!role && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Agar user umumiy /dashboard ga kirsa, subpage ga yo‘naltirish
  if (url.pathname === "/dashboard" && role) {
    url.pathname = `/dashboard/${role}`;
    return NextResponse.redirect(url);
  }

  // Role check
  if (url.pathname.startsWith("/dashboard/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (url.pathname.startsWith("/dashboard/teacher") && role !== "teacher") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (url.pathname.startsWith("/dashboard/student") && role !== "student") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
