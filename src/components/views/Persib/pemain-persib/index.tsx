import MainLayout from "@/components/layouts/MainLayout";
// Import CardPlayers yang sudah diperbaiki
import CardPlayers from "@/components/ui/Card/CardPlayers";

// --- START: DATA PEMAIN LENGKAP ---

const rawDaftarPemain = [
  // Kiper
  {
    id: 1,
    nama: "Teja Paku Alam",
    posisi: "Kiper",
    no: 1,
    category: "Kiper",
    imageUrl: "/images/pemain/teja.jpg",
  },
  {
    id: 9,
    nama: "Fitrul Dwi Rustapa",
    posisi: "Kiper",
    no: 52,
    category: "Kiper",
    imageUrl: "/images/pemain/fitrul.jpg",
  },

  // Bek
  {
    id: 3,
    nama: "Nick Kuipers",
    posisi: "Bek Tengah",
    no: 2,
    category: "Bek",
    imageUrl: "/images/pemain/nick.jpg",
  },
  {
    id: 8,
    nama: "Rezaldi Hehanussa",
    posisi: "Bek Sayap Kiri",
    no: 56,
    category: "Bek",
    imageUrl: "/images/pemain/rezaldi.jpg",
  },
  {
    id: 10,
    nama: "Achmad Jufriyanto",
    posisi: "Bek Tengah",
    no: 16,
    category: "Bek",
    imageUrl: "/images/pemain/jufriyanto.jpg",
  },
  {
    id: 11,
    nama: "I Putu Gede Juni Antara",
    posisi: "Bek Sayap Kanan",
    no: 4,
    category: "Bek",
    imageUrl: "/images/pemain/putugede.jpg",
  },

  // Gelandang
  {
    id: 2,
    nama: "Dedi Kusnandar",
    posisi: "Gelandang Bertahan",
    no: 11,
    category: "Gelandang",
    imageUrl: "/images/pemain/dedi.jpg",
  },
  {
    id: 7,
    nama: "Rachmat Irianto",
    posisi: "Gelandang Tengah",
    no: 5,
    category: "Gelandang",
    imageUrl: "/images/pemain/rianto.jpg",
  },
  {
    id: 12,
    nama: "Marc Klok",
    posisi: "Gelandang Serang",
    no: 23,
    category: "Gelandang",
    imageUrl: "/images/pemain/klok.jpg",
  },
  {
    id: 13,
    nama: "Tyronne del Pino",
    posisi: "Gelandang Serang",
    no: 99,
    category: "Gelandang",
    imageUrl: "/images/pemain/tyronne.jpg",
  },

  // Penyerang
  {
    id: 14,
    nama: "Ezra Walian",
    posisi: "Penyerang Bayangan",
    no: 30,
    category: "Penyerang",
    imageUrl: "/images/pemain/ezra.jpg",
  },
  {
    id: 5,
    nama: "David da Silva",
    posisi: "Striker",
    no: 19,
    category: "Penyerang",
    imageUrl: "/images/pemain/dds.jpg",
  },
  {
    id: 4,
    nama: "Ciro Alves",
    posisi: "Winger",
    no: 77,
    category: "Penyerang",
    imageUrl: "/images/pemain/ciro.jpg",
  },
  {
    id: 15,
    nama: "Febri Hariyadi",
    posisi: "Winger",
    no: 7,
    category: "Penyerang",
    imageUrl: "/images/pemain/febri.jpg",
  },
];

// --- END: DATA PEMAIN LENGKAP ---

const ProfilePemainView = () => {
  // Daftar kategori yang ingin ditampilkan berurutan
  const categories = ["Kiper", "Bek", "Gelandang", "Penyerang"];

  return (
    <>
      <MainLayout category={["Tim Persib"]}>
        <div className="w-full min-h-screen py-10 px-4 md:px-10">
          {/* Iterasi Kategori Secara Manual (Menggantikan groupedPemain) */}
          {categories.map((posisi) => {
            // 1. Filter pemain untuk kategori saat ini
            const pemainList = rawDaftarPemain.filter(
              (pemain) => pemain.category === posisi
            );

            // 2. Render jika ada pemain di kategori tersebut
            return (
              pemainList.length > 0 && (
                <section key={posisi} className="mb-12">
                  {/* Judul Bagian (Posisi) */}
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
                    {posisi} ({pemainList.length})
                  </h2>

                  {/* Container dengan Responsive Grid */}
                  <div className="flex overflow-x-auto lg:overflow-x-visible lg:grid lg:grid-cols-4 gap-6 md:gap-8 pb-4">
                    {pemainList.map((pemain) => (
                      <div
                        key={pemain.id}
                        // Kelas untuk mengatur lebar item di mode scroll (layar kecil)
                        className="flex-shrink-0 w-60 sm:w-1/3 md:w-1/4 lg:w-auto"
                      >
                        {/* Mengirimkan SELURUH OBJEK 'pemain' ke CardPlayers */}
                        <CardPlayers pemain={pemain} />
                      </div>
                    ))}
                  </div>
                </section>
              )
            );
          })}

          {/* Tampilan jika tidak ada pemain sama sekali */}
          {rawDaftarPemain.length === 0 && (
            <div className="text-center mt-20 text-gray-500 dark:text-gray-400">
              <p className="text-xl">Tidak ada data pemain yang tersedia.</p>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default ProfilePemainView;
