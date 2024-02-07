import * as Yup from "yup";

const registerschama = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "name should be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Email should be a valid email Adress"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters ")
    .max(30, "Password should be at most 6 characters"),
  confirmpassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref(" password")], "Passwords do not match !"),
});
export default registerschama;
