import { Link } from "react-router-dom";
import LoginRegisterLeft from "../components/LoginRegisterLeft";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50 flex items-center justify-center px-4 py-12 md:px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Sol Tərəf (Brend loqo və mətn komponenti) */}
        <div className="md:col-span-5 text-center md:text-left">
          <LoginRegisterLeft />
        </div>

        {/* Sağ Tərəf - Şifrə Sıfırlama Formu */}
        <div className="md:col-span-7 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 sm:p-10 max-w-lg w-full mx-auto">
          <div className="text-center mb-8">
            {/* Açarlar / Təhlükəsizlik İkonu (Vizual olaraq gözəl görünməsi üçün) */}
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-.1 1-.43A6 6 0 1 1 21.75 8.25Z" />
              </svg>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Şifrəni Unutmusunuz?
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
              E-poçt ünvanınızı daxil edin və biz sizə şifrənizi sıfırlamaq üçün təlimatları göndərəcəyik.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                E-poçt
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] mt-2">
              Sıfırlama Linki Göndər
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
          </div>

          {/* Geri Qayıtmaq Keçidi */}
          <p className="text-center text-sm">
            <Link to="/login" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Giriş səhifəsinə qayıt
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;