import * as yup from "yup";
export const RegisterFormSchemas = yup.object().shape({
   email: yup
    .string()
    .trim()
    .email("Düzgün e-poçt ünvanı daxil edin")
    .required("E-poçt ünvanı mütləqdir"),

  name: yup
    .string()
    .trim()
    .matches(
      /^[A-Za-zƏəIıİiÖöÜüĞğÇçŞş]+\s+[A-Za-zƏəIıİiÖöÜüĞğÇçŞş]+$/,
      "Ad və soyadı tam daxil edin"
    )
    .required("Ad və soyad mütləqdir"),

  password: yup
    .string()
    .min(8, "Şifrə ən azı 8 simvol olmalıdır")
    .matches(/[A-Z]/, "Ən azı 1 böyük hərf olmalıdır")
    .matches(/[a-z]/, "Ən azı 1 kiçik hərf olmalıdır")
    .matches(/[0-9]/, "Ən azı 1 rəqəm olmalıdır")
    .required("Şifrə mütləqdir"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifrələr eyni deyil")
    .required("Şifrəni təkrar daxil edin"),
});
