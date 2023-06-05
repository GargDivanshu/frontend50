import React from "react";
import Navbar from "./../components/Navbar";
import Landing from "./../components/Landing";
import About from "./../components/About";
import Footer from "./../components/Footer";
import Challenges from "./../components/Challenges";
import Benefit from "./../components/Benefit";
import GetStarted from "./../components/GetStarted";

const Offer = () => {
  return (
    <div className=" min-h-screen max-h-fit bg-[#FAEBD7]">
      <Navbar />

      <div className="border-b-[2px] pt-[100px] border-black max-w-screen mx-auto flex flex-col sm:flex-row justify-center">
        <div className="mx-auto my-[60px] max-w-fit">
          <h1 className="text-[33px] sm:text-[55px] DMSerif font-bold leading-[55px] sm:leading-[48px] max-w-[711px] w-[711px] text-justify">
            Become a Pro Developer with Fe50 pro subscription
          </h1>

          <p className="my-[30px] text-[23px] font-[400] max-w-[612px] mx-auto w-[612px] text-center">
            With a pro subscription, you can get exclusive access to unique
            frontend challenges upon completion of which you can earn crypto
            rewards, discover internship opportunities and more..
          </p>
        </div>
      </div>

      {/*about */}
      <div className="p-[40px] bg-white border-b-[2px] border-black">
        <h1 className="DMSerif text-[36px] font-bold max-w-[649px] mx-auto justify-center text-center leading-[35px]">
          Say goodbye to capstone projects..
        </h1>

        <p 
        style={{
          "line-height": "22px"
        }}
        className="text-center text-[20px] w-[658px] max-w-[618px] my-[40px] mx-auto">
          “One of the best advantages pro subscription has to offer you is the code review upon
completing the challenge and it helped me gain insights on better frontend practices“
        </p>

        <div className="flex flex-col w-fit mx-auto">
            <div className="text-[42px] text-center rounded-full bg-[#FAEBD7] w-12 h-12 m-auto DMSerif text-black/20">
                S
            </div>

            <span className="text-[22px] text-center">Surya</span>
            <span className="text-[16px]">Student from JNTUH</span>
        </div>
      </div>

      <Challenges />

      <Benefit />

      <GetStarted />
      <Footer />
    </div>
  );
};

export default Offer;
