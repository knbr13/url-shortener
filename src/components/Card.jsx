const Card = ({card}) => {
  return (
    <div className="bg-gray-800 w-20 sm:w-24 cursor-pointer p-[3px] rounded-lg md:w-fit">
      <img
        src={card.src}
        className="w-32 h-auto object-cover"
      />
    </div>
  );
};

export default Card;
