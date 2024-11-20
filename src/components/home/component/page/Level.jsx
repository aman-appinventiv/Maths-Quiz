import React from "react";
import { NavLink } from "react-router-dom";

function Level(props) {
//   console.log(props)
  const name = props.props.name
  // console.log(name)
  const { easy, medium, hard } = props.props.Data
  // console.log(easy)
  // console.log(props)
  // console.log(props?.easy)
  return (
    <div className="border border-slate-200 p-3 rounded-md w-full md:w-[600px]">
      <div className="text-xl font-bold pb-2 mx-auto">
        Select the level of question
      </div>
      <div className="flex flex-col  md:flex-wrap justify-between gap-2 mt-2">
        <NavLink
          to="/easy"
          state={{ easy: { easy }, name: { name } }}
          className="p-5 rounded-md text-lg w-full border border-slate-100"
        >
          Easy Level
        </NavLink>
        <NavLink
          to="/medium"
          state={{ medium: { medium }, name: { name } }}
          className="p-5 rounded-md text-lg  w-full  border border-slate-100"
        >
          Medium Level
        </NavLink>
        <NavLink
          to="/hard"
          state={{ hard: { hard }, name: { name } }}
          className="p-5 rounded-md text-lg  w-full  border border-slate-100"
        >
          Hard Level
        </NavLink>
      </div>
    </div>
  );
}

export default Level;
