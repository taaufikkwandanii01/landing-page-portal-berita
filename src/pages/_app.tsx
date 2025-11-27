import Footer from "@/components/fragments/Footer";
import Navbar from "@/components/fragments/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import { useRouter } from "next/router";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const disableNavbar = ["/"];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <div
      className={`${lato.className} min-h-screen flex flex-col bg-radial-[at_50%_75%] from-sky-200 via-sky-400 to-slate-300 to-90%`}
    >
      {!disableNavbar.includes(pathname.split("/")[1]) && <Navbar />}
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
