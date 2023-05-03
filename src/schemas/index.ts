import * as yup from "yup";

export const employeeFormSchema = yup.object().shape({
  firstName: yup.string().required("Το πεδίο είναι υποχρεωτικό"),
  lastName: yup.string().required("Το πεδίο είναι υποχρεωτικό"),
  nickName: yup.string(),
  position: yup.string(),
  startDate: yup.string().required(),
  endDate: yup.string().required(),
  salary: yup.string(),
  description: yup.string(),
  amka: yup
    .number("Το ΑΜΚΑ  πρέπει να είναι νούμερο")
    .positive("Το ΑΜΚΑ  πρέπει να είναι θετικό νούμερο")
    .typeError("Το ΑΜΚΑ  πρέπει να είναι νούμερο"),
  afm: yup
    .number("Το ΑΦΜ  πρέπει να είναι νούμερο")
    .positive("Το ΑΦΜ  πρέπει να είναι θετικό νούμερο")
    .typeError("Το ΑΦΜ  πρέπει να είναι νούμερο"),

  phone: yup
    .number("Το τηλέφωνο  πρέπει να είναι νούμερο")
    .positive()
    .required("Το πεδίο είναι υποχρεωτικό")
    .typeError("Το τηλέφωνο  πρέπει να είναι νούμερο")
    .test(
      "len",
      "Το τηλέφωνο πρέπει να αποτελείται από 10 αριθμούς",
      (val) => val && val.toString().length === 10
    ),
  email: yup
    .string()
    .email("Η διεύθυνση email δεν είναι έγκυρη")
    .typeError("Η διεύθυνση email δεν είναι έγκυρη"),
});

export const customerFormSchema = yup.object().shape({
  firstName: yup.string().required("Το πεδίο είναι υποχρεωτικό"),
  lastName: yup.string().required("Το πεδίο είναι υποχρεωτικό"),
  address: yup.string(),
  phone: yup
    .number("Το τηλέφωνο  πρέπει να είναι νούμερο")
    .positive()
    .required("Το πεδίο είναι υποχρεωτικό")
    .typeError("Το τηλέφωνο  πρέπει να είναι νούμερο")
    .test(
      "len",
      "Το τηλέφωνο πρέπει να αποτελείται από 10 αριθμούς",
      (val) => val && val.toString().length === 10
    ),
  email: yup
    .string()
    .email("Η διεύθυνση email δεν είναι έγκυρη")
    .typeError("Η διεύθυνση email δεν είναι έγκυρη")
    .required("Το πεδίο είναι υποχρεωτικό"),
});

export const signUpSchema = yup.object().shape({
  firstName: yup.string().required("Το πεδίο είναι υποχρεωτικό"),
  lastName: yup.string().required("Το πεδίο είναι υποχρεωτικό"),
  phone: yup
    .number("Το τηλέφωνο  πρέπει να είναι νούμερο")
    .positive()
    .required("Το πεδίο είναι υποχρεωτικό")
    .typeError("Το τηλέφωνο  πρέπει να είναι νούμερο")
    .test(
      "len",
      "Το τηλέφωνο πρέπει να αποτελείται από 10 αριθμούς",
      (val) => val && val.toString().length === 10
    ),
  email: yup
    .string()
    .email("Η διεύθυνση email δεν είναι έγκυρη")
    .typeError("Η διεύθυνση email δεν είναι έγκυρη")
    .required("Το πεδίο είναι υποχρεωτικό"),
  password: yup
    .string()
    .min(5, "Η κωδικός πρέπει να είναι τουλάχιστον 5 χαρακτήρες")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
      "Ο κωδικός πρέπει να αποτελείται τουλάχιστον από 1 κεφαλαίο γράμμα, 1 πεζό γράμμα και 1 αριθμό"
    )
    .required("Το πεδίο είναι υποχρεωτικό"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Η διεύθυνση email δεν είναι έγκυρη")
    .typeError("Η διεύθυνση email δεν είναι έγκυρη")
    .required("Το πεδίο είναι υποχρεωτικό"),
  password: yup.string().required("Το πεδίο είναι υποχρεωτικό"),
});
