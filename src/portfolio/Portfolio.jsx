import { React, useState } from "react";
import github from "/public/github.png"
import linkedin from "/public/linkedin.png"
import blob from "/public/blob.svg"
import blob1 from "/public/blob1.svg"
import location from "/public/location.svg"
import mail from "/public/mail.svg"

import awsIcon from '/public/skills/amazon-web-services-2.svg';
import mongoIcon from '/public/skills/mongo-icon.svg';
import nodejsIcon from '/public/skills/nodejs-icon.svg';
import reactIcon from '/public/skills/React-icon.svg';
import socketioIcon from '/public/skills/socketio-icon.svg';
import tailwindCssIcon from '/public/skills/tailwind-css-2.svg';
import tailwindcssIcon from '/public/skills/tailwindcss-icon.svg';
import githubIcon from '/public/skills/github-icon.svg';
// import BlobSvg from "./Blobsvg";

const iconPaths = [
  awsIcon,
  mongoIcon,
  nodejsIcon,
  reactIcon,
  socketioIcon,
  tailwindCssIcon,
  githubIcon,
  githubIcon,
];

// import reactImage from "/public/react.svg"

function Portfolio() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      subject: event.target.elements.subject.value,
      message: event.target.elements.message.value,
    };

    console.log(formData);

    event.target.reset()
  };
  const array = ['AWS Cloud', 'MongoDB', 'NodeJS', 'ReactJs', 'Socket.io', 'TailwindCSS', "Github",]
  const array1 = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5', 'Project6', 'Project7', 'Project8', 'Project9']
  const info = ["Location", "Ranjhi, Jabalpur, Madhya Pradesh"]
  return (
    <div className=" ">
      <div className="max-h-screen  bg-[url('/public/anime.jpg')] bg-cover w-full flex flex-col items-center bg-gray-200  py-56 font-bold overflow-y-auto ">
        <span className="text-7xl font-semibold tracking-wider">Ratnesh Bharti</span>
        <p className="text-3xl font-semibold py-6 text-blue-700">Developer</p>
        <div className="flex ">
          <a href="https://github.com/ratnesh125"><img src={github} alt="github logo" className="w=12 h-12" /></a>
          <a href="https://linkedin.com/in/ratneshbharti125"><img src={linkedin} alt="linkedin logo" className="w=12 h-12" /></a>
        </div>
      </div>
      <div>
        <div className=" pb-16 bg-gray-200  ">
          <div className="flex items-center justify-center text-4xl pt-14 pb-4 font-sans font-semibold">ABOUT</div>
          <div className="flex items-center justify-center flex-col">
            <span className="bg-slate-400 h-0.5 w-32 flex items-center justify-center">
              <h6 className="bg-blue-700 h-1 w-1/3" />
            </span>

            <h1 className="text-2xl pt-10">Hello,</h1>
            <h2 className="text-2xl">I am a Developer from India</h2>

            <p className="text-lg pt-6 px-10 text-center ">I have expertise in frontend development and have
              intermediate knowledge of backend development.I have built a strong foundation in
              creating dynamic and responsive web applications. My experience includes working
              with a wide range of technologies and frameworks such as Javascript, Typescript,
              ReactJs, NodeJS, ExpressJS and MongoDB.,</p>
          </div>
        </div>
      </div>
      <div>
        <div className=" lg:min-h-screen pb-8 ">
          <div className="flex items-center justify-center text-4xl pt-14 pb-4 font-sans font-semibold">SKILLS</div>
          <div className="flex items-center justify-center flex-col ">
            <span className="bg-slate-400 h-0.5 w-32 flex items-center justify-center">
              <h6 className="bg-blue-700 h-1 w-1/3" />
            </span>

            <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 p-10 lg:grid-cols-4">

              {
                array.map((element, index) => (

                  <div key={index} className="flex flex-col justify-center items-center bg-slate-50 h-72 bg-no-repeat bg-cover hover:shadow-2xl hover:skew-y-1 rounded-sm hover:bg-[url('/public/blob1.svg')] bg-[url('/public/blob.svg')]  ">
                    <img src={iconPaths[index]} width="50px" height="50px" />
                    <p>{element}</p>

                  </div>

                ))
              }
            </div>

          </div>
        </div>
      </div>
      <div>
        <div className=" lg:min-h-screen  ">
          <div className="flex items-center justify-center text-4xl pt-14 pb-4 font-sans font-semibold">PROJECT</div>
          <div className="flex items-center justify-center flex-col ">
            <span className="bg-slate-400 h-0.5 w-32 flex items-center justify-center">
              <h6 className="bg-blue-700 h-1 w-1/3" />
            </span>

            <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 p-10 lg:grid-cols-3">
              {
                array1.map((element) => (
                  <div className="bg-slate-50 h-72 bg-no-repeat  hover:shadow-2xl hover:skew-y-1 rounded-sm ">
                    {element}

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-h-screen sm:min-h-screen">
          <div className="flex items-center justify-center text-4xl pt-14 pb-4 font-sans font-semibold">CONTACT</div>
          <div className="flex items-center justify-center flex-col">
            <span className="bg-slate-400 h-0.5 w-32 flex items-center justify-center">
              <h6 className="bg-blue-700 h-1 w-1/3" />
            </span>

            <div className="w-full flex mt-8 flex-col lg:flex-row justify-center items-center">
              <div className="w-1/3  flex flex-col items-center justify-center">
                <div className="">
                  <div className="flex  px-10 py-4">
                    <div className="h-12 w-12 bg-gray-100 hover:bg-yellow-300 rounded-full mr-4  bg-[url('/public/location.svg')] bg-no-repeat bg-cover ">
                      {/* <img src={github} className="h-16 w-16" /> */}
                    </div>
                    <div className="">
                      <div>
                        Location:
                      </div>
                      <div>
                        Dewas, Madhya Pradesh
                      </div>
                    </div>
                  </div>
                  <div className="flex px-10 py-4">
                    <div className="h-10 w-10 bg-gray-100 hover:bg-blue-300  rounded-full mr-4 bg-[url('/public/mail.svg')] bg-no-repeat bg-cover">
                      {/* <img src={github} className="h-16 w-16" /> */}
                    </div>
                    <div className="">
                      <div>
                        Email:
                      </div>
                      <div >
                        ratneshbharti125@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/3">
                <form className="w-full sm:w-[90%] sm:m-16" onSubmit={handleSubmit}>
                  <div className="flex justify-between py-4 w-[90%]">
                    <input type="text" name="name" placeholder="Your Name" className="w-[49%] h-10 border-2 rounded-md px-4" />
                    <input type="email" name="email" placeholder="Your Email" className="w-[49%] h-10 border-2 rounded-md px-4" />
                  </div>
                  <input type="text" name="subject" placeholder="Subject" className="w-[90%] h-10 border-2 rounded-md px-4" />
                  <textarea name="message" placeholder="Message" className="border-2 w-[90%] my-4 h-32 rounded-md px-4 py-2"></textarea>
                  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:shadow-2xl hover:bg-blue-800">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
}

export default Portfolio;



{/* <div className="w-1/12 bg-gray-200 flex items-center flex-col justify-evenly fixed h-screen">
  <div className="h-4/5 flex flex-col justify-evenly">
    <div className="rounded-full bg-white h-16 w-16 flex items-center justify-center">
      <div className=" text-xl">Home</div>
    </div>
  </div>
</div >  */}