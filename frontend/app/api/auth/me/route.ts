import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("auth_token")?.value

    if (!token) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    // Mock: extract user ID from token
    const userId = token.replace("token_", "")

    // Mock user data
    const mockUsers: Record<string, any> = {
      "1": {
        id: "1",
        name: "John Student",
        email: "student@example.com",
        role: "student",
      },
      "2": {
        id: "2",
        name: "Jane Faculty",
        email: "faculty@example.com",
        role: "faculty",
      },
      "3": {
        id: "3",
        name: "Admin User",
        email: "admin@example.com",
        role: "admin",
      },
    }

    const user = mockUsers[userId]

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
