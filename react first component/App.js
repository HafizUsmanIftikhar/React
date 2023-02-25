import React from "react";
import "./App.css";
import Employee from "./components/Employee";

function App() {
  const showemployee = true; //false or true
  return (
    <div className="App ">
    {showemployee ? (
      <>
      <Employee />
      <Employee />
      <Employee />
      </>

    ):(
      <p>You can not see the employee</p>
    )
    }
    </div>
  );
}

export default App;
