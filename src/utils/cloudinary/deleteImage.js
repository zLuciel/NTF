import crypto from "crypto";

const preset_key = "fmuu34uf";
const cloud_name = "ddo18h0ua";

const generateSHA1 = (data) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

const generateSignature = (publicId, apiSecret) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

async function deleteImageCloudinary(publicId) {
  const apiSecret = "d3L2y6LtaM3tpK7eLcsiepfHD3c";
  const timestamp = new Date().getTime();
  const signature = generateSHA1(generateSignature(publicId, apiSecret));
  try {
    const formData = new FormData();
    formData.append("public_id", publicId);
    formData.append("signature", signature);
    formData.append("api_key", "821231837154938");
    formData.append("timestamp", timestamp);
    // formData.append("api_secret", "d3L2y6LtaM3tpK7eLcsiepfHD3c");
    //formData.append("folder", "Events");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/destroy`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      console.log("Imagen eliminada con éxito");
    } else {
      console.error("Error al eliminar la imagen");
    }
  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
  }
}

export default deleteImageCloudinary;
