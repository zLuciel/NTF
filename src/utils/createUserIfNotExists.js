// Función para crear un usuario si no existe
import Eventos from "@/models/Eventos";
import Users from "@/models/Users.js"
const createUserIfNotExists = async (userData) => {
  const { uid, email, name, active } = userData;

  // Buscar un usuario existente por el campo 'uid'
  const existingUser = await Users.findOne({ uid });
  
 // verificacion de usuario
  if (existingUser)  {
    const eventsUser = await Eventos.find({ user: existingUser._id }).populate("user","name _id");
    const user = await Users.findById(existingUser._id)
    return {user,eventsUser}
  };
  

  // Si el usuario no existe, crear uno nuevo
  const newUser = new Users({ uid, email, name ,active});
  await newUser.save();

  return "deber retornar el creado " ;
};

export { createUserIfNotExists };