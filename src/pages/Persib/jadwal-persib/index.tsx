"use client";

import { useEffect, useState } from "react";
// FIX 1: Import type Match yang diperlukan
import type { Match } from "../api/types/football";

const JadwalPage = () => {
  const [jadwal, setJadwal] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/jadwal-mu");
        const json = await res.json();

        console.log("HASIL API:", json); // SportMonks V3 mengembalikan data di properti 'data'

        const fixtures = json?.data ?? []; // FIX UTAMA: json?.data sudah cukup, tidak perlu json?.data?.fixtures

        setJadwal(fixtures);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Memuat jadwal...</p>; // Tampilkan pesan jika tidak ada jadwal (misal, error 404 dari API Route)

  if (jadwal.length === 0)
    return (
      <p>Tidak ada jadwal yang ditemukan atau terjadi kesalahan server.</p>
    );

  return (
    <div className="p-6">
           {" "}
      <h1 className="text-3xl font-bold mb-6">Jadwal Manchester United</h1>     {" "}
      <div className="space-y-4">
               {" "}
        {jadwal.map((match) => {
          const home = match.participants?.find(
            (t) => t.meta.location === "home"
          );
          const away = match.participants?.find(
            (t) => t.meta.location === "away"
          );

          // FIX 3: Validasi jika tim tidak ditemukan
          if (!home || !away || !match.starting_at) {
            return null;
          }

          return (
            <div
              key={match.id}
              className="p-4 border rounded-lg shadow bg-white"
            >
                           {" "}
              <p className="font-bold">
                                {home.name} vs {away.name}             {" "}
              </p>
                           {" "}
              <p className="text-sm">
                                Tanggal:{" "}
                {new Date(match.starting_at).toLocaleString("id-ID")}           
                 {" "}
              </p>
                           {" "}
              <p className="text-sm">Venue: {match.venue?.name ?? "-"}</p>     
                     {" "}
              <p className="text-sm text-gray-500">
                                Liga: {match.league?.name ?? "-"}             {" "}
              </p>
                         {" "}
            </div>
          );
        })}
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default JadwalPage;
