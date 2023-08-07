"use client";
import React from "react";
import withAuth from "@/utils/withAuth";
import "../dashboard/[id]/dashboard.css";
import GridDashboard from "@/components/Dashboard/GridDashboard/GridDashboard";
import { useSelector } from "react-redux";
import DashboardLayout from "./layaout";

export const dynamic = "force-dynamic";

const Page = () => {

  const userdb = useSelector((state) => state.users.user);
  const datafav = useSelector((state) => state.users.favorite);
  const dataevent = useSelector((state) => state.users.data);
  const desactive = useSelector((state) => state.users.desactive);


  return (
    <>
     <DashboardLayout picture={userdb?.picture}>
        <GridDashboard edit={true} user={userdb} desactive={desactive} data={dataevent} events={datafav}/>
      </DashboardLayout>
    </>
  );
};

export default withAuth(Page);
