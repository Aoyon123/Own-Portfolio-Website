import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <div className="h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center">
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
      </div>
    </Layout>
  );
}

export default Home;
