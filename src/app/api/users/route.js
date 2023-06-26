import Eventos from "@/models/Eventos";
import { createUserIfNotExists } from "@/utils/createUserIfNotExists";
import { dbConnect } from "@/utils/mongoose.js";
import { NextResponse } from "next/server";
dbConnect();

//SEGURIDAD PARA EL SOLO EL USUARIO
export async function GET() {
  //UID DEL USUARIO POR REQ
  //SI EL UID NO EXISTE DALE UN ERROR
  try {
    const users = await Eventos.find({ user: "F5HhDTu1wCO8zq4a0Ygh94NtJey1" })// Puebla los campos 'events' del usuario con los documentos de eventos correspondientes
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener los usuarios xd' });
  }
}

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

