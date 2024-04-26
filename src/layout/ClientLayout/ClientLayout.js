import React from "react";
import NavbarClient from "../../components/Navbar/NavbarClient";
import Footer from "../../components/Footer/Footer";

const ClientLayout = ({ children }) => {
  return (
    <>
      <NavbarClient />
      <div className="new-linear">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default ClientLayout;
