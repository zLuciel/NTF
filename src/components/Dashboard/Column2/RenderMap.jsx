import Card from "@/components/NewCard/Card/Card";
import React from "react";

const RenderMap = ({ data, edit = false, desact = false,setManu }) => {
  
  return data?.map((data, i) => (
    <Card
      setManu={setManu}
      key={i}
      edit={edit}
      data={data}
      desact={desact}
      id={data._id}
      user={data?.user}
    />
  ));
};

export default RenderMap;
