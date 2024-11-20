import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Level from "./page/Level";
import questions from "../../utils/questions.json";

function Substraction() {
  const location = useLocation()
//   console.log();
  const name = location.state.name.name
  const substractionData = questions?.math_operations?.subtraction

  return (
    <div>
      <div className="text-2xl font-bold mb-2">Hii, <span className="text-red-500">{name}</span></div>
      <div className="mb-5">Start playing with substraction question</div>

      <Level props={{ Data:substractionData,name: name }} />
    </div>
  );
}

export default Substraction;
