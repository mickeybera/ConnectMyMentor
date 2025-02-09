import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
const Home = () => {
  return (
    <>
      <div className="bg-[url('./assets/wave-design.svg')] h-screen bg-cover bg-center bg-no-repeat">
        <Navbar onHome={true}/>
        <div className="items-center justify-center flex flex-col mt-36">
          <h1 className="font-bold text-2xl text-violet-500">
            <div className="mt-2 tracking-wider">
              Bridge the Gap with Alumni Mentors!
            </div>
            <div className="text-5xl">Connect, Learn, Grow </div>{" "}
          </h1>

          <div className="mt-6 flex">
            <button className="px-1 py-2  border border-violet-600 hover:rounded-md duration-300 cursor-pointer">
              Get Started
            </button>
            {/* <button className="ml-2 px-1 py-2 text-white bg-violet-600 hover:bg-violet-500 hover:rounded-md">
              Join as Alumni
            </button> */}
            <div>
              <button className="ml-2 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[#394481]  font-medium hover:cursor-pointer">
                <div className="inline-flex h-12 translate-y-0 items-center justify-center px-4  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] dark:text-white text-black transition duration-500 group-hover:-translate-y-[150%]">
                  Join as alumni
                </div>

                <div className="ml-2 absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                  <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#394481] dark:bg-[#656fe2] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>

                  <span className="z-10">Join as alumni</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen"
        style={{ backgroundColor: "var(--color-softBlue)" }}
      >
        <About />
      </div>
    </>
  );
};

export default Home;
