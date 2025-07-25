//*** src/app/page.tsx
'use client';
import { useEffect, useState } from "react";
import type { SpotifyTrack } from "@/types/spotify";
import Image from "next/image";

//listado de artistas para el dropdown con su ID 
const ARTISTAS = [
  { id: '0EmeFodog0BfCgMzAIvKQp', nombre: 'Shakira' },
  { id: '4q3ewBCX7sLwd24euuV69X', nombre: 'Bad Bunny' },
  { id: '6eUKZXaKkcviH0Ku9w2n3V', nombre: 'Ed Sheeran' },
  { id: '1Xyo4u8uXC1ZmMpatF05PJ', nombre: 'The Weeknd' },
  { id: '3Nrfpe0tUJi4K4DXYWgMUX', nombre: 'BTS' },
];

function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default function HomePage() {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<string>(ARTISTAS[0].id);

  useEffect(() => {
    if (!selectedArtist) return;

    fetch(`/api/top-tracks?artistId=${selectedArtist}`)
      .then((res) => res.json())
      .then(setTracks);
  }, [selectedArtist]);


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Top 10 por Artista</h1>
      <hr />
      <h2 className="text-green-500">Regístrate para ver más artistas</h2>
      <div className="mb-6">
        <label className="block text-white font-semibold mb-2">Selecciona un artista:</label>
        <select
          value={selectedArtist}
          onChange={(e) => setSelectedArtist(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full max-w-sm border border-gray-600"
        >
          {ARTISTAS.map((artista) => (
            <option key={artista.id} value={artista.id}>
              {artista.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

        {/* Devolvemos la información de cada tarjeta respuesta */}
        {tracks.map((track) => (
          <div key={track.id} className="bg-gray-800 p-4 rounded shadow">
            <Image
              src={track.album.images[0]?.url}
              alt={track.name}
              width={300}
              height={300}
              className="rounded mb-2 w-full h-auto object-cover"
              priority={tracks.indexOf(track) === 0}
            />            
            <h3 className="font-bold text-white">{track.name}</h3>
            <p className="text-sm text-gray-400">Artista: {track.artists[0].name}</p>
            <p className="text-sm text-gray-400">Álbum: {track.album.name}</p>
            <p className="text-sm text-gray-400">Lanzamiento: {track.album.release_date}</p>
            <p className="text-sm text-gray-400 mb-2">Duración: {formatDuration(track.duration_ms)}</p>
           
           {/* Para agregar enlace externo a spotify */}
           <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-green-400 hover:text-white transition-colors underline"
            >
              Ver en Spotify
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}
