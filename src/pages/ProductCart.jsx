import Card from "../components/Card";

function ProductCart({ allProduct, currentPage, totalPages, setCurrentPage }) {
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dinamik səhifə nömrələrini (və "...") hesablayan funksiya
  const getPaginationGroup = () => {
    const delta = 1;
    const range = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) range.unshift("...");
    if (currentPage + delta < totalPages - 1) range.push("...");

    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  return (
    <div className="w-full">
      {/* Məhsul Şəbəkəsi */}
      {allProduct?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {allProduct.map((item, i) => (
            <Card item={item} key={item.id || i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500">
          <p className="text-lg font-medium">Hec bir məhsul tapılmadı.</p>
          <p className="text-sm text-gray-400 mt-1">Filtrləri dəyişərək yenidən yoxlayın.</p>
        </div>
      )}

      {/* Müasir və Yığcam Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 my-10 select-none">
          {/* Əvvəlki Səhifə Düyməsi */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Əvvəlki səhifə"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-gray-200 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dinamik Nömrələr */}
          {getPaginationGroup().map((item, index) =>
            item === "..." ? (
              <span key={`dots-${index}`} className="w-8 text-center text-gray-400 font-medium">
                •••
              </span>
            ) : (
              <button
                key={`page-${item}`}
                onClick={() => handlePageChange(item)}
                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all shadow-sm ${
                  currentPage === item
                    ? "bg-blue-600 text-white shadow-blue-200 shadow-md scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {item}
              </button>
            )
          )}

          {/* Növbəti Səhifə Düyməsi */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Növbəti səhifə"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-gray-200 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCart;