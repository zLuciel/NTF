import React from "react";
//import img from "@/assets/1.png";
import { Button } from "@mantine/core";
import { ContainerPreVisual } from "./css/Previsualizacion";
import Image from "next/image";
import Card from "@/components/Card/Card";

const Previsualizacion = ({editBoolean,initialValues, form, handleSubmit, imageUrl, setImageUrl, setFile}) => {


  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const data = {
    title: initialValues.title,
    _id: false,
    user:false,
    image:false,
    price:initialValues.price
  }

  return (
    <ContainerPreVisual>
      <div>
        <h1>Previsualización</h1>
        <div className="previmg">
          {editBoolean ? <Image
            fill={true}
            src={`https://res.cloudinary.com/ddo18h0ua/image/upload/v1686802088/${imageUrl}.jpg`
            }
            alt="artess"
          /> :<Image
          fill={true}
          src={
               imageUrl
              ? imageUrl 
              : `https://res.cloudinary.com/ddo18h0ua/image/upload/v1686802088/${editBoolean ? imageUrl : "Events/96a3b8cffk98652c889f7352d16b30c7_kbdjci"}.jpg`
          }
          alt="artess"
        /> }
          <Card data={data}/>
        </div>
      </div>
      <input
        id="file-inputx"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <Button type="submit" mt="lg" onClick={form.onSubmit(handleSubmit)}>
        Crear
      </Button>
    </ContainerPreVisual>
  );
};

export default Previsualizacion;
