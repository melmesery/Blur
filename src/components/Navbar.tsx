import Link from "next/link";
import Logo from "./Logo.tsx";
import Search from "./Search.tsx";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="flex gap-4 justify-between items-center font-bold bg-white py-2 px-3 sm:p-5 w-full max-w-[1600px] mx-auto">
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl font-bold text-center whitespace-nowrap">
            <Logo />
          </h1>
        </Link>
        <Search />
      </nav>
    </header>
  );
}
