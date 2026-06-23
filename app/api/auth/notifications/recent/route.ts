import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_APP_BACKEND_URL ||
  "https://citadelproadmin.vercel.app/api";



export async function GET(request: NextRequest) {
  const token = request.headers.get("authorization");

  try {
    const response = await fetch(`${BACKEND_URL}/notifications/`, {
      headers: {
        ...(token ? { Authorization: token } : {}),
      },
    });

    if (!response.ok) {
      return NextResponse.json({ notifications: [] }, { status: 200 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ notifications: [] }, { status: 200 });
  }
}
