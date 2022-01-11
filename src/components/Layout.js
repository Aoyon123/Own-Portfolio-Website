import React from "react";
//import { Children } from 'react/cjs/react.production.min'
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="content font-mont">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
