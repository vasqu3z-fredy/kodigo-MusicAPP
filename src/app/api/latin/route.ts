import { NextResponse } from "next/server";
import { getTopLatinTracks } from "@/lib/spotify";

//Recibe la respuesta GET y devuelve los tracks latinos más populares desde Spotify
export async function GET() {
  const tracks = await getTopLatinTracks();
  return NextResponse.json(tracks);
}
