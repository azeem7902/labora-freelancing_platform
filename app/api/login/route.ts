import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // NOTE: Removed space before http://
    const r = await axios.post("http://127.0.0.1:8000/api/login/", data);

    console.log("Backend response:", r.data);

    const accessToken = r.data.access;
    const refreshToken = r.data.refresh;

    const response = NextResponse.json({
      message: "Login successful",
      role: r.data.role
    });

    // Access token - 1 hour
    response.cookies.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60
    });

    // Refresh token - 7 days
    response.cookies.set({
      name: "refreshToken",
      value: refreshToken,
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7
    });

    return response;

  } catch (err: any) {
    console.error("Login error:", err?.response?.data || err.message);

    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
