import React from "react";
import { Header, Footer } from ".";

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
}
