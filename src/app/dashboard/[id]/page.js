import React from "react";
import "./dashboard.css";
import GridDashboard from "@/components/Dashboard/GridDashboard/GridDashboard";
import DashboardLayout from "../layaout";

export const dynamic = 'force-dynamic';


const fetchUser = async (id) => {
  try {
    const data = await fetch(`http://localhost:3000/api/users/${id}`, { cache: 'no-store' })
   return await data.json()
  } catch (error) {
    console.log(error,"dashboard id");
    throw error;
  }
   
}

const page = async ({params}) => {
  const {id} = params
  const data = await fetchUser(id)
  return (
    <>
     <DashboardLayout picture={data?.user.picture}>
        <GridDashboard  user={data?.user} data={data?.eventsUser} />
     </DashboardLayout>
    </>
  );
};

export default page;
