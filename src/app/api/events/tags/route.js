import Tags from "@/models/Tags";
import { dbConnect } from "@/utils/mongoose.js";
import { NextResponse } from "next/server";
dbConnect();


export async function GET() {
  try {
    const DataTags = await Tags.find();
    return NextResponse.json(DataTags);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener el los Tags' });
  }
}