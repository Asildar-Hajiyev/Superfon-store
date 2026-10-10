import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { GiScales } from "react-icons/gi";
import { COMPARE } from "../Context/Context";
import CompareCard from "./CompareCard";

function Comparison() {
  const navigate = useNavigate();
  const { corpare, removeCorpare } = useContext(COMPARE);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allSpecKeys = [
    ...new Set(
      corpare.flatMap((product) => Object.keys(product.specifications || {})),
    ),
  ];

  return (
    <>
      {corpare.length === 0 ? (
        <div className="flex items-center justify-between flex-col py-48">
          <GiScales className="text-[120px]" />
          <span className="text-2xl text-gray-600">Sizin səbətiniz boşdur</span>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mt-4 text-[#001623] font-medium hover:text-[#49637b] transition cursor-pointer"
          >
            <IoArrowBack className="text-xl" />
            Geriyə qayıt
          </button>
        </div>
      ) : (
        <div className="p-4 md:p-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#001623] font-medium hover:text-[#49637b] transition cursor-pointer"
            >
              <IoArrowBack className="text-xl" />
              Geriyə qayıt
            </button>

            <button
              onClick={removeCorpare}
              className="text-sm text-gray-500 hover:text-red-500 transition cursor-pointer"
            >
              Hamısını təmizlə
            </button>
          </div>

          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="flex overflow-x-auto">
              {/* sol - sabit sütun */}
              <div className="flex-shrink-0 w-32 sm:w-44 sticky left-0 bg-white z-10 border-r border-gray-200">
                <div className="h-[200px]"></div>
                {allSpecKeys.map((key) => (
                  <div
                    key={key}
                    className="px-4 py-3 border-b border-gray-200 text-sm md:text-base font-medium text-gray-800 h-12 flex items-center"
                  >
                    {key}
                  </div>
                ))}
              </div>

              {/* sag - mehsul sutunlari */}
              <div className="flex flex-1">
                {corpare.map((product) => (
                  <CompareCard
                    key={product.id}
                    item={product}
                    allSpecKeys={allSpecKeys}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Comparison;
