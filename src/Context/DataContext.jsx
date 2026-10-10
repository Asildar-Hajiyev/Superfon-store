import { useEffect, useState } from "react";
import { DATA } from "./Context";
import { getData } from "../service/api";

function DataContext({ children }) {
  const [data, setData] = useState({
    products: [],
    brands: [],
    stores: [],
    menuitems: [],
    navlinks: [],
  });

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  const { products, brands, stores, menuitems, navlinks } = data;

  return (
    <DATA.Provider
      value={{
        user: products,
        user3: brands,
        storeLocation: stores,
        menuItems: menuitems,
        navLinks: navlinks,
      }}
    >
      {children}
    </DATA.Provider>
  );
}

export default DataContext;