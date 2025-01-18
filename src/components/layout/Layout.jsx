import React from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <AppNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
