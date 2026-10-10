import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Səhifə tapılmadı
      </h2>

      <p className="text-gray-500 mt-2">
        Axtardığınız səhifə mövcud deyil.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
      >
        Ana səhifəyə qayıt
      </Link>
    </div>
  );
}

export default NotFound;