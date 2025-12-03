import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ArtikelPage() {
  const router = useRouter();
  const { title, category, date, time, image } = router.query;
  const [imgSrc, setImgSrc] = useState(
    (image as string) || "/images/news/default.png"
  );

  // untuk content, kamu pakai lorem ipsum saja
  const content = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem numquam exercitationem consequatur assumenda temporibus praesentium facilis earum, quaerat, omnis facere voluptas laboriosam. Maiores recusandae blanditiis qui rem. Quibusdam suscipit ullam, hic consequuntur nesciunt minima illo perspiciatis eos? Eum perferendis autem labore nulla rem nostrum unde consectetur cum mollitia numquam possimus perspiciatis minima accusantium a corrupti, et deleniti amet corporis aliquid excepturi explicabo minus iure obcaecati dignissimos! Mollitia quo, reprehenderit, quisquam voluptates porro animi sit suscipit cupiditate neque officia facilis assumenda pariatur consequuntur architecto soluta! Tempora quod tenetur placeat exercitationem doloremque blanditiis deleniti quo totam. Cum possimus repudiandae obcaecati porro?

    Quibusdam suscipit ullam, hic consequuntur nesciunt minima illo perspiciatis eos? Eum perferendis autem labore nulla rem nostrum unde consectetur cum mollitia numquam possimus perspiciatis minima accusantium a corrupti, et deleniti amet corporis aliquid excepturi explicabo minus iure obcaecati dignissimos! Mollitia quo, reprehenderit, quisquam voluptates porro animi sit suscipit cupiditate neque officia facilis assumenda pariatur consequuntur architecto soluta! Tempora quod tenetur placeat exercitationem doloremque blanditiis deleniti quo totam. Cum possimus repudiandae obcaecati porro?
  `;

  return (
    <>
      <MainLayout category={[category as string]}>
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-bold">{category}</span> • {date} • {time}
          </p>

          <Image
            src={imgSrc}
            alt={title as string}
            width={900}
            height={500}
            className="w-full h-64 object-cover mb-6"
            onError={() => setImgSrc("/images/news/default.png")}
          />

          <p className="text-lg leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </MainLayout>
    </>
  );
}
