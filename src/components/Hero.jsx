import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TbHexagon3D } from "react-icons/tb";
import { DiIllustrator } from "react-icons/di";
import { RiSeoLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Button from "./ui/Button";
import { useState } from "react";

const Hero = () => {
  const words = ["Full Stack Devloper","Proffesional Coder"];
  return(
    <section name="hero">
      <div className=" h-full">
        <div className="flex justify-center">
        <div className="w-[400px] h-[245px] mt-20 bg-[#212428] md:hidden shadow-black shadow-lg rounded-xl border border-cyan-600">
          <img className="md:hidden -mt-14 h-[300px] rounded-lg w-full " src="TX.png" />
          </div>
        </div>
        <div className="w-full h-[400px] bg-[#212428] md:h-[680px] bg-cover z-40 flex justify-between ">
           
          <Container className="md:py-20 py-10 m-10 md:ml-20 ">
            <div className="md:w-1/2 flex flex-col gap-y-5 w-full">
              <p className="md:text-base md:text-start uppercase -mt-2 text-lightText pl-5 md:pl-0">
                Full Stack Devloper
              </p>
              <h2 className="md:text-7xl text-5xl pl-5 md:pl-0 font-bold text-white flex">
                Hi,I’m <span className="text-designColor ml-2">Tazim</span>
              </h2>
              <h2 className="md:text-4xl text-3xl font-bold text-white pl-5 md:pl-0">
                a{" "}
                <Typewriter
                  words={words}
                  loop={100}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </h2>
              <p className=" text-lightText md:pr-16 font-medium pl-5 md:pl-0">
              I am full stack developer with 1+ years of expreience in web development. I completed many project in my previous. 
              </p>
              <div className="w-full flex justify-center items-center md:justify-start">
                <Button>
                <title>Hire Me</title>
              </Button>
              </div>
            </div>
          </Container>
          <div className="md:inline-flex hidden h-[400px] w-[1000px] mt-40 mr-32 bg-[#212428] shadow-black shadow-lg rounded-xl border border-cyan-600">
              <img className="hidden md:inline-flex w-[2000px] h-[550px] -mt-[150px] rounded-lg " src="TX.png"/>
            </div>
        </div>
  
       <section class="services">
       <div className=" p-6 bg-primaryColor">
          <div className="text-center">
            <p className="text-designColor">SERVICES</p>
            <h1 className="text-lightText md:text-6xl text-4xl font-bold">
              What I Do
            </h1>
          </div>
  
          <div className="mt-6">
            <div className="md:flex gap-20">
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <CgWebsite className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Web Devloper
                </h1>
                <p className="text-lightText mt-5">
                html5, css3, tailwind css, react+vite js,<br/> next js, node js, express js, mongodb etc


                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <RiSeoLine className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  SEO Optimisation
                </h1>
                <p className="text-lightText mt-5">
                  {" "}
                  Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!


                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <MdOutlineBusinessCenter className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                Business Stratagy
                </h1>
                <p className="text-lightText mt-5">
                  {" "}
                  For bussiness groth I created some content management system (CMS) software


                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-6">
            <div className="md:flex gap-20 mt-6">
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg drop-shadow-md shadow-black rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <DiIllustrator className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Adobe Illustrator
                </h1>
                <p className="text-lightText mt-5">
                  {" "}
                  Fluent at edditing photo with adobe Illustrator 
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <TbHexagon3D className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  UI/UX
                </h1>
                <p className="text-lightText mt-5">
                  {" "}
                  For desining a app or website UI I use figma .
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <FaMobileAlt className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                Mobile App
                </h1>
                <p className="text-lightText mt-5">
                  {" "}
                  Using our expertise in mobile application development to create beautiful pixel-perfect designs.
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500 hover:translate-x-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>

       <div className="md:flex p-6 bg-primaryColor my-24">
          <div className="p-5 bg-transparent shadow-xl drop-shadow-md shadow-black rounded-md ml-4">
            <div className="md:h-[300px] h-[450px] overflow-hidden rounded-lg">
              <img
                src="TX.png"
                alt="banner2"
                className="h-[350px] rounded-lg md:w-96 bg-black hover:scale-110 duration-500"
              />
            </div>
          </div>
          <div name="about" className="pt-5 pl-10 md:pl-20">
            <p className="text-designColor">ABOUT ME</p>
            <h1 className=" text-blue-200 text-6xl font-bold">Farhat Hossain Tazim</h1>
            <p className="text-lightText mt-5 font-bold">
              I'm Farhat Hossain Tazim.I'm a student of class XI.<br/>I have 1 year of web devlopment experience and still<br/> working to polish my skills and
              trying to keep myself up to date in it.
            </p>
  
            <button className="bg-primaryColor font-bold p-4 text-designColor mt-10 shadow-xl drop-shadow-md rounded-md hover:bg-slate-900">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
