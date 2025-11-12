import { type NextRequest, NextResponse } from "next/server"

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
    const { name, email, password, role } = await request.json()

    // Validate input
    if (!name || !email || !password || !role) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Check if user exists
    if (mockUsers.find((u) => u.email === email)) {
      return NextResponse.json({ message: "Email already registered" }, { status: 409 })
    }

    // Create new user
    const newUser = {
      id: String(mockUsers.length + 1),
      name,
      email,
      password,
      role: role as "student" | "faculty" | "admin",
    }

    mockUsers.push(newUser)

    // Create response
    const response = NextResponse.json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    })

    // Set secure cookie
    response.cookies.set("auth_token", `token_${newUser.id}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
