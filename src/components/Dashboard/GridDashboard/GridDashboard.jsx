"use client";
import React, { useEffect, useState } from "react";
import { GridCard, GridDashboardContainer } from "./css/GridDashboard";
import Column1 from "../Column1/Column1";
import Column2 from "../Column2/Column2";
import RenderMap from "../Column2/RenderMap";
import { getUserEvent } from "@/redux/users/actions";
import { useDispatch } from "react-redux";


const GridDashboard = ({ edit, user, events, data,desactive }) => {
  //0 view create data
  //1 view favorite
  //2 view desactive
  const dispatch = useDispatch()
  const [view, setView] = useState(0);
  const [manu,setManu] = useState(true)
  
  useEffect(()=>{
    dispatch(getUserEvent(user?._id))
    setManu(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch,manu])

  return (
    <GridDashboardContainer>
      <Column1 user={user} />
      <Column2 setView={setView}>
        {view === 0 && <GridCard>{<RenderMap setManu={setManu} data={data} edit={edit} />}</GridCard>}
        {view === 1 && <GridCard>{<RenderMap setManu={setManu} data={events} />}</GridCard>}
        {view === 2 && <GridCard>{<RenderMap setManu={setManu} data={desactive}  desact={true} />}</GridCard>}
      </Column2>
    </GridDashboardContainer>
  );
};

export default GridDashboard;
