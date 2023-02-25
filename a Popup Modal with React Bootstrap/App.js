import React from "react";
import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function App() {
  const employeeshow = true;
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: " usman",
      role: "intern",
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
    {
      name: " Naba",
      role: "graphic designer",
      img: "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg",
    },
    {
      name: " Zaman",
      role: "intern",
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
    },
    {
      name: " Dj",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
  ]);

  return (
    <div className="App ">
      {employeeshow ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />

          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employee);
              return(
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
               />);
            })}
          </div>
        </div>
      ) : (
        <p> you can not see the employee </p>
      )}
    </div>
  );
}

export default App;
