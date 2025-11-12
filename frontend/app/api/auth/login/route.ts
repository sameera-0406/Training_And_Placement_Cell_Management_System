import { type NextRequest, NextResponse } from "next/server"

// Mock user database - replace with real database
const mockUsers = [
  {
    id: "1",
    name: "John Student",
    email: "student@example.com",
    password: "password123",
    role: "student",
  },
  {
    id: "2",
    name: "Jane Faculty",
    email: "faculty@example.com",
    password: "password123",
    role: "faculty",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    password: "password123",
    role: "admin",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    // Find user
    const user = mockUsers.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Create response with user data
    const response = NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })

    // Set secure cookie
    response.cookies.set("auth_token", `token_${user.id}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
