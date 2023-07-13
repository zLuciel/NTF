"use client";
import React, { useState } from "react";
import FormEvent from "@/components/CreacionEvents/FormEvent/FormEvent";
import useEventForm from "@/components/CreacionEvents/ValidateForm";
import handleSubmit from "@/components/CreacionEvents/HandleSubmit";
import { useSelector } from "react-redux";
import Previsualizacion from "@/components/CreacionEvents/Previsualizacion/Previsualizacion";
import { CreateStyledMain } from "./CreateStyled";
import withAuth from "@/utils/withAuth";

const Create = () => {
  const [file, setFile] = useState("");
  const userdb = useSelector((state) => state.users.user);
  const editinfo = useSelector((state) => state.users.editData);
  const imgDefault = "https://res.cloudinary.com/ddo18h0ua/image/upload/v1686802088/Events/96a3b8cffk98652c889f7352d16b30c7_kbdjci.jpg";
  const [imageUrl, setImageUrl] = useState(
    editinfo ? editinfo?.image : imgDefault
  );

  const { initialValues, form } = useEventForm(
    editinfo?.title,
    editinfo?.price,
    editinfo?.description,
    editinfo?.endDate,
    editinfo?.startDate
  );
 
 
  const handleSubmitForm = async (values) => {
    // verifica si viene vacio o tiene algo para modificar
    if(editinfo) values.eventoId = editinfo?._id 
    values._id = await userdb._id;
    await handleSubmit(file, values, setImageUrl,editinfo);
  };

  return (
    <CreateStyledMain>
      <section className="grid-container-create">
        <div className="col1">
          <Previsualizacion
            imageUrl={imageUrl}
            setFile={setFile}
            setImageUrl={setImageUrl}
            initialValues={initialValues}
            form={form}
            handleSubmit={handleSubmitForm}
          />
        </div>
        <div className="col2">
          <FormEvent form={form} handleSubmit={handleSubmitForm} />
        </div>
      </section>
    </CreateStyledMain>
  );
};

export default withAuth(Create);
