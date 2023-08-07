import User from "@/models/Users";

const MethodUser = {
  update: async (body) => {
    try {
      // Verificar si el evento pertenece al usuario
      const user = await User.findOne({ _id: body._id });
      if (!user) {
        throw new Error("El usuario no existe");
      }

      const updateUser = {};
      updateUser.picture = body.picture;
      updateUser.portada = body.portada;
      updateUser.description = body.description;
      updateUser.redes = body.redes;

      // Actualizar el campo específico del evento
      await User.findByIdAndUpdate(body._id, updateUser);

      return true; // Opcional: Devolver algún indicador de éxito
    } catch (error) {
      console.error("Error al actualizar el evento:");
      throw error;
    }
  },
};

export default MethodUser