import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRules = /^\+?[1-9][0-9]{7,14}$/;
export const signInSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  // age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});
export const signUpSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstName: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Username must be at least 3 characters long")
    .required("Required"),
  phoneNumber: yup
    .string()
    .min(8)
    .matches(phoneRules, { message: "Please enter a correct phone number" })
    .required("Required"),
});
