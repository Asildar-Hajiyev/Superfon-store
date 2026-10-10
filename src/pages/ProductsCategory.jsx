import { useContext, useState } from "react";
import { FaChevronDown, FaSearch, FaAngleUp } from "react-icons/fa";
import { DATA } from "../Context/Context";

function ProductsCategory({ setCat, setPrice }) {
  const { user } = useContext(DATA);

  const [categoryOpen, setCategoryOpen] = useState(false);

  const [priceOpen, setPriceOpen] = useState(false);

  const filtereData = user.filter(
    (item, index, arr) =>
      index === arr.findIndex((el) => el.category === item.category),
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (value) => {
    setSelectedCategory(value);
    setCat(value);
  };

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  return (
    <div className="w-full bg-white rounded-lg ">
      <div className="border-b border-gray-300">
        <div
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex justify-between items-center p-4 cursor-pointer"
        >
          <h2 className="font-semibold text-blue-950">Kateqoriyalar</h2>
          {categoryOpen ? <FaAngleUp /> : <FaChevronDown />}
        </div>

        {categoryOpen && (
          <div className="p-4 flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryClick("")}
              className={`px-3 py-1.5 rounded-full text-sm border transition cursor-pointer ${
                selectedCategory === ""
                  ? "bg-blue-950 text-white border-blue-950"
                  : "bg-white text-gray-600 border-gray-300 hover:border-blue-950 hover:text-blue-950"
              }`}
            >
              hamısı
            </button>
            {filtereData.map((item, c) => (
              <div key={c}>
                <button
                  key={c}
                  onClick={() => handleCategoryClick(item.category)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition cursor-pointer ${
                    selectedCategory === item.category
                      ? "bg-blue-950 text-white border-blue-950"
                      : "bg-white text-gray-600 border-gray-300 hover:border-blue-950 hover:text-blue-950"
                  }`}
                >
                  {item.category}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-b border-gray-300">
        <div
          onClick={() => setPriceOpen(!priceOpen)}
          className="flex justify-between items-center p-4 cursor-pointer"
        >
          <h2 className="font-semibold text-blue-950">Qiymət</h2>

          {priceOpen ? <FaAngleUp /> : <FaChevronDown />}
        </div>

        {priceOpen && (
          <div className="p-4 flex gap-3">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              className="border p-2 rounded w-full"
              onChange={(e) => setMinPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              className="border p-2 rounded w-full"
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <button
              onClick={() => setPrice({ min: minPrice, max: maxPrice })}
              className="bg-blue-950 text-white px-4 rounded"
            >
              <FaSearch />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsCategory;
