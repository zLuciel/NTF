import React from "react";
import "./dashboard.css";
import PortadaView from "@/components/Dashboard/PortadaView/PortadaView";
import ImageUser from "@/components/Dashboard/ImageUser/ImageUser";
import GridDashboard from "@/components/Dashboard/GridDashboard/GridDashboard";
import withAuth from "@/utils/withAuth";

const img ="https://res.cloudinary.com/ddo18h0ua/image/upload/v1686715497/Events/one-pixel-brush-image-1-final_xbdmif.jpg";

const fetchUser = async (id) => {
  try {
    const data = await fetch(`http://localhost:3000/api/users/${id}`)
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
      {id}
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
