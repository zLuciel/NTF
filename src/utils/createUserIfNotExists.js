// Función para crear un usuario si no existe
import Eventos from "@/models/Eventos";
import Users from "@/models/Users.js";
import Tags from "@/models/Tags.js";
import Favoritos from "@/models/Favoritos.js";

const createUserIfNotExists = async (userData) => {
  const { uid, email, name, picture } = userData;
  // Buscar un usuario existente por el campo 'uid'
  const existingUser = await Users.findOne({ uid });

  // verificacion de usuario
  if (existingUser) {
    const eventsUser = await Eventos.find({ user: existingUser._id })
      .populate("user", "name _id picture")
      .populate("tags", "name _id");
    const user = await Users.findById(existingUser._id).populate(
      "favoritos",
      "evento"
    );
 
    return { user, eventsUser };
  }

  // Si el usuario no existe, crear uno nuevo
  const newUser = new Users({ uid, email, name, picture });
  await newUser.save();

  return "deber retornar el creado ";
};

export { createUserIfNotExists };
