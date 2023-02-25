import React from "react";
import "./App.css";
import Employee from "./components/Employee";

function App() {
  const showemployee = true; //false or true
  return (
    <div className="App ">
    {showemployee ? (
      <>
      <Employee name="calib" role="intern"/>
      <Employee name="usman" />
      <Employee name ="zaman"/>
      </>

    ):(
      <p>You can not see the employee</p>
    )
    }
    </div>
  );
}

export default App;
