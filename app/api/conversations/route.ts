import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { userId, isGroup, members, name } = body
    
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if(isGroup && (!members || members.length < 2 || !name)) {
      return new NextResponse('Invalid data', { status: 400 })
    }
    
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
