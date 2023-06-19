import React from "react";
// import Slider from "../feature/Slider";
import { Form, Formik } from "formik";
import CustomInput from "../feature/CustomInput";
import { signInSchema } from "../assets/schemas";
import { useState } from "react";
import Slider from "../feature/Slider";
import Line1 from "../assets/Line 2.png";
import Line2 from "../assets/Line 3.png";
import GoogleIcon from "../assets/google-color.svg";
import { useNavigate } from "react-router";

export default function SignIn() {
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // function togglePasswordVisibility() {
  //   setIsPasswordVisible((prevState) => !prevState);
  // }
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // to clear the form once submitted
    actions.resetForm();
    console.log(values);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="flex lg:h-[100%] ">
        <Slider />

        <div className="lg:p-[150px] lg:w-[50%] mt-[100px] lg:mt-[0px] ">
          <p className="text-ash "> Sign in to continue</p>
          <h1 className=" text-blue font-[600px] text-[32px] mx-auto  mt-[16px]">
            {" "}
            Get back in
          </h1>
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
                <br />
                <CustomInput
                  label=""
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <br />

                {/* {
                  (isPasswordVisible === false) ?  <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility}/> :
                  <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} /> 
                } */}

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="border-solid bg-orange border-slate-100  h-[56px] w-[364px] mt-[16px] p-[20px] text-white"
                >
                  Continue
                </button>
              </Form>
            )}
          </Formik>
          <p className="underline underline-offset-1 mt-[10px] font-[600px] text-[14px]">
            Forgot Password?
          </p>
          <div className="flex mt-[30px] gap-2">
            <img src={Line1} alt="img" className=" h-[1px] mt-[10px]" />

            <p className=" flex"> or</p>

            <img src={Line2} alt="img" className=" h-[1px] mt-[10px] " />
          </div>
          <button
            type="submit"
            className=" flex items-center justify-center py-[11px] border-solid bg-[#F4F4F4] border-slate-100  h-[56px] w-[364px]  mt-[23px] "
            onClick={() => navigate("/")}
          >
            <img src={GoogleIcon} alt="img" className=" mr-[15px] " />
            Continue with Google
          </button>

          <p className="font-[700px] text-[14px] mt-[20px]">
            Don't have an account?{" "}
            <button
              className="text-orange underline underline-offset-1"
              onClick={() => navigate("/signUp")}
            >
              Create Account
            </button>
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
