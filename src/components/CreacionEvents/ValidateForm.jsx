import { useForm } from "@mantine/form";

const useEventForm = () => {
  const form = useForm({
    initialValues: { title: "", descriptionCard: "", price: 0,  tags: [],startDate:"",endDate:"" },
 
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
