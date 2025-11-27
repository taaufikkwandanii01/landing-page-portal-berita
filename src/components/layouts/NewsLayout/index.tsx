type PropsType = {
  children: React.ReactNode;
  category?: string[];
};

const NewsLayout = ({ children, category }: PropsType) => {
  return (
    <main className="container w-full mx-auto pt-25 px-2">
      <div className="max-w-6xl mx-auto shadow-2xl rounded-t-xl bg-white px-2">
        <div className="flex items-center justify-center h-40">
          {category?.map((item, index) => (
            <h1
              className="text-2xl font-bold uppercase text-white bg-blue-400 py-3 px-3"
              key={index}
            >
              {item}
            </h1>
          ))}
        </div>
        <div className="min-h-screen">{children}</div>
      </div>
    </main>
  );
};

export default NewsLayout;
