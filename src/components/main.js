import React from "react";
import "../styles/main.css";
import "../styles/form.css";

const Main = ({ children }) => {
  return (
    <div id="main">
      <>{children}</>
    </div>
  );
};

export default Main;
