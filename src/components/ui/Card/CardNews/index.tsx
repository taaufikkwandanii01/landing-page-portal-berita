import Image from "next/image";
import Link from "next/link";

// --- CardNews: Kartu Berita Utama (Image + Text Side-by-Side) ---

type PropsTypeNews = {
  href: string;
  title: string;
  category: string;
  date: string;
  time: string;
  image: string;
};

const CardNews = (Props: PropsTypeNews) => {
  const { href, title, category, date, time, image } = Props;
  return (
    <Link
      href={href}
      className="group block w-full py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="flex flex-row gap-3 items-center">
        {/* Kontainer Gambar Kecil (20% Lebar) */}
        <div className="w-1/5 flex-shrink-0 relative aspect-square overflow-hidden rounded-md">
          <Image
            src={image}
            alt={title}
            fill
            // Perbaikan di sini: Mendefinisikan ukuran yang lebih spesifik berdasarkan tampilan.
            // Contoh: di layar kecil 100vw, di desktop (lg) 100px.
            sizes="(max-width: 640px) 20vw, (max-width: 1024px) 15vw, 100px"
            className="object-cover"
          />
        </div>

        {/* Kontainer Teks (80% Lebar) */}
        <div className="flex-grow">
          {/* Judul */}
          <h2 className="text-base font-semibold leading-snug group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h2>
          {/* Metadata Kecil */}
          <div className="text-xs text-gray-400 mt-1">
            <span className="uppercase font-medium">{category}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            <span>{date}</span>
            <span className="ml-2">{time}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// --- CardNewsTrending: Kartu Berita Populer (Nomor + Title) ---

type PropsTypeNewsTrending = {
  nomor: string;
  href: string;
  title: string;
};

const CardNewsTrending = (Props: PropsTypeNewsTrending) => {
  const { href, nomor, title } = Props;
  return (
    // Bungkus Link di sekitar div utama dan tambahkan group hover
    <Link
      href={href}
      className="block group w-full transition-all duration-300"
    >
      <div className="w-full flex flex-row items-start gap-4 py-3 border-b border-gray-100 hover:bg-gray-50 px-2 rounded-md">
        {/* Penomoran Besar (W-1/5) */}
        <div className="flex-shrink-0 pt-1">
          <h3 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-300 group-hover:text-blue-600 transition-colors duration-200">
            {nomor}
          </h3>
        </div>

        {/* Judul Berita (W-4/5) */}
        <div className="flex-grow">
          <h3 className="text-base md:text-lg font-semibold leading-tight text-gray-800 transition-colors duration-200 group-hover:text-blue-400">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export { CardNews, CardNewsTrending };
