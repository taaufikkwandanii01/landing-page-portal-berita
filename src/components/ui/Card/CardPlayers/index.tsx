import Image from "next/image";

// Tentukan Tipe Data Pemain
type PropsType = {
  pemain: {
    id: number;
    nama: string;
    posisi: string;
    no: number;
    category: string;
    imageUrl: string;
  };
};

const CardPlayers = ({ pemain }: PropsType) => {
  const { id, nama, posisi, no, imageUrl } = pemain;
  return (
    // Gunakan div utama sebagai container card
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48 sm:h-52 md:h-60 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {/* Nomor Punggung Besar di Belakang */}
        <span className="absolute top-0 left-0 text-[8rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-300 dark:text-gray-900 opacity-60 leading-none z-0">
          {no}
        </span>

        {/* Placeholder Image (Ganti dengan Image Next.js jika sudah siap) */}
        <div className="w-full h-full flex items-center justify-center text-gray-500 z-10 relative"></div>
      </div>

      <div className="p-4 text-center relative z-20 -mt-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 dark:bg-blue-500 rounded-full shadow-md mb-2">
          #{no}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 leading-tight">
          {nama}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
          {posisi}
        </p>
      </div>
    </div>
  );
};

export default CardPlayers;
