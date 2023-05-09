const Card = ({ card }) => {
  return (
    <div className="bg-gray-800 w-20 h-20 sm:w-24 sm:h-24 cursor-pointer p-[3px] rounded-lg md:w-fit">
      {card.matched ? (
        <img src={card.src} className="w-full object-cover" />
      ) : (
        <img
          src="src/assets/images/pirate.webp"
          className=" w-full h-[100%]"
        />
      )}
    </div>
  );
};

export default Card;
