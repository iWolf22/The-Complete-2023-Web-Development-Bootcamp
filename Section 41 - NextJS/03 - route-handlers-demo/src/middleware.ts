import { NextResponse, type NextRequest } from "next/server";

// matcher method -> redirect users to the home page

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//     matcher: "/profile"
// };

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.redirect(new URL("/hello", request.url));
//     }
// }

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");

    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custom-value");

    return response;
}