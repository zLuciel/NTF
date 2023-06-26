
import React from "react";
//import img from "@/assets/1.png";
import {  Button } from "@mantine/core";
import { ContainerPreVisual } from "./css/Previsualizacion";
import Image from "next/image";
import { CardArte, Price } from "@/components/Home/Arte/css/Arte";
import CardInfo from "@/components/CardInfo/CardInfo";
const Previsualizacion = (props) => {
  const { initialValues,form,handleSubmit,imageUrl,setImageUrl,setFile } = props
  
  // ver imagen en vivo 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
   if(file){
    setFile(file);
    
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
   }
  };

  return (
    <ContainerPreVisual>
     <div>
     <h1>Previsualización</h1>
     <div className="previmg">
     <Image  fill={true} src={imageUrl ? imageUrl : "https://res.cloudinary.com/ddo18h0ua/image/upload/v1686802088/Events/96a3b8cffk98652c889f7352d16b30c7_kbdjci.jpg"}  alt='artess'/>
          <CardArte >
              <div className='flex-price'>
              <Price>
                $10.00
              </Price>
              <span>
                golas
              </span>
              </div>
             {/* <CardInfo  title={initialValues.title} userAvatar={"https://res.cloudinary.com/ddo18h0ua/image/upload/v1686802088/Events/96a3b8cffk98652c889f7352d16b30c7_kbdjci.jpg"} />*/}
          </CardArte>
     </div>
     </div>
     <input id="file-inputx" type="file" accept="image/*" onChange={handleFileChange} />
    <Button type="submit" mt="lg" onClick={form.onSubmit(handleSubmit)}>
            Crear
    </Button>
    </ContainerPreVisual>
  );
};

export default Previsualizacion;
