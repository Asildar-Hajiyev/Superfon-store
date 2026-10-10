import {  useContext, useEffect } from "react";
import { BASKET, DATA, WISHLIST } from "../Context/Context";
import { Link, useParams } from "react-router-dom";
import Detailsimg from "./Details-comp/Detailsimg";
import { CiCircleCheck, CiBoxes, CiHeart } from "react-icons/ci";

function Details() {
  const { id } = useParams();
  const { user } = useContext(DATA);
  const {addBasket , incQuantity , decQuantity} = useContext(BASKET)
  const {checkedWislist , wishListOnClickMove } = useContext(WISHLIST)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // throw new Error("xeta")

  const product = user.find(
    (item) => item.id === Number(id),
  );

  if (!product) {
    return (
      <h2 className="text-center mt-12 font-semibold">Məhsul tapılmadı</h2>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600">
            Ana səhifə
          </Link>

          <span>/</span>

          <Link
            to={`/products?category=${product.category}`}
            className="hover:text-green-600"
          >
            {product.category}
          </Link>

          <span>/</span>

          <span className="text-black font-medium">{product.title}</span>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start mt-6 md:mt-12 p-4 md:p-8 gap-6 md:gap-8 max-w-7xl mx-auto ">
        <div className="w-full md:w-auto flex justify-center">
          <Detailsimg product={product} />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <h2 className="font-semibold text-xl md:text-2xl">{product.title}</h2>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span className="text-gray-400 font-light text-sm">
              Məhsulun kodu: {product.productCode}
            </span>
            <span className="bg-[#f2faf6] text-[#00a34f] rounded-md px-2 py-1 text-sm flex items-center gap-2 font-semibold">
              <CiCircleCheck className="text-xl" />{" "}
              {product.inStock ? "Anbarda var" : "Anbarda yoxdur"}
            </span>
          </div>

          <p className="py-2 md:py-4 text-2xl font-mono font-bold">
            {product.price} ₼
          </p>

          <div className="border p-4 border-gray-200 w-full rounded-md">
            <div className="border-b border-gray-200 pb-5 mb-5">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex items-center justify-between h-12 w-full lg:w-32 border border-gray-300 rounded-md px-3 order-1 md:order-1">
                  <button onClick={()=>(decQuantity(product.id))} className="text-xl font-semibold hover:text-green-600 transition cursor-pointer">
                    -
                  </button>

                  <span className="font-semibold text-lg">{product.quantity}</span>

                  <button  onClick={()=>incQuantity(product.id)} className="text-xl font-semibold hover:text-green-600 transition cursor-pointer">
                    +
                  </button>
                </div>

                <button onClick={()=>addBasket(product.id,product.image,product.title,product.price)} className="h-12 flex-1 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition cursor-pointer order-3 md:order-2">
                  Səbətə əlavə et
                </button>

               <Link
                  to="/login"
                  className="h-12 flex-1 flex items-center justify-center rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition order-4 md:order-3"
                >
                  İndi al
                </Link>

              

              <button
                onClick={() => wishListOnClickMove(product)}
                className={`h-12 w-full lg:w-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition cursor-pointer order-2 md:order-4 ${
                  checkedWislist(product)
                    ? "bg-white border-gray-300 text-red-500 border-red-500 scale-105"
                    : "bg-white border-gray-300 text-gray-500 hover:text-red-500 hover:border-red-500"
                }`}
                title="Sevimlilərə əlavə et"
              >
                <CiHeart
                  className={`text-2xl transition ${
                    checkedWislist(product) ? "text-red-500" : "text-gray-500 hover:text-red-500"
                  }`}
                />
              </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
              <span className="sm:border-r border-gray-200 sm:pr-2 flex items-center gap-2 font-semibold">
                <CiBoxes className="text-lg" /> 1-3 iş gününə çatdırılma
              </span>
              <span className="font-light text-gray-600">
                Sürətli və etibarlı çatdırılma!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-10 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-center md:text-left">
          Texniki parametrlər
        </h2>
        <ul className="space-y-2 flex flex-col w-full">
          {product.specifications &&
            Object.entries(product.specifications).map(([key, value]) => (
              <li
                key={key}
                className="flex flex-row items-center justify-between border-b border-gray-200 text-gray-600 pb-2 text-sm md:text-base gap-4"
              >
                <span className="font-medium text-gray-800">{key}</span>
                <span className="text-right">{String(value)}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Details;
