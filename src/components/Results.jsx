import { useEffect, useState } from "react";

const Results = ({ nbOfMoves }) => {
  const [counter, setCounter] = useState(0);
  const [counterInterval, setCounterInterval] = useState(null);
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);
    console.log(10)
    setCounterInterval(counterInterval);
  }, []);
  return (
    <div className="flex w-full justify-around rounded-lg bg-slate-400">
      <h1 className="text-base md:text-lg text-gray-800">Number of Flips: {nbOfMoves}</h1>
      <h1 className="text-base md:text-lg text-gray-800">Time: {counter}</h1>
    </div>
  );
};

export default Results;
