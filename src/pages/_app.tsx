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
      className={`${lato.className} min-h-screen flex flex-col bg-slate-200`}
    >
      {!disableNavbar.includes(pathname.split("/")[1]) && <Navbar />}
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
