import Eventos from "@/models/Eventos";
import Users from "@/models/Users";
//import { createUserIfNotExists } from "@/utils/createUserIfNotExists";
import { dbConnect } from "@/utils/mongoose.js";
import { NextResponse } from "next/server";
dbConnect();


//SEGURIDAD PARA EL SOLO EL USUARIO
export async function GET(req,{params}) {
  const id = params.id;
//UID DEL USUARIO POR REQ
//SI EL UID NO EXISTE DALE UN ERROR
try {
  const eventsUser = await Eventos.find({ user: id }).populate("user","name _id");
  const user = await Users.findById(id) // Puebla los campos 'events' del usuario con los documentos de eventos correspondientes
  return NextResponse.json({user,eventsUser});
} catch (error) {
  console.error(error);
  return NextResponse.json({ error: 'Error al obtener los usuarios y sus eventos' });
}
}