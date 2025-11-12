import { type NextRequest, NextResponse } from "next/server"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const body = await request.json()

  // Mock update - in real app, update database
  return NextResponse.json({
    id,
    ...body,
    updatedAt: new Date(),
  })
}
