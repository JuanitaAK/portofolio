//import { Inter } from "@next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
// import { Document} from 'react-pdf';
// import cv from "../../../public/cv/cvJak.pdf";



export default function NavBar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-2xl font-lato">Developed by JuanitaK</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"            
            href="#stack">
            Stack
          </a>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="#projects">
            Creations
          </a>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="/cv/cvJak.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
            >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
