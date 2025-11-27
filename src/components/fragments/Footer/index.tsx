import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="max-w-6xl mx-auto border-t border-slate-200 bg-white">
        <div className="text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} Simamaung. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
