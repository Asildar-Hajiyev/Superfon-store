import { useContext, useState } from "react";
import { DATA } from "../Context/Context";

function StoreLocation() {
  const {storeLocation} = useContext(DATA)

  const [openMap, setOpenMap] = useState(storeLocation[0]?.embedUrl);
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* MAP */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src={openMap}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeLocation?.map((item) => (
            <div
              key={item.id}
               onClick={() => setOpenMap(item.embedUrl)}
              className="group relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Üst vurğu xətti */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-300 rounded-t-2xl" />

              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                {item.name}
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <span>📍</span>
                  <span>{item.location}</span>
                </div>

                <div className="flex items-start gap-2 text-gray-700">
                  <span>🏢</span>
                  <span>{item.address}</span>
                </div>

                <div className="flex items-start gap-2 text-blue-600 font-medium">
                  <span>📞</span>
                  <span>{item.phone}</span>
                </div>
              </div>

              {/* Hover düyməsi effekti */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition ">
                <button className="w-full py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer">
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StoreLocation;
