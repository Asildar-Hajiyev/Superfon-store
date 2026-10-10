import ErrorBoundary from "../pages/ErrorBoundary";
import BasketContext from "../Context/BasketContext";
import CorpareContext from "../Context/CorpareContext";
import DataContext from "../Context/DataContext";
import WishlistContext from "../Context/WishlistContext";


function Providers({ children }) {
  return (
    <ErrorBoundary>
      <CorpareContext>
        <WishlistContext>
          <DataContext>
            <BasketContext>{children}</BasketContext>
          </DataContext>
        </WishlistContext>
      </CorpareContext>
    </ErrorBoundary>
  );
}

export default Providers;