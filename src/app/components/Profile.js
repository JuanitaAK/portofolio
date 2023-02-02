import { 
    AiFillLinkedin, 
    AiFillGithub 
} from "react-icons/ai";
import Image from "next/image";
import deved from '../../../public/dev-ed4.png';



export default function Profile() {
return (
<section className="pb-20 font-lato">
    <div className="text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Juanita Afanador Kowalski </h2>
        <h3 className="text-2xl py-2"> 
            Web Developer. </h3>
        <p className="text-md py-5 leading-8 text-gray-800">
            After several years of experience in the restaurant and retail industries, 
            I am currently reorienting myself to become a web developer. I am currently 
            studying in a programming school and I am looking for a company where I can 
            do a 12-month apprenticeship. My career path has allowed me to develop my 
            adaptation, communication and perseverance skills. I like to take on challenges, 
            learn constantly and use my problem-solving skills. I look forward to applying my 
            technical knowledge in a challenging and positive working environment.
        </p>
    </div>
    <div className="text-5xl flex justify-center gap-16 text-gray-600">
        <a href="https://github.com/JuanitaAK">
            <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/juanitaak/">
            <AiFillLinkedin />
        </a>
    </div>
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image src ={deved} style={{objectFit:"cover"}} fill />
    </div>
</section>
);
}
