import React from "react";
import Nav from "./Nav";
import Early from "../../assets/landingPage/Limiteless Access.svg";
import Simple from "../../assets/landingPage/Simple and Easy.svg";
import Visibility from "../../assets/landingPage/Visibility.svg";
import img3 from "../../assets/landingPage/174 1.svg";
import img4 from "../../assets/landingPage/isolated-cartoon-clipboard-red-checkmark-3d-rendering 1 (2).svg";
import img5 from "../../assets/landingPage/image 1.svg";
import img6 from "../../assets/landingPage/Frame 56210.svg";
import img7 from "../../assets/landingPage/Frame 56210 (1).svg";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Footer from "./Footer";
import img1 from "../../assets/landingPage/Frame 2.svg";
import img2 from "../../assets/landingPage/Frame 2 (1).svg";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
export default function LandingPage() {
  return (
    <>
      <Nav />
      <section className=" text-center   ">
        <div className="mt-[100px] lg:mt-[100px] px-[10px] ">
          <h2 className=" text-blue font-medium text-5xl w-[384px] mx-auto ">
            Access Your Pay
          </h2>
          <h2 className=" text-orange font-medium text-5xl  w-[384px] mx-auto mt-[8px]">
            Before PayDay
          </h2>
          <p className="text-ash font-normal  mx-auto text-base w-[384px] lg:w-[681px] mt-[18px]">
            Unlock a portion of your earned pay to make life a little easier. We
            empower you to access your advance salary up to 70% of what you’ve
            earned every pay cycle.
          </p>
        </div>
        <div className="mt-[18px] flex flex-row gap-[24px] justify-center items-center ">
          <button className=" md:block p-3 px-6 pt-2 w-36 text-white bg-orange rounded-full baseline hover:bg-blue space-x-6">
            Get Started
          </button>
          <button className=" md:block p-3 pt-2 w-40 text-white bg-blue rounded-full baseline hover:bg-orange space-x-6">
            <VideocamRoundedIcon />
            Learn More
          </button>
        </div>

        <img src={img1} alt="img" className="hidden lg:block " />
        <img src={img2} alt="img" className=" lg:hidden" />
      </section>
      <div className=" mt-[110px] relative container mx-auto p-6  ">
        <div className="">
          <h2 className="text-blue font-medium text-5xl w-[336px] mx-auto">
            What we offer
          </h2>
          <p className=" lg:w-[578px] lg:text-[16px] font-[400px] text-[12px] text-center text-ash w-[336px] mx-auto  mt-[16px]">
            SalaryPayDay is able to take away the pain of waiting for payday by
            giving you a new financial breathing space and less financial stress
          </p>
        </div>

        <div className="lg:flex flex-row lg:mx-[40px] lg:mt-[60px] lg:w-[1150px] lg:justify-between">
          <img src={Early} alt="img" className="mt-[24px] " />
          <img src={Simple} alt="img" className="mt-[24px] " />
          <img src={Visibility} alt="img" className=" mt-[24px]" />
        </div>
      </div>
      <div className=" mt-[110px] relative container mx-auto p-6  ">
        <div className="">
          <h2 className="text-blue font-medium text-5xl w-[336px] mx-auto">
            How it Works?
          </h2>
          <p className=" lg:w-[441px] lg:text-[16px] font-[400px] text-[16px] text-center text-ash w-[336px] mx-auto  mt-[16px]">
            You can now take control of your finances even before your payday
            with our three simplify process
          </p>
        </div>
        <section className="mt-[100px]">
          <button className=" md:block p-3 px-6 pt-2 w-36 mx-auto text-blue bg-lightGrey cursor-none items-center rounded-full baseline">
            Step 1
          </button>
          <div className="lg:flex flex-row  lg:px-[40px] ">
            <div className="    lg:w-[580px] lg:border-r-2 border-[#A7BBDC] lg:pt-[50px]">
              <h3 className="text-blue lg: lg:font-[300px] lg:text-[48px] font-[600px] text-[32px] w-[370px] mx-auto mt-[21px]">
                Sign Up On Salary PayDay
              </h3>
              <p className=" lg:w-[380px] lg:text-[17px] font-[400px] text-[16px]  text-ash w-[370px] mx-auto  mt-[16px]">
                You'll need to complete a simple online registration with your
                bio-data and employer details.
              </p>
            </div>
            {/* <div className=" lg:ml-[130px] bg-blueLine"></div> */}
            <div className="lg:w-[580px] lg:mx-auto">
              <img src={img3} alt="img" className=" " />
            </div>
          </div>
        </section>
        <section>
          <button className=" md:block p-3 px-6 pt-2 w-36 mx-auto text-[#FC8900] bg-[#FFFAF5] cursor-none items-center rounded-full baseline">
            Step 2
          </button>
          <div className="lg:flex  lg:px-[40px] ">
            <div className="">
              <img
                src={img4}
                alt="img"
                className=" hidden lg:w-[570px] lg:border-r-2 border-[#A7BBDC] lg:p-[30px]  "
              />
            </div>
            <div className=" lg:mt-[40px]  order-1 lg:p-[50px]">
              <h3 className="text-blue mt-[40px] lg:font-[300px] lg:text-[48px] font-[600px] text-[32px] w-[370px] mx-auto ">
                Check your eligibility
              </h3>
              <p className=" lg:w-[380px] lg:text-[17px] lg: text font-[400px] text-[16px]  text-ash w-[370px] mx-auto  mt-[16px] ">
                Using your salary account financial statement, we prequalify you
                for 50% if your monthly salary
              </p>
            </div>
            <img
              src={img4}
              alt="img"
              className="lg:w-[580px] lg:border-r-2 border-[#A7BBDC] lg:p-[30px] "
            />
          </div>
        </section>
        <section>
          <button className=" lg:mt-[0px] mt-[20px] md:block p-3 px-6 pt-2 w-36 mx-auto text-blue bg-lightGrey cursor-none items-center rounded-full baseline ">
            Step 3
          </button>
          <div className="lg:flex flex-row  lg:px-[40px] ">
            <div className=" lg:h-[600px] lg:pt-[40px]   lg:w-[580px] lg:border-r-2 border-[#A7BBDC]">
              <h3 className="text-blue lg: lg:font-[300px] lg:text-[48px] font-[600px] text-[32px] w-[388px] mx-auto mt-[21px]">
                Access up to 50% of your Pay
              </h3>
              <p className=" lg:w-[380px] lg:text-[17px] font-[400px] text-[16px]  text-ash w-[370px] mx-auto  mt-[16px]">
                Get paid when you need it, not just when it's payday. You can
                access up to 50% of what you've earned, up to 3 times every pay
                cycle.
              </p>
            </div>
            {/* <div className=" lg:ml-[130px] bg-blueLine"></div> */}
            <div className="lg:w-[480px] lg:mx-auto w-[340px] mt-[50px]">
              <img src={img5} alt="img" className=" " />
            </div>
          </div>
          <div className="hidden lg:block lg:w-[50px] lg:mx-auto">
            <div className=" lg:bg-[#C5FFCA] bg lg:rounded-full lg:w-[60px] lg:h-[60px]">
              <CheckRoundedIcon className="  lg:text-[#2FBA3B] lg:items-center  lg:justify-center lg:m-[15px] "></CheckRoundedIcon>
            </div>
          </div>
        </section>
        <img
          src={img6}
          alt="img"
          className=" hidden lg:block mt-[80px] ml-[30px] "
        />
        <img src={img7} alt="img" className="lg:hidden mt-[80px] " />

        <section></section>
      </div>
      <Footer />
    </>
  );
}
//sm:text-base font-semibold
//border-solid border-2 border-sky-500
// font 400 size 14px =font-normal text-sm"
