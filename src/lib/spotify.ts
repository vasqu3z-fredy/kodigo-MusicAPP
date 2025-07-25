// src/lib/spotify.ts
import { SpotifyTrack } from "@/types/spotify";

export async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

export async function getTopLatinTracks(): Promise<SpotifyTrack[]> {
  const token = await getAccessToken();

 

  // ID de Shakira
const res = await fetch(
  "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp/top-tracks?market=US",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);


  const data = await res.json();
  return data.tracks as SpotifyTrack[];
}
