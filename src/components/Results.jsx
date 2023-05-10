import { useEffect, useState } from "react";
import { shuffleCards } from "../utils/cards";
import { cards } from "../data/cards";

const Results = ({
  nbOfMoves,
  setCounterInterval,
  setShuffledCards,
  counterInterval,
  setNbOfMoves,
  counter,
  setCounter,
  setDisabled,
}) => {
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);
    setCounterInterval(counterInterval);
    return ()=>{
      clearInterval(counterInterval);
    }
  }, []);

  const handleRestart = () => {
    setCounter(0);
    setShuffledCards(shuffleCards(cards));
    clearInterval(counterInterval);
    setNbOfMoves(0);
    setDisabled(false);
    const counterInterval1 = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);
    setCounterInterval(counterInterval1);
  };

  return (
    <div className="w-full flex flex-col items-center gap-1">
      <div className="flex w-full justify-around rounded-lg bg-gray-300">
        <h1 className="text-base md:text-lg text-gray-800">
          Number of Flips: {nbOfMoves}
        </h1>
        <h1 className="text-base md:text-lg text-gray-800">Time: {counter}</h1>
      </div>
      <button
        className="w-fit"
        onClick={handleRestart}
      >
        restart
      </button>
    </div>
  );
};

export default Results;
