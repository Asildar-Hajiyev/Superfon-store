import { Link, useNavigate } from "react-router-dom";
import LoginRegisterLeft from "../components/LoginRegisterLeft";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/Firebase";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const provider = new GoogleAuthProvider()

function Register() {

  const   navigate = useNavigate()
 async function googleWithLogin(){
    try {
    const response = await signInWithPopup(auth,provider)
    toast.success("Ugurla qeydiyyat tamamlandi")
    const user = response.user
    if(user){
      navigate("/profil")
    }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterFormSchemas,
    onSubmit: register,
  });

  async function register(values) {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      const user = response.user;
      if (user) {
        toast.success("Qeydiyyat tamamlandi");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error(
          "Bu email artıq qeydiyyatdan keçib. Zəhmət olmasa daxil olun.",
        );
      } else if (error.code === "auth/weak-password") {
        toast.error("Şifrə çox zəifdir.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Email ünvanı düzgün deyil.");
      } else {
        toast.error(error.message);
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50 flex items-center justify-center px-4 py-12 md:px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* sol hisse */}
        <LoginRegisterLeft />

        {/* Right Side - Form */}
        <div className="md:col-span-7 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 sm:p-10 max-w-lg w-full mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Hesab Yaradın
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Məlumatlarınızı daxil edərək qeydiyyatdan keçin
            </p>
          </div>

          {/* =========================== */}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-700"
              >
                Tam Adınız
              </label>
              <input
                id="name"
                type="text"
                placeholder="exp: white john"
                value={values.name}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700"
              >
                E-poçt
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={values.email}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Şifrə
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={values.password}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-slate-700"
                >
                  Şifrənin təsdiqi
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
                />{" "}
                {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <button
               type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] mt-2"
            >
              Qeydiyyatdan Keç
            </button>
          </form>
          {/* =========================== */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-slate-400">və ya</span>
              </div>
            </div>

            {/* Google Button */}
            <button onClick={googleWithLogin}  className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition cursor-pointer">
              <FcGoogle className="text-2xl" />
              <span className="font-medium text-gray-700">
                Google ilə davam et
              </span>
            </button>
          </div>
          <p className="text-center text-sm text-slate-500">
            Artıq hesabınız var?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline cursor-pointer transition"
            >
              Daxil olun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
