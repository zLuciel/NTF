import Eventos from "@/models/Eventos";
import Users from "@/models/Users";
//import { createUserIfNotExists } from "@/utils/createUserIfNotExists";
import { dbConnect } from "@/utils/mongoose.js";
import { NextResponse } from "next/server";
dbConnect();


export async function GET(req,{params}) {
    const id = params.id;
    
  try {
    const eventsUser = await Eventos.findById(id).populate("user");
    return NextResponse.json(eventsUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener el evento' });
  }
}