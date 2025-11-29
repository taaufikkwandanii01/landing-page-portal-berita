type PropsType = {
  children: React.ReactNode;
  category?: string[];
};

const MainLayout = ({ children, category }: PropsType) => {
  return (
    <main className="container w-full mx-auto pt-25">
      <div className="max-w-6xl mx-auto shadow-2xl rounded-t-xl bg-white px-2">
        <div className="flex items-center justify-center py-8">
          {category?.map((item, index) => (
            <h1
              className="text-sm lg:text-2xl font-bold uppercase text-white bg-[#2D5C88] py-3 px-3"
              key={index}
            >
              {item}
            </h1>
          ))}
        </div>
        <div className="min-h-screen pb-10">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
