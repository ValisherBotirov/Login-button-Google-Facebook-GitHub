import React from "react";
import GoogleClassComponent from "./Google/GoogleClassComponent";
import "./index.css";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1 className="header--title">Registratsiya</h1>
        <div className="header--right">
          <GoogleClassComponent />

          <button className="resgister--btn">Facebook</button>
          <button className="resgister--btn">GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default App;
