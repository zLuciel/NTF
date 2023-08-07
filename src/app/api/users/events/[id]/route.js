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


async function borrarDatoEspecifico(id){
  // Buscar el evento por su id

  const evento = await Eventos.findById(id);
  // Si el evento no existe, devuelve un mensaje de error
  if (!evento) {
    return NextResponse.json({ msg: "Evento no encontrado" });
  }
  evento.delete = true;
  // Guardar los cambios en la base de datos
   await evento.save();
}

async function ActiveEvent(id){
  // Buscar el evento por su id

  const evento = await Eventos.findById(id);
  // Si el evento no existe, devuelve un mensaje de error
  if (!evento) {
    return NextResponse.json({ msg: "Evento no encontrado" });
  }
  evento.delete = false;
  // Guardar los cambios en la base de datos
   await evento.save();
}

export async function GET (req,{params}){
    const id = params.id;
    const events = await getEventsByUserId(id) ;
    return NextResponse.json(events)
}


//Borrado logico
export async function DELETE(req,{params}) {
  try {
    const  id = params.id;
    await borrarDatoEspecifico(id);
    return NextResponse.json({ msg: "se acaba de desactivar" });
  } catch (error) {
    return NextResponse.json({ msg: "no se pudo borrar", error: {id} });
  }
}

export async function PUT(req,{params}) {
  try {
    const  id = params.id;
    await ActiveEvent(id);
    return NextResponse.json({ msg: "se acaba de activar" });
  } catch (error) {
    return NextResponse.json({ msg: "no se pudo activar"});
  }
}