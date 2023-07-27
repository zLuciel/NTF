"use client";
import React from "react";
import withAuth from "@/utils/withAuth";
import "../dashboard/[id]/dashboard.css";
import GridDashboard from "@/components/Dashboard/GridDashboard/GridDashboard";
import { useSelector } from "react-redux";
import DashboardLayout from "./layaout";

const Page = () => {
  const userdb = useSelector((state) => state.users.user);
  const datafav = useSelector((state) => state.users.favorite);
  const dataevent = useSelector((state) => state.users.data);

  return (
    <>
     <DashboardLayout picture={userdb?.picture}>
        <GridDashboard edit={true} user={userdb} data={dataevent} events={datafav}/>
      </DashboardLayout>
    </>
  );
};

export default withAuth(Page);
