import React from "react";
import { Button } from "@mantine/core";
import { ContainerPreVisual } from "./css/Previsualizacion";
import Card from "@/components/NewCard/Card/Card";

const Previsualizacion = ({
  initialValues,
  form,
  handleSubmit,
  imageUrl,
  setImageUrl,
  setFile,
  userdb,
}) => {

  // mostrando imagen para visualizar en tiempo real
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const src = URL.createObjectURL(file) 
      setImageUrl(src)
    }
  }

  const data = {};
  data.title = initialValues.title,
  data._id = false
  data.user = false,
  data.image = imageUrl,
  data.price = initialValues.price,
  data.endDate = initialValues.endDate || "2023-06-15T09:05:47.853Z"

  return (
    <ContainerPreVisual>
      <div>
        <h1>Previsualización</h1>
        <Card data={data} user={userdb}/>
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
