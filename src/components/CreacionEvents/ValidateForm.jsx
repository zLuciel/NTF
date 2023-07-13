import { useForm } from "@mantine/form";

function convertDate(time) {
  // obtener la ultima letra para identificarlo 
  const lastIndex = time.length - 1;
  const lastCharacter = time.charAt(lastIndex);

  if (lastCharacter === "Z") {
    const date = new Date(time);
    const options = {
      timeZone: "America/Lima",
    };
    date.toLocaleString("en-US", options);
    return date
  }

  return time;
}

const useEventForm = (
  title = "",
  price = 0,
  description = "",
  endDate = "",
  startDate = ""
) => {
  const endTime = convertDate(endDate);
  const startTime = convertDate(startDate);
  const form = useForm({
    initialValues: {
      title,
      descriptionCard: description,
      price,
      tags: [],
      startDate: startTime,
      endDate: endTime,
    },
    validate: {
      /*title: (value) =>
        value.length < 40 ? "Ingrese un titulo menor a 40 caracteres" : null,*/
      descriptionCard: (value) =>
        value.length < 10
          ? "Ingrese una descripción mayor a 10 caracteres"
          : null,
      price: (value) =>
        value.length > 8 ? "Ingrese un precio menor a 8 digitos " : null,
    },
  });
  return {
    form,
    initialValues: form.values, // Devuelve los valores iniciales del formulario
  };
};

export default useEventForm;
