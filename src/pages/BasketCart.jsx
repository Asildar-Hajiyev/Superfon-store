import { useContext } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { BASKET } from "../Context/Context";
import { Link } from "react-router-dom";

function BasketCart() {
  const { totalPrice , discount , finalPrice} = useContext(BASKET)
  return (
    <div className="w-full lg:w-[380px]">
            <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white lg:sticky lg:top-30">
              <h2 className="font-semibold text-lg mb-4">Sifarişin yekunu</h2>
              <div className="bg-green-500 text-white p-3 rounded-lg text-sm mb-4">
                Kombo kampaniyasına qoşuldunuz!
              </div>
              <div className="flex justify-between py-3">
                <p>Cəmi məbləğ</p>
                <span> {(Math.round(totalPrice)*100)/100} ₼</span>
              </div>

              <div className="flex justify-between py-3">
                <p>Endirim</p>
                <span className="font-semibold">{discount} ₼</span>
              </div>
              <div className="flex justify-between items-center py-3 text-lg">
                <p>Çatdırılma</p>

                <div className="flex items-center gap-2 text-sm">
                  Ərazidən asılıdır
                  <CiCircleInfo className="text-2xl text-red-500 cursor-pointer" />
                </div>
              </div>

              <div className="border-t mt-3 pt-4 flex justify-between font-semibold text-lg">
                <p>Yekun</p>
                <span>{Math.round(finalPrice * 100) / 100} ₼</span>
              </div>

             <Link
                to="/login"
                className="block w-full mt-5 py-3 rounded-lg bg-[#001623] text-white hover:bg-[#49637b] transition text-center"
              >
                Sifarişi tamamla
              </Link>
            </div>
          </div>
  )
}

export default BasketCart
