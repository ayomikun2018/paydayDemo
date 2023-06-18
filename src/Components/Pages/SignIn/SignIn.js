// import { orange } from '@mui/material/colors';
import React from "react";
import Slider from "../../feature/Slider";
import { Form, Formik } from "formik";
import CustomInput from "../../feature/CustomInput";
import { signInSchema } from "../../assets/schemas";
import { useState } from "react";
import { Carousel } from "react-carousel-slider-component";
import user1 from "../../assets/image 2 (1).png";
import user2 from "../../assets/image 1.png";
import user3 from "../../assets/landingPage/image 1.svg";
import Line1 from "../../assets/Line 2.png";
import Line2 from "../../assets/Line 3.png";
import GoogleIcon from "../../assets/google-color.svg"
import { useNavigate } from "react-router";



export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // to clear the form once submitted
    actions.resetForm();
    console.log(values)
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="flex lg:h-[100%] " >
        <div className=" bg-[#F2F5FA] hidden lg:block lg:w-[50%] ">
          <nav className=" font-[600px] text-[24px] mx-auto p-6  ">
            <span className=" text-orange">Salary</span>
            <span className=" text-blue"> PayDay</span>{" "}
          </nav>
          <Carousel
            totalSlides={3}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplayDuration={2}
            infinite={true}
            arrowStatus={false}
            indicators={true}

          >
            <div className=" ">
              <img
                src={user3}
                alt=""
                className="mt-[20px]   "
              ></img>
              <h2 className="mt-[20px] font-[600px] text-[32px]  text-center  ">
                Early Prequalification <br /> and limitless Access
              </h2>
              <h2 className="mt-[2px] text-ash text-center ">
                Get Prequalified Early and have unlimited <br />
                access to your earned pay.
              </h2>
            </div>
            <div>
              <img src={user2} alt="" className="mt-[20px]  "></img>
              <h2 className="mt-[20px] font-[600px] text-[32px]  text-center ">
                Simple and Easy
              </h2>
              <h2 className="mt-[2px] text-ash text-center ">
                After All, It's Your Pay.
                <br />
                With SalaryPayDay, you can access up to 50% of your
                <br />
                earned pay before payday.
              </h2>
            </div>
            <div>
              <img src={user1} alt=" " className="mt-[20px]  "></img>
              <h2 className="mt-[20px] font-[600px] text-[32px]  text-center ">
                Visibility & Transparency
              </h2>
              <h2 className="mt-[2px] text-ash text-center ">
                Check how much you have available anytime,
                <br />
                anywhere.
              </h2>
            </div>
          </Carousel>
        </div>
        <div className="lg:p-[150px] lg:w-[50%] mt-[100px] lg:mt-[0px] ">
          <p className="text-ash "> Sign in to continue</p>
          <h1 className=" text-blue font-[600px] text-[32px] mx-auto  mt-[16px]"> Get back in</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInSchema}
            onSubmit={onSubmit}
            className=" "
          >
            {({ isSubmitting }) => (
              <Form>
                <CustomInput
                  label=""
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  
                />
                <br/>
                <CustomInput
                  label=""
                  name="password"
                  type= "password"
                  placeholder="Password"

                />
                <br/>
                {/* {
                  (isPasswordVisible === false) ?  <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility}/> :
                  <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} /> 
                } */}
              
                <button disabled={isSubmitting} type="submit" className="border-solid bg-orange border-slate-100  h-[56px] w-[364px] mt-[16px] p-[20px] text-white">
                  Continue
                </button>
              </Form>
            )}
          </Formik>
          <p className="underline underline-offset-1 mt-[10px] font-[600px] text-[14px]">Forgot Password?</p>
          <div className="flex mt-[30px]">
          <img
              src={Line1}
              alt="img"
              className=" h-[1px] mt-[10px]"
            />
           
          <p className=" flex"> or</p>
          
          <img
              src={Line2}
              alt="img"
              className=" h-[1px] mt-[10px] "
            />
          </div>
          <button  type="submit" className=" flex items-center justify-center py-[11px] border-solid bg-[#F4F4F4] border-slate-100  h-[56px] w-[364px]  mt-[23px] " onClick={()=> navigate("/")}>
                  <img  src={GoogleIcon}
                  alt="img" className=" mr-[15px] "/>Continue with Google
                </button>
      
          <p className="font-[700px] text-[14px] mt-[20px]">
            Don't have an account? <button className="text-orange underline underline-offset-1" onClick={()=> navigate("/signUp")}>Create Account</button>
          </p>
        </div>
      </div>
    </>
  );
}
// border-solid border-2 border-sky-500
//email
//password
//firstname
//lastname
//phone number
