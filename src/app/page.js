//import Image from 'next/image'
import { Inter } from '@next/font/google'
//import { BsFillMoonStarsFill} from "react-icons/bs"
import NavBar from './components/NavBar'
import Profile from './components/Profile'





//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
       <NavBar/>
       <Profile/>      

      </section>   
    </main>
  )
}
