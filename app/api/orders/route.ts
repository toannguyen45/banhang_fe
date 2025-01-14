import prisma from "@/lib/db";
import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth"
import { NextApiRequest, NextApiResponse } from "next";

// export async function POST(request: Request) {
//     const { email, name, profileImage } = await request.json();

//     try {
//         const user = await prisma.user.create({
//             data: {
//                 email,
//                 name,
//                 profileImage,
//             },
//         });
//         return NextResponse.json(user, { status: 201 });
//     } catch (error) {
//         return NextResponse.json({ error: error }, { status: 500 });
//     }
// }

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const session = await getServerSession()
//         if (!session) {
//             return NextResponse.json({ message: "You must be logged in." }, { status: 500 });
//         }
//         return NextResponse.json(session, { status: 201 });
//     } catch (error) {
//         return NextResponse.json({ error: error }, { status: 500 });
//     }
// }