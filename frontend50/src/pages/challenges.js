import React from "react";
import Navbar from "./../components/Navbar";

const Challenges = () => {
  return (
    <div className="min-h-screen max-h-fit bg-white">
      <Navbar />
      <div
        style={{
          "line-height": "40px",
        }}
        className="pt-[160px] flex flex-col "
      >
        <div className="font-[700] pb-[50px] text-center mx-auto text-[40px] DMSerif">
          Common challenges front-end web developers face include:
        </div>

        <div className="max-w-[1264px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 justify-evenly">
          <div className="border-2 border-black mx-auto w-[500px] h-[200px]">
            <div className="bg-[#FAEBD7] pt-3 DMSerif text-center w-full border-b-2 border-b-black h-[60px]">
              <span className="my-auto text-[24px] font-bold DMSerif">
                Cross-browser compatibility issues
              </span>
            </div>
            <div className="h-3/5 flex">
              <div className="m-auto text-[18px] text-center">
                Different browsers can display the same web content differently.
              </div>
            </div>
          </div>

          <div className="border-2 border-black mx-auto w-[500px] h-[200px]">
            <div className="bg-[#FAEBD7] pt-3 DMSerif text-center w-full border-b-2 border-b-black h-[60px]">
              <span className="my-auto text-[24px] font-bold DMSerif">
                Cross-browser compatibility issues
              </span>
            </div>
            <div className="h-3/5 flex">
              <div className="m-auto text-[18px] text-center">
                Different browsers can display the same web content differently.
              </div>
            </div>
          </div>

          <div className="border-2 border-black mx-auto w-[500px] h-[200px]">
            <div className="bg-[#FAEBD7] pt-3 DMSerif text-center w-full border-b-2 border-b-black h-[60px]">
              <span className="my-auto text-[24px] font-bold DMSerif">
                Cross-browser compatibility issues
              </span>
            </div>
            <div className="h-3/5 flex">
              <div className="m-auto text-[18px] text-center">
                Different browsers can display the same web content differently.
              </div>
            </div>
          </div>

          <div className="border-2 border-black mx-auto w-[500px] h-[200px]">
            <div className="bg-[#FAEBD7] pt-3 DMSerif text-center w-full border-b-2 border-b-black h-[60px]">
              <span className="my-auto text-[24px] font-bold DMSerif">
                Cross-browser compatibility issues
              </span>
            </div>
            <div className="h-3/5 flex">
              <div className="m-auto text-[18px] text-center">
                Different browsers can display the same web content differently.
              </div>
            </div>
          </div>
        </div>

        <div className="my-[62px] border-2  border-black mx-auto w-[500px] h-[200px]">
          <div className="bg-[#FAEBD7] pt-3 DMSerif text-center w-full border-b-2 border-b-black h-[60px]">
            <span className="my-auto text-[24px] font-bold DMSerif">
              Cross-browser compatibility issues
            </span>
          </div>
          <div className="h-3/5 flex">
            <div className="m-auto text-[18px] text-center">
              Different browsers can display the same web content differently.
            </div>
          </div>
        </div>

        <div className="text-[20px] font-[400] h-[386px] bg-[#FAEBD7]">
          <div
            style={{
              "line-height": "40px",
            }}
            className="w-1/2 text-center m-auto mt-16"
          >
            We aim to build a platform for frontend developers where they can
            overcome these challenges and build a successful career by working
            on unique frontend challenges and real website inspirations to
            create an impressive portfolio that makes them standout and learn
            something new
          </div>
        </div>

        <div className="flex flex-col py-14">
          {/* <div className="text-[20px] w-1/2 text-center m-auto mt-16">
            We aim to build a platform for frontend developers where they can
          overcome these challenges and build a successful career by working on
          unique frontend challenges and real website inspirations to create an
          impressive portfolio that makes them standout and learn something new
          </div> */}

          <div
          className="text-[32px] w-[722px] h-[112px] font-[500] align-middle text-center mx-auto"
          style={{
            "line-height": "40px",
          }}
          >
            Matching frontend devs with portfolio inspirations and frontend
            challenges to level up in their career
          </div>

          <div
            style={{
              "line-height": "40px",
            }}
            className="text-[20px] text-left w-1/2 m-auto mt-16"
          >
            Pick something that makes you excited to code and get on with
            building it. Use whatever tools and programming languages you
            prefer. Choose whether you want it to be your portfolio or let
            companies review your code and rate your development practices by
            contributing to Project Source. <br /> <br />
            Discover what to learn, understand design, and what skills are
            essential to grow as a developer. Master the tools & methods, and
            become confident in both small & large-scale projects.
          </div>
        </div>
        <div className="mt-[100px] bg-black h-[150px]"></div>
      </div>
    </div>
  );
};

export default Challenges;
