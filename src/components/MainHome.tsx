import React from "react";
import Dashboard from "./Dashboard";
import Container from "./Container";
import Products from "./Products";

const MainHome = () => {
  return (
    <>
      <>
        <div className="px-4 sm:px-8 lg:px-12 py-10 flex flex-col gap-8 lg:flex-row">
          <Dashboard />
          <Products/>
        </div>
      </>
    </>
  );
};

export default MainHome;
