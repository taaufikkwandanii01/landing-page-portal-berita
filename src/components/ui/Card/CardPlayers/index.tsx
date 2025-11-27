import Image from "next/image";
import Link from "next/link";

type PropsType = {
  href: string;
  title: string;
  category: string;
  date: string;
  time: string;
  image: string;
};

const CardPlayers = (props: PropsType) => {
  const { href, title, category, date, time, image } = props;
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

export default CardPlayers;
