import * as yup from "yup";

export const schema = yup.object().shape({
  nombre: yup.string().required(),
  email: yup.string().email().required()
});
