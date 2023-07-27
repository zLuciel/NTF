import { dbConnect } from "@/utils/mongoose.js";
import { NextResponse } from "next/server";
import MethodFavorite from "./handler";
dbConnect();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const favorite = await MethodFavorite.getFavoriteEvents(id);
    return NextResponse.json(favorite);
  } catch (error) {
    return NextResponse.json({ msg: "error al obtener favoritos", error });
  }
}

export async function POST(request) {
  try {
    const { usuarioId, eventoId } = await request.json();
    const isFavorito = await MethodFavorite.isEventoAlreadyFavorito(
      usuarioId,
      eventoId
    );
    if (isFavorito) {
      return NextResponse.json({ msg: isFavorito });
    }
    const favorite = await MethodFavorite.addFavorite(usuarioId, eventoId);
    return NextResponse.json(favorite);
  } catch (error) {
    return NextResponse.json({ msg: "error favorito", error });
  }
}
