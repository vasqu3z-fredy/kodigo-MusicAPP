// src/types/spotify.ts
//Definición de tipos para la API de Spotify
export type SpotifyTrack = {
  id: string;
  name: string;
  preview_url: string | null;
  duration_ms: number;
  album: {
    name: string;
    release_date: string;
    images: { url: string }[];
  };
  artists: {
    name: string;
  }[];
  external_urls: {
    spotify: string;
  };
};
