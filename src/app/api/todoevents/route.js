import Eventos from "@/models/Eventos.js";
import Users from "@/models/Users";
import { dbConnect } from "@/utils/mongoose.js";

import { NextResponse } from "next/server";
dbConnect();



export async function GET(req) {
  try {
    const data = await Eventos.find().populate("user", "name _id");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ msg: "erro al obtener todos los eventos" });
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