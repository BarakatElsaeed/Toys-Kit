import * as Yup from "yup";

const Loginschama = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email should be a valid email Adress"),
  password: Yup.string()
    .required("Password is required")
   

});
export default Loginschama;
