import { dbConnect } from "@/utils/mongoose.js";
import Eventos from "@/models/Eventos.js";
import { NextResponse } from "next/server";
import Users from "@/models/Users";
dbConnect();

function newEventForm(data) {
  const newEvent = new Eventos();
  newEvent.title = data.title;
  newEvent.image = data.image;
  newEvent.description = data.descriptionCard;
  newEvent.price = Number(data.price);
  newEvent.user = data._id;
  newEvent.startDate = data.startDate;
  newEvent.endDate = data.endDate;
  newEvent.tags = data.tagId;
  return newEvent;
}

const createEventForUser = async (data) => {
  try {
    // Crea una instancia del modelo de eventos
    const newEvent = newEventForm(data);
    // Guarda el nuevo evento en la base de datos
    const createdEvent = await newEvent.save();
    // Devuelve el evento creado
    return createdEvent;
  } catch (error) {
    console.error(error);
    throw new Error("Error al crear el evento");
  }
};

async function actualizarDatoEspecifico(body) {
  try {
    // Verificar si el evento pertenece al usuario
    const evento = await Eventos.findOne({
      _id: body.eventoId,
      user: body._id,
    });
    if (!evento) {
      // Si el evento no pertenece al usuario, lanzar un error o manejarlo de acuerdo a tus necesidades
      throw new Error("El evento no existe o no pertenece al usuario");
    }

    const newEvent = {};
    newEvent.title = body.title;
    newEvent.image = body.image;
    newEvent.description = body.descriptionCard;
    newEvent.price = body.price;
    newEvent.user = body._id;
    newEvent.startDate = body.startDate;
    newEvent.endDate = body.endDate;
    
    // Actualizar el campo específico del evento
    await Eventos.findByIdAndUpdate(body.eventoId, newEvent);
    // Actualización exitosa

    return true; // Opcional: Devolver algún indicador de éxito
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso de actualización
    console.error("Error al actualizar el evento:", error);
    throw error;
  }
}






// crear eventos
export async function POST(request) {
  try {
    const body = await request.json();
    const saveEvents = await createEventForUser(body);
    return NextResponse.json(saveEvents);
  } catch (error) {
    return NextResponse.json({ msg: "no se pudo crear" });
  }
}

//actualizar datos de un evento
export async function PUT(request) {
  try {
    const body = await request.json();
    const saveEvents = await actualizarDatoEspecifico(body);
    return NextResponse.json(saveEvents);
  } catch (error) {
    return NextResponse.json({ msg: "no se pudo editar", error: error });
  }
}


