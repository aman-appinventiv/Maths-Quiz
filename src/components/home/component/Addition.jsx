import React from "react";
import Level from "./page/Level";
import { useLocation } from "react-router-dom";
import questions from "../../utils/questions.json";

function Addition() {
  const location = useLocation()
  const name = location.state.name.name
  const additonData = questions?.math_operations?.addition
  return (
    <div>
      <div className="text-2xl font-bold mb-2">Hii, <span className="text-red-500">{name}</span></div>
      <div className="mb-5">Start playing with addition question</div>

      <Level props={{ Data:additonData,name: name }} />
    </div>
  );
}

export default Addition;
