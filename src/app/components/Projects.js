import Image from "next/image";
import Link from "next/link";
import pico from "../../../public/projects/pico8.gif";
import code from "../../../public/code2.png";
import weather from "../../../public/projects/gifData.gif";
import onAir from "../../../public/projects/gifextension.gif";
import ecom from "../../../public/projects/ecom2.png";
import todo from "../../../public/projects/todo.png";
import meme from "../../../public/projects/meme1.png";
import surf from "../../../public/projects/surf.png";
import poke from "../../../public/projects/poke.png";
import ai from "../../../public/projects/aiStory.png";

export default function Projects() {
  return (
    <section id="projects" className="font-lato mt-6">
      <div className="text-center">
        <div className="relative flex justify-center mx-auto">
          <h2 className="text-5xl py-1 gap-5 justify-center text-teal-600 p-3 font-medium mr-5">
            Creations
          </h2>
          <Image src={code} alt="icon " width={100} height={100} />
        </div>
        <h3 className="text-2xl py-2">Web Projects </h3>
        <p className="text-md leading-8 text-gray-800">
          Here are a few of the projects I worked on.
        </p>
      </div>

      <div className="relative w-auto lg:grid lg:grid-cols-2 gap-3">
        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            Ai Story
          </h3>
          <Image
            src={ai}
            alt="television programs info gif"
            className="items-center relative p-5 mx-auto"
          />
          <ul className="items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center p-3">
              <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                Full-stack project. This Website is made to create your oun
                stories with the help of OpenAI.
              </p>
              <div className="flex md:flex-row flex-col gap-2 mb-3">
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://github.com/JuanitaAK/my-story"
                >
                  Repository
                </Link>
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://aistory.adahub.fr/"
                >
                  Project
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            PokeDex
          </h3>
          <Image
            src={poke}
            alt="television programs info gif"
            className="items-center relative p-5 mx-auto"
          />
          <ul className="items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center p-3">
              <p className="text-sm text-center pb-5 leading-6 text-gray-80">
                Website featuring all the existing pokemons. You can visualize
                and lean about them. Because who does not love them?
              </p>
              <div className="flex md:flex-row gap-3 flex-col">
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://github.com/JuanitaAK/my-mini-app"
                >
                  Repository
                </Link>
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://pokedex-beige-nu.vercel.app/"
                >
                  Project
                </Link>
              </div>
            </div>
          </ul>
        </div>

        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            Surf Spots
          </h3>
          <Image
            src={surf}
            alt="screen capture of surf spot app"
            className="items-center relative p-5 mx-auto"
            height={630}
          />
          <ul className="items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center gap-3 p-3">
              <p className="text-sm text-center leading-6 text-gray-800">
                iOS App. OOP programming in Swift and Python using Flask and
                Xcode. API call-creation.
              </p>
              <Link
                className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                href="https://github.com/JuanitaAK/SurfApp"
              >
                Repository
              </Link>
            </div>
          </ul>
        </div>

        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            On Air Today
          </h3>
          <Image
            src={onAir}
            alt="television programs info"
            className=" items-center relative p-5 mx-auto"
            height={600}
          />
          <ul className="items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center gap-3 p-3">
              <p className="text-sm text-center leading-6 text-gray-800 ">
                Chrome extension featuring the television schedule of the day in
                the United States. Group project.{" "}
              </p>
              <Link
                className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                href="https://github.com/JuanitaAK/On-air-Today"
              >
                Repository
              </Link>
            </div>
          </ul>
        </div>

        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            Old fourniture for a new life.
          </h3>
          <Image
            src={ecom}
            alt="image of e-commerce website"
            className=" items-center py-5 relative p-5 mx-auto"
          />
          <ul className="items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center p-3">
              <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                Back-end and Front-End E-Commerce website. API creation. Group
                project in JavaScript with React-Bootstrap, Node.js, Express,
                MongoDB.
              </p>
              <div className="flex md:flex-row gap-3 flex-col">
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://github.com/JuanitaAK/projet-collectif---back-fraises1"
                >
                  Back-End
                </Link>
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://github.com/JuanitaAK/projet-collectif---front-fraises1"
                >
                  Front-End
                </Link>
              </div>
            </div>
          </ul>
        </div>

        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            Meme World
          </h3>
          <Image
            src={meme}
            alt="screen capture of a browser extension "
            className=" items-center py-5 relative p-5 mx-auto"
            image={50}
          />
          <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center gap-3 p-3">
              <p className="text-sm text-center leading-6 text-gray-800">
                Full-Stack microblogging platform. OOP programming, MVC pattern
                in Php, MySQL and Laravel. Use of Git, GitHub and Docker. Pair
                programming.
              </p>
              <Link
                className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                href="https://github.com/adatechschool/JAS-Plateforme-de-microblogging"
              >
                Repository
              </Link>
            </div>
          </ul>
        </div>

        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            Weather Website
          </h3>
          <Image
            src={weather}
            alt="screen capture of a weather webpage"
            className="items-center p-5 mt-5 mx-auto"
          />
          <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center gap-3 p-3">
              <p className="text-sm text-center mt-7 py-5 leading-6 text-gray-800">
                Weather forecast visualization website by geolocation or by
                entering the location name. Calling two API. Group project.
                Programming in JavaScript, CSS and Html.
              </p>

              <Link
                className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                href="https://github.com/JuanitaAK/Weather-website"
              >
                Repository
              </Link>
            </div>
          </ul>
        </div>

        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            Michonne's Zombalad
          </h3>
          <Image
            src={pico}
            alt="screen capture of a video-game"
            className=" zitems-center py-5 relative p-5"
            image={50}
          />
          <ul className="items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-center leading-6 text-gray-800">
                In a post-apocalyptic world, the player must escape from a mob
                of zombies. Programming in LUA language on the Pico-8 software.
              </p>
              <div className="flex md:flex-row gap-3 p-3 flex-col">
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://github.com/JuanitaAK/Pico-8--michonne-s-zombelad-"
                >
                  Repository
                </Link>
                <Link
                  className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                  href="https://www.lexaloffle.com/bbs/?tid=50312"
                >
                  Play it
                </Link>
              </div>
            </div>
          </ul>
        </div>

        <div className="shadow-xl rounded-2xl my-5 m-3">
          <h3 className="font-bold text-2xl py-2 text-center text-gray-800">
            One day todo.
          </h3>
          <Image
            src={todo}
            alt="todo list"
            className=" items-center py-5 relative p-5 mx-auto"
          />
          <ul className="items-center grid gap-5 grid-cols-1 grid-rows-1">
            <div className="flex flex-col items-center gap-3 p-3">
              <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                Online Todo list. Personal project. Programming in JavaScript
                and CSS with React. Creation and use of props, states and keys,
                to pass data from user from different components.
              </p>
              <Link
                className="text-center w-48 bg-gradient-to-r from-cyan-500 to-teal-500 md:font-bold text-base md:text-lg text-white p-3 rounded-md"
                href="https://github.com/JuanitaAK/One_day_todo"
              >
                Repository
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
