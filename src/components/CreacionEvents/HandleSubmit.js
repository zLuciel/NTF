import { notifications } from "@mantine/notifications";
import deleteImageCloudinary from "@/utils/cloudinary/deleteImage";
import CloudinaryGetImg from "@/utils/cloudinary/updoladImg";


async function FetchCreateEventDb(data) {
  const res = await fetch(`http://localhost:3000/api/users/events`, {
    method: "POST",
    body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json",
    },
  });
};

async function updateEventDb(data) {
  const res = await fetch(`http://localhost:3000/api/users/events`, {
    method: "PUT",
    body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json",
    },
  });
  const datares = await res.json()
};


async function handleSubmit(file, values, setImageUrl,editinfo) {
  try {
    // Realizar la carga de la imagen si se seleccionó un archivo
    if (file) {

      if(editinfo === null){
        const data = await CloudinaryGetImg(file)
        setImageUrl(data.secure_url);
        values.image = data.public_id;
        await FetchCreateEventDb(values)
      }else{
        await deleteImageCloudinary(editinfo.image)
        const data = await CloudinaryGetImg(file)
        values.image = data.public_id;
        await updateEventDb(values)
      }  
    }else{
      await updateEventDb(values)
    }

    // Realizar mensaje  el envío del formulario
    notifications.show({
      message: "Enviando",
      color: "green",
      loading: true,
      autoClose: false,
      withCloseButton: false,
      id: "load-data",
      autoClose: 2000,
    });

  } catch (error) {
    notifications.show({
      message: "Error al enviar el formulario",
      color: "red",
    });
  }
};

export default handleSubmit;
