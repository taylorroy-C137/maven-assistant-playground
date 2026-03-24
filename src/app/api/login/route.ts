import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { password } = body;

  if (password === process.env.SITE_PASSWORD) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set("site-auth", "authenticated", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      // 7-day session
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
