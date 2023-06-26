"use client";
import React, { useState } from "react";
import FormEvent from "@/components/CreacionEvents/FormEvent/FormEvent";
import useEventForm from "@/components/CreacionEvents/ValidateForm";
import handleSubmit from "@/components/CreacionEvents/HandleSubmit";
import { useDispatch, useSelector } from "react-redux";
import Previsualizacion from "@/components/CreacionEvents/Previsualizacion/Previsualizacion";
import { CreateStyledMain } from "./CreateStyled";

import withAuth from "@/utils/withAuth";

const Create = () => {
  const { initialValues, form } = useEventForm();
  const [imageUrl, setImageUrl] = useState("");
   const dispatch = useDispatch();
  const [file, setFile] = useState("");

  const userdb = useSelector((state) => state.users.user);
console.log(userdb);

  const handleSubmitForm = async (values) => {
    values._id = await userdb._id;
    await handleSubmit(file, values, setImageUrl);
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
