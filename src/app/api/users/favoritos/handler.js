import Evento from "@/models/Eventos.js";
import User from "@/models/Users.js";
import Favorito from "@/models/Favoritos.js";

//! Verificar si esta guardo */
export async function isEventoAlreadyFavorito(usuarioId, eventoId) {
  try {
    const usuario = await User.findById(usuarioId).populate("favoritos");
    if (!usuario) {
      throw new Error("El usuario no existe.");
    }
    // Buscar el evento en los favoritos del usuario
    const favorito = usuario.favoritos.find(
      (fav) => fav.evento.toString() === eventoId
    );

    if (favorito) {
      return "Este evento ya está en tus favoritos.";
    } else {
      return null; // El evento no está en favoritos
    }
  } catch (error) {
    throw new Error("No se pudo verificar si el evento ya está en favoritos.");
  }
}

//! agregar a favoritos */
async function addFavorite(usuarioId, eventoId) {
  try {
    // Verifica si el usuario y el evento existen en la base de datos
    const usuario = await User.findById(usuarioId);
    const evento = await Evento.findById(eventoId);

    if (!usuario || !evento) {
      throw new Error("El usuario o el evento no existen.");
    }

    // Crea un nuevo documento en el modelo de "Favoritos" con las referencias del usuario y el evento
    const favorito = new Favorito({
      usuario: usuario._id,
      evento: evento._id,
    });

    // Guarda el documento de favorito en la base de datos
    await favorito.save();

    // Agrega el favorito a la matriz de favoritos del usuario
    usuario.favoritos.push(favorito._id);
    await usuario.save();

    //return favorito;
    return {msg: "Fue agregado exitosamente", status: 200,id:eventoId};
  } catch (error) {
    throw new Error("No se pudo marcar el evento como favorito.");
  }
}

async function getFavoriteEvents(usuarioId) {
  try {
    // Verifica si el usuario existe en la base de datos
    const usuario = await User.findById(usuarioId);

    if (!usuario) {
      throw new Error("El usuario no existe.");
    }

    // Obtiene la matriz de referencias a los documentos de "Favoritos" del usuario
    const favoritosIds = usuario.favoritos;

    // Obtiene los documentos completos de "Favoritos" y sus eventos asociados
    const favoritos = await Favorito.find({
      _id: { $in: favoritosIds },
    }).populate({
      path: "evento",
      select: `-tags -updatedAt -createdAt`,
      populate: {
        path: "user",
        model: "User",
        select:
          "-redes -favoritos -seguidores -siguiendo -active -createdAt -updatedAt -uid", // Nombre del modelo de usuario
      },
    });

    // Obtén solo la información relevante de los eventos favoritos para mostrar al usuario
    const eventosFavoritos = favoritos.map((favorito) => favorito.evento);

    return eventosFavoritos;
  } catch (error) {
    throw new Error("No se pudo obtener los eventos favoritos del usuario.");
  }
}



const MethodFavorite = {
  isEventoAlreadyFavorito,
  addFavorite,
  getFavoriteEvents,
};
export default MethodFavorite 
