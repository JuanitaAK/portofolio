import Image from "next/image";
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


export default function Stack() {
    return (
    <section className="font-lato">
        <div className="text-center">
            <h3 className="text-4xl py-1">Tech Stack</h3>
            {/* <Image alt="icon"src={css} width={50} height={50}/> ajouter image pour code  */}
            <p className="text-center py-2 leading-8 max-w-lg mx-auto m-center text-gray-800">During my studies at 
                <span className="text-teal-500 px-1" >
                    <a href="https://adatechschool.fr/">
                     Ada Tech School
                    </a>
                </span> in Paris I worked with different types of languages, libraries and frameworks</p>
        </div>
        <div className=" relative p-10 shadow-xl rounded-2xl my-5 mx-5">
            <ul className=" grid gap-10 grid-cols-5 grid-rows-3">
                <Image alt="icon"src={css} width={50} height={50}/>
                <Image alt="icon"src={tailwind} width={50} height={50}/>
                <Image alt="icon"src={html} width={50} height={50}/>
                <Image alt="icon"src={npm} width={50} height={50}/>
                <Image alt="icon"src={javascript} width={50} height={50}/>
                <Image alt="icon"src={nextjs} width={50} height={50}/>
                <Image alt="icon"src={nodejs} width={50} height={50}/>
                <Image alt="icon"src={react} width={50} height={50}/>
                <Image alt="icon"src={php} width={50} height={50}/>
                <Image alt="icon"src={python} width={50} height={50}/>
                <Image alt="icon"src={mongodb} width={50} height={50}/>
                <Image alt="icon"src={mysql} width={50} height={50}/>
                <Image alt="icon"src={git} width={50} height={50}/>
                <Image alt="icon"src={github} width={50} height={50}/>
            </ul>
        </div>
    </section>
    );
    }