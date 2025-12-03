import MainLayout from "@/components/layouts/MainLayout";
import MainView from "@/components/views";

export default function Home() {
  return (
    <>
      <MainLayout category={["Simamaung"]}>
        <MainView />
      </MainLayout>
    </>
  );
}
