const Score = ({ user, index, scoreField }) => {
  return (
    <div
      className="flex relative justify-around items-center border-b p-1 border-gray-500"
      key={index}
    >
      <p className="absolute left-1 top-1 bg-gray-300 px-1 rounded-full text-gray-800 md:text-xl">{index + 1}</p>
      <img src={user.picture} className="rounded-full w-12 md:w-16" />
      <div className="bg-gray-300 rounded-lg px-2 bg-opacity-80">
        <p className="text-sm sm:text-lg md:text-xl text-gray-800">{user.name}</p>
        <p className="text-xs sm:text:sm md:text-base text-gray-700">{user.email}</p>
      </div>
      <p className="text-xl md:text-3xl text-gray-800 bg-gray-300 rounded-lg px-2 bg-opacity-80">
        {scoreField == "timeScore" ? user.timeScore : user.flipsScore}
      </p>
    </div>
  );
};

export default Score;
