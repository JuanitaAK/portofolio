import Image from "next/image";
import pico  from '../../../public/projects/pico8.gif';
import code  from '../../../public/code2.png';




export default function Projects() {
    return (
        <section className="font-lato py-20 ">
            <div className="text-center">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">
                    Creations </h2>
                <div className="py-5 relative flex justify-center ">
                    <Image src={code} width={100} height={100} />
                </div>
                
                <h3 className="text-2xl py-2"> 
                    Web Projects </h3>
                <p className="text-md py-5 leading-8 text-gray-800">
                Here are a few of the projects I worked on. 
                </p>
            </div>

            <div className="lg:flex gap-15">

            <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="text-2xl py-2 text-center text-gray-800">Michonne's Zombalad </h3>
                    <Image src={pico} className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                                In a post-apocalyptic world, the player must escape from a mob of zombies. Programming in LUA language on the Pico-8 software. </p>
                            <div className="flex justify-between gap-4"> 
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto"
                                    href="https://github.com/JuanitaAK/Pico-8--michonne-s-zombelad-">
                                    Repository
                                </a>
                                <a
                                    className="text-center m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white  py-2 px-4 rounded-md mx-auto"
                                    href="https://www.lexaloffle.com/bbs/?tid=50312">
                                    Play 
                                </a>
                            </div>
                        </div>

                    </ul>
                </div> 
 

                <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="text-2xl py-2 text-center text-gray-800">Michonne's Zombalad </h3>
                    <Image src={pico} className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                                In a post-apocalyptic world, the player must escape from a mob of zombies. Programming in LUA language on the Pico-8 software. </p>
                            <div className="flex justify-between gap-4"> 
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto"
                                    href="https://github.com/JuanitaAK/Pico-8--michonne-s-zombelad-">
                                    Repository
                                </a>
                                
                            </div>
                        </div>
                    </ul>
                </div>  

                <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="text-2xl py-2 text-center text-gray-800">Michonne's Zombalad </h3>
                    <Image src={pico} className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                                In a post-apocalyptic world, the player must escape from a mob of zombies. Programming in LUA language on the Pico-8 software. </p>
                            <div className="flex justify-between gap-4"> 
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto"
                                    href="https://github.com/JuanitaAK/Pico-8--michonne-s-zombelad-">
                                    Repository
                                </a>
                                
                            </div>
                        </div>
                    </ul>
                </div> 

                  
            </div>
        </section>
    );
    }