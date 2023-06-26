
import { dbConnect } from "@/utils/mongoose.js";
import Users from "@/models/Users";
import Eventos from "@/models/Eventos.js";
import { NextResponse } from "next/server";
dbConnect();


export async function GET(req){
  try {
     const events = await Eventos.find().populate("user","name _id");
      return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({msg:"erro al obtener todos los eventos"})
  }
 
} 


export async function UPDATE() {

}

export async function DELATE() {

}