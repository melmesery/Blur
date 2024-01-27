import { PiInstagramLogoThin, PiBehanceLogoThin } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#C8D8F4] text-sky-700 p-5">
      <div className="flex items-center justify-center gap-2 text-3xl cursor-pointer">
        <PiInstagramLogoThin />
        <PiBehanceLogoThin />
      </div>
    </footer>
  );
}
