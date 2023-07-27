import React from "react";
import PortadaView from "@/components/Dashboard/PortadaView/PortadaView";
import ImageUser from "@/components/Dashboard/ImageUser/ImageUser";

const img ="https://res.cloudinary.com/ddo18h0ua/image/upload/v1689562600/Events/portadaDashb_raj5vu.png";
const DashboardLayout = ({ children, picture }) => {
  return (
    <>
      <PortadaView image={img} />
      <section className="section-dashboard">
        <div className="container-img">
          <ImageUser picture={picture} />
        </div>
        {children}
      </section>
    </>
  );
};

export default DashboardLayout;
