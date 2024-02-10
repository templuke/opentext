import connectMongoDB from "../../../libs/mongodb";
import Msg from "../../../models/msg";

import { NextResponse } from "next/server";







export async function POST(request) {

  const { title, description } = await request.json();
  await connectMongoDB();
  await Msg.create({ title, description });
  return NextResponse.json({ message: "Msg Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const msgs = await Msg.find();
  return NextResponse.json({ msgs });
}





