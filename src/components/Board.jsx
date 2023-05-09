import { useState } from "react";
import { cards } from "../data/cards";

const Board = () => {
  const [showCards, setShowCards] = useState(false);

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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-800 p-[3px] rounded-lg w-fit">
              <img
                src={card.src}
                alt={`Card ${index}`}
                className="w-32 h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
