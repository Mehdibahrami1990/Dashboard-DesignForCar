import React from "react";
import Dashboard from "./Dashboard";
import Container from "./Container";

const MainHome = () => {
  return (
    <>
      <Container>
        <div className="px-4 sm:px-8 lg:px-12 py-10 flex flex-col gap-8 lg:flex-row">
          <Dashboard />
        </div>
      </Container>
    </>
  );
};

export default MainHome;
