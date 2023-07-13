const preset_key = "fmuu34uf";
const cloud_name = "ddo18h0ua";

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