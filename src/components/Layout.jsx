// src/components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Layout = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className=" max-w-[1440px] mx-auto w-full">
      <Header />
      {pathName === "/" && (
        <HeroSection isHomePage={true} title={"Fresh, Flavorful Sushi, Only in Myanmar"}/>
      )}
      {pathName === "/about" && (
        <HeroSection isBreadCrumb={true}  currentPage="About Us" title="We are MYANSHI"/>
      )}
      {pathName === "/menu" && (
        <HeroSection isBreadCrumb={true} currentPage="Menu" title="Our Menu"/>
      )}
      {pathName === "/blog" && (
        <HeroSection isBreadCrumb={true} currentPage={"Blog"} title="Our Blog"/>
      )}
      {pathName === "/contact" && (
        <HeroSection isBreadCrumb={true} currentPage={"Contact Us"} title="Contact Us"/>
      )}
      <main className="max-w-[1200px] mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
