import React from "react";
import Layout from "../components/Layout";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
//import { SiCsharp } from "react-icons";

function Home() {
  return (
    <Layout>
      <div>
        <div className="h-screen bg-theme">
          <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 mx-12 z-10 bg-theme
          
          border-white transform rotate-12 md:rotate-0"
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_47dwpmff.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl md:text-4xl">
                Hi, I am<b className="text-yellow-500"> FAHAMIDUL</b>
              </h1>
              <h1 className="text-4xl md:text-xl">
                <b className="text-red-500">Software</b> Engineer
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies*/}

        <div className="mt-20">
          <h1 className="text-4xl text-blue-800 font-bold text-center my-10">
            Technologies I USE
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20"
            />
            <FaVuejs
              size={180}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={180}
              color="yellow"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaNodeJs
              size={180}
              color="green"
              className="w-full text-center mt-20"
            />
            <FaPython
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaBootstrap
              size={180}
              color="purple"
              className="w-full text-center mt-20"
            />
            <FaHtml5
              size={180}
              color="orange"
              className="w-full text-center mt-20"
            />
            <FaCss3
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>

        {/* Javascript Buffs*/}

        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">
              Yes You Are Right... I Am A Javascript Buff
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-2xl my-5 font-semibold md:px-5 px-14 py-10">
              I'm a dedicated and hardworking undergraduate computer science
              engineer with good leadership abilities and a solid cross-platform
              coding foundation
            </p>
          </div>
        </div>

        {/* Devstack Section */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-500">
            <h1 className="text-white font-bold text-4xl py-10">
              My Dev Stack
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_qhrndegx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold">Front End</h1>
                <hr />
                <p className="font-semibold mt-2">HTML / CSS</p>
                <p className="font-semibold mt-2">JavaScript</p>
                <p className="font-semibold mt-2">React</p>
                <p className="font-semibold mt-2">Redux</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">UI/UX</h1>
                <hr />
                <p className="font-semibold mt-2">Bootstrap</p>
                <p className="font-semibold mt-2">Tailwind Css</p>
              </div>

              <div className="text-right">
                <h1 className="text-xl font-bold">BackEnd and DB</h1>
                <hr />
                <p className="font-semibold mt-2">Node JS</p>
                <p className="font-semibold mt-2">Express JS</p>
                <p className="font-semibold mt-2">MySql</p>
                <p className="font-semibold mt-2">MongoDB</p>
                <p className="font-semibold mt-2">Python</p>
                <p className="font-semibold mt-2">Php</p>
              </div>
            </div>
          </div>
        </div>

        {/*MY INFO*/}
        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">
            {" "}
            Who Is Fahamidul ?
          </h1>
          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_ivbxluat.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex items-center flex-col justify-center  ">
              <h1 className="text-2xl font-bold">
                Hello...
                <pre className="text-xl md:text-sm my-5 font-mont font-semibold">
                  {JSON.stringify(
                    {
                      Name: "Fahamidul Haque",
                      Birth_Date: "30 June 1998",
                      Email: "fahamidulaoyon@gmail.com",
                      Phone: "+8801798445611",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
