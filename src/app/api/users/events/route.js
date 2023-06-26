import { dbConnect } from "@/utils/mongoose.js";
import Eventos from "@/models/Eventos.js";
import { NextResponse } from "next/server";
dbConnect();

const createEventForUser = async (eventData) => {
  try {
    // Crea una instancia del modelo de eventos
    const newEvent = new Eventos({
      title: eventData.title,
      image: eventData.image,
      description: eventData.descriptionCard,
      price: eventData.price,
      user: eventData._id,
      startDate:eventData.startDate,
      endDate:eventData.endDate,
    });

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

export async function POST(request) {
  try {
    const body = await request.json();
    const saveEvents = await createEventForUser(body);
    return NextResponse.json(saveEvents);
  } catch (error) {
    return NextResponse.json({ msg: "no se pudo crear" });
  }
}

/*export async function actualizarDatoEspecifico(usuarioId, eventoId, campo, nuevoValor) {
  try {
    // Verificar si el evento pertenece al usuario
    const evento = await Evento.findOne({ _id: eventoId, user: usuarioId });
    if (!evento) {
      // Si el evento no pertenece al usuario, lanzar un error o manejarlo de acuerdo a tus necesidades
      throw new Error("El evento no existe o no pertenece al usuario");
    }

    // Actualizar el campo específico del evento
    await Evento.findByIdAndUpdate(eventoId, { $set: { [campo]: nuevoValor } });
    // Actualización exitosa

    // Puedes realizar cualquier acción adicional después de la actualización aquí

    return true; // Opcional: Devolver algún indicador de éxito
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso de actualización
    console.error("Error al actualizar el evento:", error);
    throw error;
  }
}*/
