import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../../../public/dev-ed4.png";

export default function Profile() {
  return (
    <section className="pb-20 font-lato ">
      <div className="flex">
        <p className="text-5xl text-center py-2 my-10 text-teal-600 font-medium mx-auto">
          Juanita Afanador Kowalski{" "}
        </p>
      </div>

      <div className="text-center bg-gradient-to-r from-cyan-500 to-teal-400  px-10 py-5 rounded-md ">
        <h3 className="text-2xl text-white">Web Developer. </h3>
        <p className="text-md py-5 leading-8 text-gray-800 m-auto">
          After a 1-year experience at Sanofi’s Digital Accelerator and 2 years
          transitioning into web development, I am now seeking a full-time
          position. My background in the commercial sectors has endowed me with
          essential skills in adaptation, communication, and perseverance,
          complementing my passion for problem-solving and continuous learning.
          Leveraging my acquired expertise, I am eager to contribute to the
          development of dynamic, efficient, and scalable web experiences. I aim
          to find a role within an innovative team, fostering a positive work
          culture while advancing my skills and contributing meaningfully to
          projects.
        </p>
        <div className="text-5xl flex justify-center gap-16 text-gray-800">
          <a href="https://github.com/JuanitaAK">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/juanitaak/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className="flex relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
        <Image
          className=""
          src={deved}
          alt={"avatar of a girl"}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
