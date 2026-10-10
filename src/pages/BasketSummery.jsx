import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { BASKET } from "../Context/Context";
import { Link } from "react-router-dom";
function BasketSummery() {
    const {sebet  , removeBasketCart , incQuantity , decQuantity} = useContext(BASKET)
  return (
      <div className="flex-1 space-y-4">
            {sebet.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5 bg-white shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 flex-1 w-full">
                  <img
                    className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg object-cover shrink-0"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start text-center sm:text-left w-full">
                    <Link to={`/details//${item.id}`} className="font-semibold text-lg leading-snug">{item.title}</Link>

                    <span className="text-xl font-bold text-[#001623]">{Math.round((item.price > 1 ? item.price * item.quantity : item.price)*100)/100} ₼</span>

                    <div className="flex items-center gap-3 border-t border-gray-100 pt-3 w-full justify-center sm:justify-start">
                      <p className="text-gray-500 text-sm">Say </p>

                      <div className="border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-4">
                        <button onClick={()=>decQuantity(item.id)} className="text-lg leading-none w-4 text-gray-600 hover:text-black transition">-</button>

                        <span className="font-semibold text-sm w-4 text-center">{item.quantity}</span>

                        <button onClick={()=>incQuantity(item.id)} className="text-lg leading-none w-4 text-gray-600 hover:text-black transition">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={()=>removeBasketCart(item.id)} className="self-center sm:self-start p-3 rounded-lg bg-[#001623] text-white hover:bg-[#49637b] transition cursor-pointer shrink-0">
                  <FaRegTrashCan className="text-xl" />
                </button>
              </div>
            ))}
          </div>
  )
}

export default BasketSummery
