import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className=" w-full mx-auto">
      <Header />
      <main className=" w-full mx-auto bg-back-ground-color overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
