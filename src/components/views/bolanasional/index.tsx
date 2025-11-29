import NewsLayout from "@/components/layouts/NewsLayout";
import { CardNews, CardNewsTrending } from "@/components/ui/Card/CardNews";

const news = [
  {
    id: 1,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam vitae perferendis. Aut, aliquid delectus.",
    category: "Bola Nasional",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },
  {
    id: 2,
    href: "/beritapersib",
    title: "Lorem ipsum dolor sit amet.",
    category: "Bola Nasional",
    date: "24 November 2025",
    time: "19:33 WIB",
    image: "/persib/321083001.webp",
  },
  {
    id: 3,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque.",
    category: "Bola Nasional",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam vitae perferendis. Aut, aliquid delectus.",
  },
  {
    id: 2,
    href: "/beritapersib",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque.",
  },
  {
    id: 4,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam vitae perferendis. Aut, aliquid delectus.",
  },
  {
    id: 5,
    href: "/beritapersib",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque.",
  },
  {
    id: 7,
    href: "/beritapersib",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam vitae perferendis. Aut, aliquid delectus.",
  },
  {
    id: 8,
    href: "/beritapersib",
    title: "Lorem ipsum dolor sit amet.",
  },
];

const BolaNasionalView = () => {
  return (
    <NewsLayout category={["Bola Nasional"]}>
      <div className="flex flex-col md:flex-row gap-2">
        {/* Berita Terkini */}
        <div className="w-full md:w-2/3">
          <h1 className="text-lg lg:text-2xl font-bold font-serif tracking-tighter underline uppercase mb-5">
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
        <div className="w-full md:w-1/3 mt-5 md:mt-0 md:pt-15">
          <h1 className="text-lg lg:text-2xl font-semibold font-serif underline uppercase mb-5">
            Trending
          </h1>

          <div className="grid grid-cols-1 gap-0 md:border-x border-gray-200">
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

export default BolaNasionalView;
