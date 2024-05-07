//import { BsFillMoonStarsFill } from "react-icons/bs"
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="py-5 md:m-5 flew-row gap-3 md:gap-5 flex justify-center md:justify-end">
      <Link
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
        href="#stack"
      >
        Stack
      </Link>

      <Link
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
        href="#projects"
      >
        Creations
      </Link>

      <Link
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
        href="/cv/CVJuanitAK.pdf"
        alt="alt text"
        target="_blank"
        rel=""
      >
        Resume
      </Link>
    </nav>
  );
}
