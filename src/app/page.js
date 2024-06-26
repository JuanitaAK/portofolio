//import Image from 'next/image'
//import { BsFillMoonStarsFill} from "react-icons/bs"
//import { Inter } from '@next/font/google';
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-white px-5 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <NavBar />
        <Profile />
        <Stack />
        <Projects />
        <Footer />
      </section>
    </main>
  );
}
