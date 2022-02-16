import React, { Fragment } from "react";
import ExtraNavbar from "./extra-navbar/extra-navbar";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

const Layout = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar />
      <ExtraNavbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
