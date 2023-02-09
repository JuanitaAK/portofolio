import Image from "next/image";
import pico  from '../../../public/projects/pico8.gif';
import code  from '../../../public/code2.png';
import weather from '../../../public/projects/weather.png';
import onAir from '../../../public/projects/onAir.png';
import ecom from '../../../public/projects/ecom2.png';
import todo from '../../../public/projects/todo.png'
import meme from '../../../public/projects/meme1.png';
import surf from '../../../public/projects/surf.png'




export default function Projects() {
    return (
        <section id='projects' className="font-lato py-10 ">
            <div className="text-center">
                <div className=" relative flex justify-center mx-10 ">
                    <h2 className="text-5xl py-1 gap-5 justify-center text-teal-600 font-medium mx-10 ">
                    Creations </h2>             
                    <Image src={code} alt=" icon " width={100} height={100} />
                </div>
                
                <h3 className="text-2xl py-2"> 
                    Web Projects </h3>
                <p className="text-md leading-8 text-gray-800">
                Here are a few of the projects I worked on. 
                </p>
            </div>

            <div className="relative lg: grid lg:grid-cols-2 gap-15 mx-auto">

                

            <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className=" font-bold text-2xl py-2 text-center text-gray-800">Surf Spots</h3>
                    <Image src={surf} alt="screen capture of surf spot app" className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                            iOS App. OOP programming in Swift and Python using Flask and Xcode. API call-creation. </p>
                            <div className="flex justify-between gap-7"> 
                                <a
                                    className="text-center gap-2 m-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto"
                                    href="https://github.com/JuanitaAK/SurfApp">
                                    Repository
                                </a>
                                
                            </div>
                        </div>
                    </ul>
                </div>
                
                <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="font-bold text-2xl py-2 text-center text-gray-800"> On Air Today</h3>
                    <Image src={onAir} alt="todo list screen capture" className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800 ">
                            Chrome extension featuring the television schedule of the day in the United States. Group project. </p>
                            <div className="flex justify-between gap-4 mt-16"> 
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-4 mx-auto"
                                    href="https://github.com/JuanitaAK/On-air-Today">
                                    Repository
                                </a>
                                
                            </div>
                        </div>
                    </ul>
                </div> 


                <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="font-bold text-2xl py-2 text-center text-gray-800">Michonne's Zombalad</h3>
                    <Image src={pico} alt="screen capture of a video-game" className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                                In a post-apocalyptic world, the player must escape from a mob of zombies. Programming in LUA language on the Pico-8 software. </p>
                            <div className="flex justify-between items-center m-8 gap-5 mx-auto"> 
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
                    <h3 className="font-bold text-2xl py-2 text-center text-gray-800">Old fourniture for a new life.</h3>
                    <Image src={ecom} alt="image of e-commerce website"  className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                            Back-end and Front-End E-Commerce website. API creation. Group project in JavaScript with React-Bootstrap, Node.js, Express, MongoDB.  </p>
                            <div className="flex justify-between gap-4"> 
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-10 mx-auto"
                                    href="https://github.com/JuanitaAK/projet-collectif---back-fraises">
                                    Back-End
                                </a>
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-10 mx-auto"
                                    href="https://github.com/JuanitaAK/projet-collectif---front-fraises1">
                                    Front-End
                                </a>
                            </div>
                        </div>
                    </ul>
                </div> 
                
                <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="font-bold text-2xl py-2 text-center text-gray-800">Weather Website </h3>
                    <Image src={weather} alt="screen capture of a weather webpage"  className=" items-center py-5 relative p-5 mt-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center mt-7 py-5 leading-6 text-gray-800">
                            Weather forecast visualization website by geolocation or by entering the location name. Calling two API. Group project. Programming in JavaScript, CSS and Html.   </p>
                            <div className="flex  justify-between gap-4"> 
                                <a
                                    className="text-center gap-2 mt-15 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-10 mx-auto"
                                    href="https://github.com/JuanitaAK/Weather-website">
                                    Repository
                                </a>
                                
                            </div>
                        </div>
                    </ul>
                </div>

                <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="font-bold text-2xl py-2 text-center text-gray-800">Meme World</h3>
                    <Image src={meme} alt="screen capture of a browser extension " className=" items-center py-5 relative p-5 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                            Back-end and Front-End microblogging platform. OOP programming, MVC pattern in Php and MySQL. Laravel framework. Use of Git, GitHub and Docker. Pair programming. </p>
                            <div className="flex justify-between gap-4 mt-5"> 
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto"
                                    href="https://github.com/adatechschool/JAS-Plateforme-de-microblogging">
                                    Repository
                                </a>
                                
                            </div>
                        </div>
                    </ul>
                </div> 

               

                <div className="p-10 shadow-xl rounded-2xl my-5 mx-5 ">
                    <h3 className="font-bold text-2xl py-2 text-center text-gray-800">One day todo.</h3>
                    <Image src={todo} alt="screen capture of a todo" className=" items-center py-5 relative p-5 mt-9 mx-auto" />
                    <ul className=" items-center grid gap-5 grid-cols-1 grid-rows-1">
                        <div className="flex-col items-center p-3">
                            <p className="text-sm text-center pb-5 leading-6 text-gray-800">
                            Online Todo list. Personal project. Programming in JavaScript and CSS with React. Creation and use of props, states and keys, to pass data from user from different components. </p>
                            <div className="flex justify-between gap-4"> 
                                <a
                                    className="text-center gap-2 m-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto"
                                    href="https://github.com/JuanitaAK/One_day_todo">
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