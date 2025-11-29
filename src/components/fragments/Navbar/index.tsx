import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // === FUNGSI TOGGLEDROPDOWN YANG TELAH DIPERBAIKI ===
  const toggleDropdown = (name: string) => {
    // Fungsi ini sekarang HANYA mengurus pembukaan/penutupan dropdown (akordeon),
    // tanpa menyentuh state menu mobile utama (isOpen).
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  // ====================================================

  // Fungsi untuk menutup dropdown saat mengklik di luar (Hanya relevan untuk desktop)
  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    // Tambahkan onBlur dan tabIndex untuk menutup dropdown saat fokus hilang (klik di luar)
    <nav
      className="fixed w-full h-18 z-50 transition-all duration-300"
      onBlur={closeDropdown}
      tabIndex={0}
    >
      <div className="max-w-5xl h-full mx-auto absolute inset-4 lg:inset-2 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg">
        <div className="w-full h-full flex items-center justify-between px-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/logo_simamaung.png" // Pastikan path ini benar
              alt="Simamaung Logo"
              width={80} // Ukuran sedikit lebih besar
              height={40}
              className="cursor-pointer object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden text-sm text-gray-800 gap-8 lg:flex items-center font-semibold">
            {/* Persib */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("persib")}
                className={`flex items-center transition duration-150 cursor-pointer ${
                  openDropdown === "persib"
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                Persib
                <svg
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                    openDropdown === "persib" ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <AnimatePresence>
                {openDropdown === "persib" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 bg-slate-100 border border-gray-100 shadow-xl rounded-lg p-3 w-48 flex flex-col gap-2 text-gray-700 text-sm overflow-hidden"
                  >
                    <Link
                      href="/Persib/berita-persib"
                      className="py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      Berita Persib
                    </Link>
                    <Link
                      href="/Persib/pemain-persib"
                      className="py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      Profil Pemain
                    </Link>
                    <Link
                      href="/Persib/jadwal-persib"
                      className="py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      Jadwal & Hasil
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Sepak Bola */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("nasional")}
                className={`flex items-center transition duration-150 cursor-pointer ${
                  openDropdown === "nasional"
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                Sepak Bola
                <svg
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                    openDropdown === "nasional" ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <AnimatePresence>
                {openDropdown === "nasional" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 bg-slate-100 border border-gray-100 shadow-xl rounded-lg p-3 w-48 flex flex-col gap-2 text-gray-700 text-sm overflow-hidden"
                  >
                    <Link
                      href="/Nasional/bola-nasional"
                      className="py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      Bola Nasional
                    </Link>
                    <Link
                      href="/Nasional/sports-jabar"
                      className="py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      Sports Jabar
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Hiburan */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("hiburan")}
                className={`flex items-center transition duration-150 cursor-pointer ${
                  openDropdown === "hiburan"
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                Hiburan
                <svg
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                    openDropdown === "hiburan" ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <AnimatePresence>
                {openDropdown === "hiburan" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 bg-slate-100 border border-gray-100 shadow-xl rounded-lg p-3 w-48 flex flex-col gap-2 text-gray-700 text-sm overflow-hidden"
                  >
                    <Link
                      href="/Hiburan/arena-bobotoh"
                      className="py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      Arena Bobotoh
                    </Link>
                    <Link
                      href="/Hiburan/esport"
                      className="py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      E-Sport & Game
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Hamburger Icon (Mobile) */}
          <div className="lg:hidden text-gray-800 z-50">
            <Hamburger
              toggled={isOpen}
              toggle={() => {
                setOpen(!isOpen);
                // Tutup dropdown desktop/mobile saat ikon hamburger diklik
                if (!isOpen) {
                  setOpenDropdown(null);
                }
              }}
              size={24}
              duration={0.4}
              distance="sm"
              color={isOpen ? "#4A5568" : "#2D3748"} // Warna ikon saat terbuka/tertutup
            />
          </div>
        </div>
      </div>

      {/* MOBILE MENU DENGAN STRUKTUR AKORDEON (SAMA DENGAN DESKTOP) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-auto h-auto absolute top-24 inset-x-4 overflow-y-auto rounded-xl shadow-lg bg-[#2D5C88]/30 backdrop-blur-lg px-6 py-4 lg:hidden"
          >
            <ul className="flex flex-col text-sm font-bold text-black gap-1">
              {/* --- Kategori PERSIP --- */}
              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("persib")}
                  className="w-full flex justify-between items-center py-3 hover:text-blue-400 transition-colors"
                >
                  Persib
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === "persib" ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <AnimatePresence>
                  {openDropdown === "persib" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                      className="flex flex-col gap-1 font-medium text-black pl-4 pb-2"
                    >
                      <Link
                        href="/Persib/berita-persib"
                        className="block py-1 hover:text-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        Berita Persib
                      </Link>
                      <Link
                        href="/Persib/pemain-persib"
                        className="block py-1 hover:text-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        Profil Pemain
                      </Link>
                      <Link
                        href="/Persib/jadwal-persib"
                        className="block py-1 hover:text-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        Jadwal & Hasil
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* --- Kategori SEPAK BOLA --- */}
              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("nasional")}
                  className="w-full flex justify-between items-center py-3 hover:text-blue-400 transition-colors"
                >
                  Sepak Bola
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === "nasional" ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <AnimatePresence>
                  {openDropdown === "nasional" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                      className="flex flex-col gap-1 font-medium text-black pl-4 pb-2"
                    >
                      <Link
                        href="/Nasional/bola-nasional"
                        className="block py-1 hover:text-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        Bola Nasional
                      </Link>
                      <Link
                        href="/Nasional/sports-jabar"
                        className="block py-1 hover:text-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        Sports Jabar
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* --- Kategori HIBURAN --- */}
              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("hiburan")}
                  className="w-full flex justify-between items-center py-3 hover:text-blue-400 transition-colors"
                >
                  Hiburan
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === "hiburan" ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <AnimatePresence>
                  {openDropdown === "hiburan" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                      className="flex flex-col gap-1 font-medium text-black pl-4 pb-2"
                    >
                      <Link
                        href="/Hiburan/arena-bobotoh"
                        className="block py-1 hover:text-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        Arena Bobotoh
                      </Link>
                      <Link
                        href="/Hiburan/esport"
                        className="block py-1 hover:text-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        E-Sport & Game
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
