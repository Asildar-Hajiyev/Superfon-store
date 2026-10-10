import { Link, useNavigate } from "react-router-dom";
import LoginRegisterLeft from "../components/LoginRegisterLeft";
import { useEffect, useState } from "react";
import {

  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { toast } from "react-toastify";

import { FcGoogle } from "react-icons/fc";


function Login() {
  async function googleWithLogin() {
    try {
      const response = await signInWithPopup(auth);
      toast.success("Giriş Uğurludur");
      const user = response.user;
      if (user) {
        navigate("/profil");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function login() {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        localStorage.setItem("token", JSON.stringify(user.accessToken));
        toast.success("Ugurlu giris");
        setTimeout(() => {
          navigate("/profil");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message || "Giris ugursuz");
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50 flex items-center justify-center px-4 py-12 md:px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Sol Tərəf (Komponent) */}
        <div className="md:col-span-5 text-center md:text-left">
          <LoginRegisterLeft />
        </div>

        {/* Sağ Tərəf - Giriş Formu */}
        <div className="md:col-span-7 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 sm:p-10 max-w-lg w-full mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Giriş Edin
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Hesabınıza daxil olmaq üçün məlumatları doldurun
            </p>
          </div>

          <form className="space-y-5" onSubmit={
            (e) => {e.preventDefault()
             login()
            }}>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="mail"
                className="text-sm font-semibold text-slate-700"
              >
                E-poçt
              </label>
              <input
                id="mail"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setMail(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Şifrə
                </label>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
              />
            </div>

            <button
             type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] mt-2"
            >
              Daxil Ol
            </button>
          </form>

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
            <button
              onClick={googleWithLogin}
              className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition cursor-pointer"
            >
              <FcGoogle className="text-2xl" />
              <span className="font-medium text-gray-700">
                Google ilə davam et
              </span>
            </button>
          </div>

          <p className="text-center text-sm text-slate-500">
            Hesabınız yoxdur?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline cursor-pointer transition ml-0.5"
            >
              Qeydiyyatdan keçin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
