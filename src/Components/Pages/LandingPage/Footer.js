import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/landingPage/Vector (3).svg'
import img2 from '../../assets/landingPage/Vector (4).svg'
import img3 from '../../assets/landingPage/Vector (5).svg'
export default function Footer() {
  return (
    <>
      <div className=" hidden lg:block bg-[black]  h-[478px]">
        <section className="  mt-[110px] relative container mx-auto p-6 ">
          <h1 className="text-base font-semibold lg:font-bold lg:text-3xl mt-[52px]">
            <span className=" text-orange">Salary</span>
            <span className=" text-white"> PayDay</span>{" "}
          </h1>
          <div className="flex flex-row gap-[100px] ml-[450px]">
            <ul className="   text-white">
              <Link>
                <li className="mt-[5px]  hover:text-orange">Solution</li>
              </Link>
              <Link>
                <li className="mt-[20px] hover:text-orange">Solution</li>
              </Link>
              <Link>
                <li className="mt-[20px] hover:text-orange">About Us</li>
              </Link>
              <Link>
                <li className="mt-[20px] hover:text-orange">Contact Us</li>
              </Link>
            </ul>
            <ul className="   text-white">
              <Link>
                <li className="mt-[5px]  hover:text-orange">Solution</li>
              </Link>
              <Link>
                <li className="mt-[20px] hover:text-orange">Solution</li>
              </Link>
              <Link>
                <li className="mt-[20px] hover:text-orange">About Us</li>
              </Link>
              <Link>
                <li className="mt-[20px] hover:text-orange">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="border-b-2 border-[white] mt-[119px]"></div>
          <div className="flex flex-row  items-center justify-between" >
            <div>
            <p className="text-[white] mt-[23px]">
              Copyright © 2022 EmployerPay. All Rights Reserved.
            </p>
            </div>
            <div className="flex flex-row gap-[20px]">
            <img src={img1} alt="img2" className=" " />
            <img src={img2} alt="im3" className=" " />
            <img src={img3} alt="img" className=" " />
            </div>
           
            
          </div>
        </section>
      </div>
    </>
  );
}
