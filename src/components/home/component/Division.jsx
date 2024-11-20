import React from "react";
import Level from "./page/Level";
import { useLocation } from "react-router-dom";
import questions from "../../utils/questions.json";

function Division() {
  const location = useLocation()
  const name = location.state.name.name
  const divisionData = questions?.math_operations?.division
  return (
    <div>
      <div className="text-2xl font-bold mb-2">Hii, <span className="text-red-500">{name}</span></div>
      <div className="mb-5">Start playing with division question</div>

      <Level props={{ Data:divisionData, name:name }} />
    </div>
  );
}

export default Division;
