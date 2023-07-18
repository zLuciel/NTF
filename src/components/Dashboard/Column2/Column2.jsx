import React from "react";
import { ContainerColum2, FlexButtonUser, GridCard } from "./css/Column2";
import Link from "next/link";
import Card from "@/components/NewCard/Card/Card";


const Column2 = ({ events,edit }) => {

  return (
    <ContainerColum2>
      <FlexButtonUser>
        <div style={{color:"white"}}>
          <span>Creados</span>
          <span>Favoritos</span>
        </div>
        <button>
          <Link  href="/dashboard/create" as={"/dashboard/create"}>
            Crear
          </Link>
        </button>
      </FlexButtonUser>
      <GridCard>
        {events?.map((data, i) => (
          <Card key={i} edit={edit} data={data} id={data._id} user={data?.user} />
        ))}
      </GridCard>
    </ContainerColum2>
  );
};

export default Column2;

  /*<div key={i} className="contxd">
            <Image
              fill={true}
              sizes="(min-width: 640px) 640px, 100vw"
              src={`https://res.cloudinary.com/ddo18h0ua/image/upload/${data.image}.jpg`}
              alt="artess"
            />
            <Card
            edit={edit}
            data={data}
            />
        </div>*/