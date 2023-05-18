import { useContext, useEffect, useState } from "react";
import { cards } from "../data/cards";
import Card from "./Card";
import { shuffleCards } from "../utils/cards";
import Results from "./Results";
import { updateScore } from "../api/userAPI";
import WinPopup from "./WinPopup";
import { UserContext } from "../context/userContext";

const Board = () => {
  const [showCards, setShowCards] = useState(false);
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [nbOfMoves, setNbOfMoves] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [counterInterval, setCounterInterval] = useState(null);
  const [counter, setCounter] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShuffledCards(shuffleCards(cards));
  }, []);

  const userCreds = useContext(UserContext);

  useEffect(() => {
    if (cardOne?.src == cardTwo?.src) {
      setShuffledCards(
        shuffledCards.map((card) =>
          card.src == cardOne?.src ? { ...card, matched: true } : card
        )
      );
      setCardOne(null);
      setCardTwo(null);
    } else {
      setDisabled(true);
      setTimeout(() => {
        setShuffledCards(
          shuffledCards.map((card) =>
            card.src == cardOne?.src || card.src == cardTwo?.src
              ? { ...card, clicked: false }
              : card
          )
        );
        setCardOne(null);
        setCardTwo(null);
        setDisabled(false);
      }, 1000);
    }
    if (shuffledCards.every((elem) => elem.matched === true)) {
      clearInterval(counterInterval);
      setDisabled(true);
      setShowPopup(true);
      const updateResults = async () => {
        try {
          const { data } = await updateScore({
            email: userCreds.user.email,
            flipsScore: nbOfMoves,
            timeScore: counter,
          });
          localStorage.setItem("userCreds", JSON.stringify(data));
          userCreds.setUser(data);
        } catch (error) {}
      };
      if (userCreds.user) updateResults();
    }
  }, [cardTwo]);

  const handleStart = () => {
    setShowCards(true);
    setNbOfMoves(0);
  };

  return (
    <div className="w-8/12 sm:w-6/12 m-auto flex flex-col gap-8 justify-center items-center">
      {!showCards && (
        <button onClick={handleStart} className="font-bold py-2 px-4 rounded">
          Start
        </button>
      )}

      {showCards && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-2">
          {shuffledCards.map((card, index) => (
            <Card
              setNbOfMoves={setNbOfMoves}
              card={card}
              setCardOne={setCardOne}
              setCardTwo={setCardTwo}
              cardOne={cardOne}
              key={index}
              shuffledCards={shuffledCards}
              setShuffledCards={setShuffledCards}
              disabled={disabled}
            />
          ))}
        </div>
      )}
      {showPopup && <WinPopup onClose={() => setShowPopup(false)} />}

      {showCards && (
        <Results
          nbOfMoves={nbOfMoves}
          setCounterInterval={setCounterInterval}
          setShuffledCards={setShuffledCards}
          counterInterval={counterInterval}
          setNbOfMoves={setNbOfMoves}
          counter={counter}
          setCounter={setCounter}
          setDisabled={setDisabled}
        />
      )}
    </div>
  );
};

export default Board;
