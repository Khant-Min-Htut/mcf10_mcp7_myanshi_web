// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className=" max-w-[1440px] mx-auto w-full">
      {/* <Header /> */}
      <main className="max-w-[1440px] mx-auto bg-back-ground-color overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
