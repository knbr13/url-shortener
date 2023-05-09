const Card = ({
  card,
  setNbOfMoves,
  cardOne,
  setCardTwo,
  setCardOne,
  shuffledCards,
  setShuffledCards,
  disabled,
}) => {
  const handleClick = () => {
    setNbOfMoves((prevNum) => prevNum + 1);
    if (cardOne) {
      setCardTwo(card);
      setShuffledCards(
        shuffledCards.map((elem) =>
          elem.id == card.id ? { ...elem, clicked: true } : elem
        )
      );
    } else {
      setCardOne(card);
      setShuffledCards(
        shuffledCards.map((elem) =>
          elem.id == card.id ? { ...elem, clicked: true } : elem
        )
      );
    }
  };

  return (
    <div
      className="bg-gray-800 w-20 h-20 sm:w-24 sm:h-24 cursor-pointer p-[1px] rounded-lg md:w-fit"
      onClick={card.matched || card.clicked || disabled ? null : handleClick}
    >
      {card.matched || card.clicked ? (
        <img
          src={card.src}
          className="w-full h-[100%] object-cover rounded-lg"
        />
      ) : (
        <img
          src="src/assets/images/pirate.webp"
          className=" w-full h-[100%] rounded-lg"
        />
      )}
    </div>
  );
};

export default Card;
