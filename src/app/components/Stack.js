import Image from "next/image";
import Link from "next/link";
import css from "../../../public/stack-icons/css-b.svg";
import git from "../../../public/stack-icons/git-b.svg";
import github from "../../../public/stack-icons/github-b.svg";
import html from "../../../public/stack-icons/html-b.svg";
import javascript from "../../../public/stack-icons/javascript-b.svg";
import mongodb from "../../../public/stack-icons/mongodb-b.svg";
import mysql from "../../../public/stack-icons/mysql-b.svg";
import nextjs from "../../../public/stack-icons/nextjs-b.svg";
import nodejs from "../../../public/stack-icons/nodejs-b.svg";
import npm from "../../../public/stack-icons/npm-b.svg";
import php from "../../../public/stack-icons/php-b.svg";
import python from "../../../public/stack-icons/python-b.svg";
import react from "../../../public/stack-icons/react-b.svg";
import tailwind from "../../../public/stack-icons/tailwind-b.svg";
import laravel from "../../../public/stack-icons/laravel.svg";

export default function Stack() {
  return (
    <section id="stack" className="font-lato sm:text-xs md:text-base ">
      <h3 className="text-4xl py-1 text-center">Tech Stack</h3>
      <p className="text-center py-2 leading-8 max-w-2xl mx-auto m-center mb-6 text-gray-800">
        During my time at Sanofi's Digital Accelerator and my studies at
        <span className="text-teal-500 px-1">
          <Link href="https://adatechschool.fr/">Ada Tech School</Link>
        </span>
        in Paris I worked with different types of languages, libraries and
        frameworks.
      </p>
      <div className="relative text-center text-xs sm:text-base p-3 shadow-xl rounded-2xl my-6 mx-auto">
        <ul className=" grid gap-3 md:gap-5 grid-cols-5 grid-rows-3">
          <div className="flex flex-col items-center align-middle gap-4">
            <Image alt="icon" src={css} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800">CSS</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={html} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Html</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={javascript} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800">JavaScript</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={python} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Python</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={react} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> React</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={nextjs} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Next.js</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={nodejs} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Node.js</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={git} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Git</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={github} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> GitHub</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={php} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Php</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={mysql} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> MySQL</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={mongodb} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> MongoDb</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={tailwind} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Tailwind</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={npm} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Npm</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image alt="icon" src={laravel} width={50} height={50} />
            <p className="text-center mx-auto text-gray-800"> Laravel</p>
          </div>
        </ul>
      </div>
    </section>
  );
}
