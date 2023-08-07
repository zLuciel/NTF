import Eventos from "@/models/Eventos";
import { createUserIfNotExists } from "@/utils/createUserIfNotExists";
import { dbConnect } from "@/utils/mongoose.js";
import { NextResponse } from "next/server";
import MethodUser from "./handler";
dbConnect();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const eventsUser = await Eventos.find({ user: id })
      .populate("user")
      .populate("tags", "name _id");
    return NextResponse.json(eventsUser);
  } catch (error) {
    return NextResponse.json({ msg: "error al obtener usuario" });
  }
}

export async function PUT(request) {
  try {
    // viene picture // description // portada // redes //
    const body = await request.json(); 
    const userUpdate = MethodUser.update(body);
    return NextResponse.json(userUpdate);
  } catch (error) {
    return NextResponse.json({ msg: "error al crear usuario" });
  }
}

export async function POST(request) {
  try {
    const body = await request.json(); // Obtener el cuerpo de la solicitud HTTP
    const user = await createUserIfNotExists(body);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ msg: "error al crear usuario" });
  }
}
