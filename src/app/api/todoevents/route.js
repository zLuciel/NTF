import Eventos from "@/models/Eventos.js";
import Users from "@/models/Users";
import { dbConnect } from "@/utils/mongoose.js";

import { NextResponse } from "next/server";
import MethodAllEvents from "./handler";
dbConnect();



export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const priceRange = searchParams.get("price");
    const page = searchParams.get("page");
    const data = await MethodAllEvents.getEventsFilter(category, priceRange, page)
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ msg: "erro al obtener todos los eventos",error });
  }
}

export async function POST(req) {
  try {
    const data = await Eventos.find().populate("user", "name _id");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ msg: "erro al obtener todos los eventos" });
  }
}