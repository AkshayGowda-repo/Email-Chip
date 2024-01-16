import React from "react";
import "./App.css";
import ChipComponent from "./component/ChipComponent";

function App() {
  return (
    <>
      <div className="App">
        <div className="text-center text-3xl text-red-600">Pick Users</div>
        <ChipComponent />
      </div>
    </>
  );
}

export default App;
