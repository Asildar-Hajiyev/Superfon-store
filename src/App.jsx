import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Providers from "./provider/Providers";

function App() {
  return (
    <Providers>
      <Header />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        newestOnTop
        toastClassName="toasty-toast"
        bodyClassName="toasty-body"
      />
      <Footer />
    </Providers>
  );
}

export default App;
