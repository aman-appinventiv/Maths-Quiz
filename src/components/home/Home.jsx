import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [name, setName] = useState("")
  const [startQuiz, setStartquiz] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const handleName = (e) => setName(e.target.value)
  const handleStartQuiz = (e) => {
    e.preventDefault();
    setStartquiz(true);
    setIsDisabled(true);
  };

  return (
    <div className="flex flex-col gap-5 border border-slate-200 rounded-md p-2 md:p-10">
      <div>
        <form onSubmit={handleStartQuiz} className="">
          <div>
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                onChange={handleName}
                className="p-2 text-lg outline outline-1 rounded-md text-red-500"
                id="name"
                disabled={isDisabled}
                required
              />
            </div>
            <p className="text-xs mt-1">please enter name to start the quiz*</p>
          </div>
          <button
            className=" p-3 rounded-md text-lg  w-[100%] mid-[25%] border border-slate-100 mt-5"
            disabled={isDisabled}
          >
            Start Quiz
          </button>
        </form>
      </div>

      {startQuiz && (
        <div>
          <div className="text-xl font-bold pb-2 mx-auto">
            Select the types of question for quiz
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-2">
            <NavLink
              to="/addition"
              state={{ name: { name } }}
              className="p-5 rounded-md text-lg w-full md:w-[45%] border border-slate-100"
            >
              Addition
            </NavLink>
            <NavLink
              to="/substraction"
              state={{ name: { name } }}
              className="p-5 rounded-md text-lg  w-full md:w-[45%] border border-slate-100"
            >
              Substaction
            </NavLink>
            <NavLink
              to="/multiplication"
              state={{ name: { name } }}
              className="p-5 rounded-md text-lg  w-full md:w-[45%] border border-slate-100"
            >
              Multiplication
            </NavLink>
            <NavLink
              to="/division"
              state={{ name: { name } }}
              className="p-5 rounded-md text-lg  w-full md:w-[45%] border border-slate-100"
            >
              Division
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
