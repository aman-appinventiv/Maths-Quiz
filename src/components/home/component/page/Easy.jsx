import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Easy(props) {
  // console.log(props)
  const location = useLocation()
  const easyQuestion = location.state.easy.easy
  const name = location.state.name.name
  //   console.log(name)

  //   console.log(easyQuestion)
  const navigate=useNavigate()
  const [Index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const currentQuestion = easyQuestion[Index]

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1)
    }

    const nextIndex = Index + 1
    if (nextIndex < easyQuestion.length) {
      setIndex(nextIndex)
    } else {
      setShowResult(true)
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold mb-2">Hii, <span className="text-red-500">{name}</span></div>
      {!showResult ? (
        <div className="border border-white p-10 rounded-md">
          <div>Total question:- {easyQuestion.length}</div>
          <h2 className="m-5 text-2xl font-bold p-2">Question {Index + 1}</h2>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-2xl border border-white rounded-md mb-10 p-2 pl-3 pr-3">
              {currentQuestion.question}
            </p>
            <div className="flex gap-5 ">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="border border-white rounded-md w-10"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-white p-10 rounded-md">
          <h2 className="m-5 text-2xl font-bold p-2">Quiz Completed</h2>
          <p className="m-5 text-2xl font-bold p-2">
            Your Score:- {score}/{easyQuestion.length}
          </p>
          <button onClick={()=> navigate("/")} className="border border-white rounded-md w-full p-5">Go to Home Page</button>
        </div>
      )}
    </div>
  );
}
export default Easy;
