import { dbConnect } from "@/utils/mongoose.js";
import Eventos from "@/models/Eventos.js";
import { NextResponse } from "next/server";
import Users from "@/models/Users";
dbConnect();

function newEventForm(data){
  const newEvent = new Eventos({
    title: data.title,
    image: data.image,
    description: data.descriptionCard,
    price: data.price,
    user: data._id,
    startDate:data.startDate,
    endDate:data.endDate,
  });
  return newEvent
} 

const createEventForUser = async (data) => {
  try {
    // Crea una instancia del modelo de eventos
    const newEvent = newEventForm(data)

    // Guarda el nuevo evento en la base de datos
    const createdEvent = await newEvent.save();

    // Devuelve el evento creado
    return createdEvent;
  } catch (error) {
    // Manejo de errores
    console.error(error);
    throw new Error("Error al crear el evento");
  }
};


 async function actualizarDatoEspecifico(body){
  try {
    // Verificar si el evento pertenece al usuario
    const evento = await Eventos.findOne({ _id:body.eventoId , user:body._id});
    if (!evento) {
      // Si el evento no pertenece al usuario, lanzar un error o manejarlo de acuerdo a tus necesidades
      throw new Error("El evento no existe o no pertenece al usuario");
    }

    const newEvent = {
      title: body.title,
      image: body.image,
      description: body.descriptionCard,
      price: body.price,
      user: body._id,
      startDate:body.startDate,
      endDate:body.endDate,
    }
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



export async function POST(request) {
  try {
    const body = await request.json();
    const saveEvents = await createEventForUser(body);
    return NextResponse.json(saveEvents);
  } catch (error) {
    return NextResponse.json({ msg: "no se pudo crear" });
  }
}



export async function PUT(request) {
  try {
    const body = await request.json();
    const saveEvents = await actualizarDatoEspecifico(body);
    return NextResponse.json(saveEvents);
  } catch (error) {
    return NextResponse.json({ msg: "no se pudo editar",error:error });
  }
}


