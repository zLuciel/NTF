const preset_key = process.env.PRESET_KEY_CLOUDINARY;
const cloud_name = process.env.CLOUD_NAME_CLOUDINARY;

async function CloudinaryGetImg(file){
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
    return data
  } 
  
  export default CloudinaryGetImg