import Eventos from "@/models/Eventos";
import { createUserIfNotExists } from "@/utils/createUserIfNotExists";
import { dbConnect } from "@/utils/mongoose.js";
import { NextResponse } from "next/server";
dbConnect();



export async function UPDATE() {

}

export async function DELATE() {

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

