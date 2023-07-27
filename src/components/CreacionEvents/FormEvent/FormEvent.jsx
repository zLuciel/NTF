"use client";
import { DateTimePicker } from "@mantine/dates";
import { TextInput, Textarea, MultiSelect } from "@mantine/core";
import { ContainerForm } from "./css/FormEvent";
import { useDispatch, useSelector } from "react-redux";

const FormEvent = ({ form, handleSubmit }) => {
  const dispatch = useDispatch();

  const dataTags = useSelector((state) => state.allevents.tags);
  const options = dataTags?.map((tag) => ({ value: tag._id, label: tag.name }));



  return (
    <ContainerForm>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Titulo"
          placeholder="Ingrese un titulo"
          {...form.getInputProps("title")}
        />
        <Textarea
          className="descrip-tarjeta"
          mt="sm"
          label="Descripcion Tarjeta"
          placeholder="Ingrese una descripcion para la tarjeta"
          {...form.getInputProps("descriptionCard")}
        />
        <TextInput
          type="number"
          mt="sm"
          label="Precio"
          placeholder="Ingrese la cantidad si no ingresa sera Free"
          {...form.getInputProps("price")}
        />
        <div className="fecha-form">
          <div>
            <DateTimePicker
              label="Fecha de finalización"
              placeholder="Date input"
              mx="auto"
              withAsterisk
              {...form.getInputProps("endDate")}
            />
          </div>
        </div>
        <div>
          {dataTags && (
            <MultiSelect
              style={{ textTransform: "capitalize" }}
              data={options}
              label="Selecciona los Tags"
              {...form.getInputProps("tagId")}
              searchable={true}
              clearable={true}
            />
          )}
        </div>
      </form>
    </ContainerForm>
  );
};

export default FormEvent;
