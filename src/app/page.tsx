import Gallery from "@/components/Gallery.tsx";
import { PiBehanceLogoThin, PiInstagramLogoThin } from "react-icons/pi";
import Logo from "../components/Logo.tsx";

export default function Home() {
  return (
    <>
      <section className="min-h-[40vh] sm:min-h-[60vh] bg-[#254F1A] text-[#D2E823]">
        <div className="pt-10 sm:pt-32 ps-5 sm:ps-10">
          <h1 className="text-4xl sm:text-8xl text-[#D2E823] mb-5">
            <Logo />
          </h1>
          <p className="text-3xl sm:text-5xl font-bold mb-5">
            Beautiful Free Stock Image Footage
          </p>
          <div className="flex items-center gap-2 text-3xl cursor-pointer">
            <PiInstagramLogoThin />
            <PiBehanceLogoThin />
          </div>
        </div>
      </section>
      <Gallery />
    </>
  );
}
