import { dbConnect } from "@/utils/mongoose.js";
import Eventos from "@/models/Eventos.js"
dbConnect();
import { NextResponse } from "next/server";

const getEventsByUserId = async (userId) => {
    try {
      // Busca todos los eventos que tengan el mismo UID que el del usuario
      const events = await Eventos.find({ user: userId });
  
      // Devuelve los eventos encontrados
      return events;
    } catch (error) {
      // Manejo de errores
      console.error(error);
      throw new Error("Error al obtener los eventos del usuario");
    }
};

export async function GET (req,{params}){
    const id = params.id;
    const events = await getEventsByUserId(id) ;
    return NextResponse.json(events)
}