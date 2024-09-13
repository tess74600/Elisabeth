import React from "react";
import GlobalContainer from "../../components/GlobalContainer";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalContainer>
        <Nav />
        {children}
        <Footer />
      </GlobalContainer>
    </>
  );
};

export default MainLayout;
