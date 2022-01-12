import React from "react";
import Layout from "../components/Layout";
//import coursesData from "../resources/courses";
import AOS from "aos";
AOS.init({
  duration: 1000,
});
function Courses() {
  return (
    <Layout>
      <div className="mt-60">
        <div className="h-screen">
          <div className="font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
            <h1 className="text-4xl md:text-3xl">Here Is My CV</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
