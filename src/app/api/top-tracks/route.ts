//*** src/app/api/top-tracks/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify";

export async function GET(req: NextRequest) {
  try {
    const artistId = req.nextUrl.searchParams.get("artistId");

    if (!artistId) {
      return NextResponse.json(
        { error: "artistId is required" },
        { status: 400 }
      );
    }

    const token = await getAccessToken();

    const res = await fetch(
      //consumo de la api de spotify para obtener las canciones mas populares del artista
      `${process.env.SPOTIFY_API_URL}/${artistId}/top-tracks?market=US`
,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
// Verifica si la respuesta es exitosa
    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Spotify API error: ${JSON.stringify(error)}`);
    }
// Convierte la respuesta a JSON y retorna los tracks
    const data = await res.json();
    return NextResponse.json(data.tracks);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error al obtener top tracks:", error.message);
    } else {
      console.error("Error desconocido al obtener top tracks:", error);
    }
    return NextResponse.json(
      { error: "No se pudieron obtener las canciones." },
      { status: 500 }
    );
  }
}
