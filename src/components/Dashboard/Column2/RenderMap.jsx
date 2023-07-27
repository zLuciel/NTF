import Card from "@/components/NewCard/Card/Card";
import React from "react";

const RenderMap = ({ data,edit =false }) => {
  return data?.map((data, i) => (
    <Card key={i} edit={edit} data={data} id={data._id} user={data?.user} />
  ));
};

export default RenderMap;
