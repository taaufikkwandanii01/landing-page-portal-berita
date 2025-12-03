import MainLayout from "@/components/layouts/MainLayout";
import CardPlayers from "@/components/ui/Card/CardPlayers";

const rawDataTimPersib = [
  // Kiper
  {
    id: 1,
    nama: "Fullname",
    posisi: "Kiper",
    no: 1,
    category: "Kiper",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 2,
    nama: "Fullname",
    posisi: "Kiper",
    no: 52,
    category: "Kiper",
    imageUrl: "/images/tim-persib/.jpg",
  },

  // Bek
  {
    id: 3,
    nama: "Fullname",
    posisi: "Bek Tengah",
    no: 2,
    category: "Bek",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 4,
    nama: "Fullname",
    posisi: "Bek Tengah",
    no: 56,
    category: "Bek",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 5,
    nama: "Fullname",
    posisi: "Bek Sayap Kiri",
    no: 16,
    category: "Bek",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 6,
    nama: "Fullname",
    posisi: "Bek Sayap Kanan",
    no: 4,
    category: "Bek",
    imageUrl: "/images/tim-persib/.jpg",
  },

  // Gelandang
  {
    id: 7,
    nama: "Fullname",
    posisi: "Gelandang Bertahan",
    no: 11,
    category: "Gelandang",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 8,
    nama: "Fullname",
    posisi: "Gelandang Tengah",
    no: 5,
    category: "Gelandang",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 9,
    nama: "Fullname",
    posisi: "Gelandang Serang",
    no: 23,
    category: "Gelandang",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 10,
    nama: "Fullname",
    posisi: "Gelandang Serang",
    no: 99,
    category: "Gelandang",
    imageUrl: "/images/tim-persib/.jpg",
  },

  // Penyerang
  {
    id: 11,
    nama: "Fullname",
    posisi: "Striker",
    no: 30,
    category: "Penyerang",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 12,
    nama: "Fullname",
    posisi: "Striker",
    no: 19,
    category: "Penyerang",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 13,
    nama: "Fullname",
    posisi: "Penyerang Kiri",
    no: 77,
    category: "Penyerang",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 14,
    nama: "Fullname",
    posisi: "Penyerang Kanan",
    no: 7,
    category: "Penyerang",
    imageUrl: "/images/tim-persib/.jpg",
  },

  //Pelatih
  {
    id: 14,
    nama: "Fullname",
    posisi: "Pelatih Kepala",
    category: "Pelatih",
    imageUrl: "/images/tim-persib/.jpg",
  },
  {
    id: 15,
    nama: "Fullname",
    posisi: "Asisten Pelatih",
    category: "Pelatih",
    imageUrl: "/images/tim-persib/.jpg",
  },

  //Manajer
  {
    id: 16,
    nama: "Fullname",
    posisi: "",
    category: "Manajer",
    imageUrl: "/images/tim-persib/.jpg",
  },
];

const TimPersibView = () => {
  const category = [
    "Kiper",
    "Bek",
    "Gelandang",
    "Penyerang",
    "Pelatih",
    "Manajer",
  ];

  return (
    <>
      <MainLayout category={["Tim Persib"]}>
        <div className="w-full min-h-screen py-10 px-4 md:px-10">
          {/* Iterasi Kategori Secara Manual (Menggantikan groupedPemain) */}
          {category.map((posisi) => {
            // 1. Filter pemain untuk kategori saat ini
            const timList = rawDataTimPersib.filter(
              (tim) => tim.category === posisi
            );

            // 2. Render jika ada pemain di kategori tersebut
            return (
              timList.length > 0 && (
                <section key={posisi} className="mb-12">
                  {/* Judul Bagian (Posisi) */}
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
                    {posisi} ({timList.length})
                  </h2>

                  {/* Container dengan Responsive Grid */}
                  <div className="flex overflow-x-auto lg:overflow-x-visible lg:grid lg:grid-cols-4 gap-6 md:gap-8 pb-4">
                    {timList.map((tim) => (
                      <div
                        key={tim.id}
                        // Kelas untuk mengatur lebar item di mode scroll (layar kecil)
                        className="flex-shrink-0 w-60 sm:w-1/3 md:w-1/4 lg:w-auto"
                      >
                        {/* Mengirimkan SELURUH OBJEK 'pemain' ke CardPlayers */}
                        <CardPlayers dataTimPersib={tim} />
                      </div>
                    ))}
                  </div>
                </section>
              )
            );
          })}

          {/* Tampilan jika tidak ada pemain sama sekali */}
          {rawDataTimPersib.length === 0 && (
            <div className="text-center mt-20 text-gray-500 dark:text-gray-400">
              <p className="text-xl">Tidak ada data tim yang tersedia.</p>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default TimPersibView;
