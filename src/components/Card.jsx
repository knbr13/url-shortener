const Card = ({card}) => {
  return (
    <div className="bg-gray-800 p-[3px] rounded-lg w-fit">
      <img
        src={card.src}
        className="w-32 h-auto object-cover"
      />
    </div>
  );
};

export default Card;
