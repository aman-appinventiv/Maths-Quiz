import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Addition from "./components/home/component/Addition";
import Substraction from "./components/home/component/Substraction";
import Mutliplication from "./components/home/component/Mutliplication";
import Division from "./components/home/component/Division";
import Easy from "./components/home/component/page/Easy";
import Medium from "./components/home/component/page/Medium";
import Hard from "./components/home/component/page/Hard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center text-blue-300 bg-black">
        <div className=" font-bold text-3xl p-2 mb-8">Play Maths Quiz</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/substraction" element={<Substraction />} />
          <Route path="/multiplication" element={<Mutliplication />} />
          <Route path="/division" element={<Division />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
