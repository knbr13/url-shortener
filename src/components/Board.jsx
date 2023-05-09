import { useEffect, useState } from "react";
import { cards } from "../data/cards";
import Card from "./Card";
import {shuffleCards} from "../utils/cards";
const Board = () => {
  const [showCards, setShowCards] = useState(false);
  const [shuffledCards, setShuffledCards] = useState(cards);
  useEffect(() => {
    setShuffledCards(shuffleCards(cards));
  }, []);
  const handleStart = () => {
    setShowCards(true);
  };
  console.log(cards);
  return (
    <div className="w-6/12 m-auto flex justify-center items-center">
      {!showCards && (
        <button
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-700 mt-9 text-white font-bold py-2 px-4 rounded"
        >
          Start
        </button>
      )}

      {showCards && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-2">
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
