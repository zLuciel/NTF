"use client"
import React from 'react'
import withAuth from "@/utils/withAuth";
import "../dashboard/[id]/dashboard.css";
import PortadaView from '@/components/Dashboard/PortadaView/PortadaView';
import ImageUser from '@/components/Dashboard/ImageUser/ImageUser';
import GridDashboard from '@/components/Dashboard/GridDashboard/GridDashboard';
import { useSelector } from 'react-redux';
export const dynamic = 'force-dynamic';
const img ="https://res.cloudinary.com/ddo18h0ua/image/upload/v1686715497/Events/one-pixel-brush-image-1-final_xbdmif.jpg";

const Page =  () => {
    const userdb = useSelector((state) => state.users.user);
    const data = useSelector((state) => state.users.data)
 
  return (
    <div>
    <PortadaView image={img} />
    <section className="section-dashboard">
      <div className="container-img">
      <ImageUser />
      </div>
      <GridDashboard edit={true}  user={userdb} events={data} />
    </section>
  </div>
  )
}

export default withAuth(Page);