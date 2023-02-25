import React from "react";
import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const showemployee = true; //false or true
  const [role, setRole] = useState("dev");
  return (
    <div className="App ">
    {showemployee ? (
      <>
      <input
      type="text"
      onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}
    />

      <Employee name="calib" role="intern"/>
      <Employee name="usman" role={role}/>
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
