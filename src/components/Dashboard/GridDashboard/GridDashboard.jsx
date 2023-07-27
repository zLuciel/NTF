"use client";
import React, { useState } from "react";
import { GridCard, GridDashboardContainer } from "./css/GridDashboard";
import Column1 from "../Column1/Column1";
import Column2 from "../Column2/Column2";
import RenderMap from "../Column2/RenderMap";

const GridDashboard = ({ edit, user, events, data }) => {
  const [fav, setFav] = useState(false);
  return (
    <GridDashboardContainer>
      <Column1 user={user} />
      <Column2 setFav={setFav}>
        {!fav && <GridCard>{<RenderMap data={data} edit={edit} />}</GridCard>}
        {fav && <GridCard>{<RenderMap data={events} />}</GridCard>}
      </Column2>
    </GridDashboardContainer>
  );
};

export default GridDashboard;
