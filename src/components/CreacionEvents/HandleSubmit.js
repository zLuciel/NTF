import { notifications } from "@mantine/notifications";
import axios from "axios";

const preset_key = "fmuu34uf";
const cloud_name = "ddo18h0ua";


const FetchCreateEventDb = async (data)=>{
 // const response = await axios.post('http://localhost:3000/api/users/events', data);
  const response = await fetch(
    `http://localhost:3000/api/users/events`,
    {
      method: "POST",
      body: JSON.stringify(data), // Convierte el objeto a una cadena JSON
     headers: {
      "Content-Type": "application/json" // Establece el encabezado Content-Type como JSON
    }
    }
  );
  
}

const handleSubmit = async (file, values, setImageUrl) => {
  try {
    // Realizar la carga de la imagen si se seleccionó un archivo
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", preset_key);
      formData.append("folder", "Events");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error al cargar la imagen");
      }

      const data = await response.json();
      setImageUrl(data.secure_url);
      console.log(data);
      // agregamos los datos de la imagen y id para futuro editarlo
      values.image = data.public_id;
      await FetchCreateEventDb(values)
    }

    // Realizar el envío del formulario
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
