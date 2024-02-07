import * as Yup from "yup";

const CheckOutschama = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "name should be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Email should be a valid email Adress"),
    phone: Yup.string()
    .required("phone number is required"),
    // .min(11, "phone number should be a 11 characters ")
    // .max(10, "phone number should be a 11 characters"),
    adress: Yup.string()
    .required("adress is required"),
    
});
export default CheckOutschama;