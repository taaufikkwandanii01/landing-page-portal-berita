import NewsLayout from "@/components/layouts/NewsLayout";
import { CardNews, CardNewsTrending } from "@/components/ui/Card/CardNews";

const news = [
  {
    id: 1,
    href: "/beritapersib",
    title:
      "Usai Tampil Apik di Piala Dunia U-17, Nazriel Semakin Termotivasi Berkat Ppujian Thom Haye",
    category: "Sports Jabar",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },
  {
    id: 2,
    href: "/beritapersib",
    title:
      "Usai Tampil Apik di Piala Dunia U-17, Nazriel Semakin Termotivasi Berkat Ppujian Thom Haye",
    category: "Sports Jabar",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },
  {
    id: 3,
    href: "/beritapersib",
    title:
      "Usai Tampil Apik di Piala Dunia U-17, Nazriel Semakin Termotivasi Berkat Ppujian Thom Haye",
    category: "Sports Jabar",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },

  {
    id: 4,
    href: "/beritapersib",
    title:
      "Usai Tampil Apik di Piala Dunia U-17, Nazriel Semakin Termotivasi Berkat Ppujian Thom Haye",
    category: "Sports Jabar",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },

  {
    id: 5,
    href: "/beritapersib",
    title:
      "Usai Tampil Apik di Piala Dunia U-17, Nazriel Semakin Termotivasi Berkat Ppujian Thom Haye",
    category: "Sports Jabar",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },

  {
    id: 6,
    href: "/beritapersib",
    title:
      "Usai Tampil Apik di Piala Dunia U-17, Nazriel Semakin Termotivasi Berkat Ppujian Thom Haye",
    category: "Sports Jabar",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },
];

const trending = [
  {
    id: 1,
    href: "/beritapersib",
    title:
      "Usai Tampil Apik di Piala Dunia U-17, Nazriel Semakin Termotivasi Berkat Pujian Thom Haye",
  },
  {
    id: 2,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat.",
  },
  {
    id: 3,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat.",
  },
];

const SportsJabarView = () => {
  return (
    <NewsLayout category={["Sports Jabar"]}>
      <div className="flex flex-col md:flex-row gap-2">
        {/* Berita Terkini */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-mono underline uppercase mb-5">
            Berita Terkini
          </h1>

          <div className="grid grid-cols-1 gap-2">
            {news.map((item) => (
              <CardNews
                key={item.id}
                href={item.href}
                title={item.title}
                category={item.category}
                date={item.date}
                time={item.time}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Trending */}
        <div className="w-full md:w-1/3 mt-5 md:mt-0">
          <h1 className="text-2xl font-mono underline uppercase mb-5">
            Trending
          </h1>

          <div className="grid grid-cols-1 gap-2">
            {trending.map((item, index) => (
              <CardNewsTrending
                key={item.id}
                href={item.href}
                nomor={(index + 1).toString()}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </NewsLayout>
  );
};

export default SportsJabarView;
