import React from "react";
import "./dashboard.css";
import PortadaView from "@/components/Dashboard/PortadaView/PortadaView";
import ImageUser from "@/components/Dashboard/ImageUser/ImageUser";
import GridDashboard from "@/components/Dashboard/GridDashboard/GridDashboard";

export const dynamic = 'force-dynamic';
const img ="https://res.cloudinary.com/ddo18h0ua/image/upload/v1689562600/Events/portadaDashb_raj5vu.png";

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
    <div>
      <PortadaView image={img} />
      <section className="section-dashboard">
        <div className="container-img">
        <ImageUser />
        </div>
        <GridDashboard  user={data?.user} events={data?.eventsUser} />
      </section>
    </div>
  );
};

export default page;
