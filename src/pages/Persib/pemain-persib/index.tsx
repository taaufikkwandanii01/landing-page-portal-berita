import NewsLayout from "@/components/layouts/NewsLayout";

const ProfilePemainPage = () => {
  return (
    <>
      <NewsLayout category={["Players"]}>
        <div className="w-full flex items-center justify-center py-35">
          <h1 className="text-2xl font-bold uppercase">Hallo</h1>
        </div>
      </NewsLayout>
    </>
  );
};

export default ProfilePemainPage;
