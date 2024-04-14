import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SCRET_KEY = process.env.AUTH_SCRET_KEY;

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const url = request.nextUrl.clone();
  // const test = getServerSession();
  // console.log(test);
  // if (request.nextUrl.pathname.startsWith('/posts')) {
  //   url.pathname = '/';
  //   // posts는 로그인이 필요하다.
  //   //todo: 인증 로직 추가해야한다.
  //   return NextResponse.redirect(`${url}?login=required`)
  //   // return await withAuth(request);
  // }
  return response;
}

function validateUser(req: NextRequest): Promise<Response> {
  return fetch("/tokencheck_api", {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // cookie: `세션 쿠키 ID=${req.cookies.get('세션 쿠키 ID')}`,
    },
  });
}

async function withAuth(request: NextRequest) {
  try {
    const url = request.nextUrl.clone();

    url.pathname = "/";

    const response = await validateUser(request);
    if (response.status === 200) return NextResponse.next();
    if (response.status === 401) return NextResponse.redirect(url);
  } catch (e) {
    throw new Error(e);
  }
}

/*
 * 아래와 같이 시작하는 것들을 제외한 모두 경로를 매치합니다:
 * - api (API routes)
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico (favicon file)
 */
export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|images|favicon.ico|mockServiceWorker|manifest.json).*)",
  ],
};
