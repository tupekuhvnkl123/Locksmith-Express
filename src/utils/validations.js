import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = Yup.object({
  name: Yup.string()
    .required("Name required")
    .matches(/^[a-zA-Z_ ]*$/, "No special characters allowed.")
    .min(2, "Name must be between 2-16 characters.")
    .max(30, "Name must be between 2-16 characters."),
  email: Yup.string()
    .required("Email required")
    .email("Invalid email address."),
  phoneNumber: Yup.string()
    .required("Phone number required")
    .matches(phoneRegExp, "Phone number is not valid"),
  address: Yup.string()
    .required("Address required")
    .matches(/^[a-zA-Z_ ]*$/, "No special characters allowed.")
    .min(2, "Name must be between 2-60 characters.")
    .max(60, "address must be between 2-60 characters."),
  content: Yup.string()
    .required("Content required")
    .min(5, "Please write at least 5 characters.")
    .max(500, "address must be between 2-60 characters."),
});
