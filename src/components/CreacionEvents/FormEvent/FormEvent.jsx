
import { DateTimePicker } from "@mantine/dates";
import { TextInput, Textarea, MultiSelect } from "@mantine/core";
import { ContainerForm } from "./css/FormEvent";


const FormEvent = ({form,handleSubmit}) => {
  const options = [
    { value: "conferencia", label: "Conferencia" },
    { value: "seminario", label: "Seminario" },
    { value: "taller", label: "Taller" },
    { value: "webinar", label: "Webinar" },
  ];


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
                  label="Fecha de inicio"
                  placeholder="Date input"
                  mx="auto"
                  {...form.getInputProps("startDate")}
                />
              </div>
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
               <MultiSelect
              data={options}
              label="Selecciona opciones"
              {...form.getInputProps("tags")}
              searchable={true}
            />
            </div>
      </form>
    </ContainerForm>
  );
};

export default FormEvent;
