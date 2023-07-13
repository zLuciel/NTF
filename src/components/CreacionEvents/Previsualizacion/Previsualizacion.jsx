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
}) => {
  // mostrando imagen para visualizar en tiempo real
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
  }

  const data = {
    title: initialValues.title,
    _id: false,
    user: false,
    image: imageUrl,
    price: initialValues.price,
  };

  return (
    <ContainerPreVisual>
      <div>
        <h1>Previsualización</h1>
        <Card data={data} />
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
