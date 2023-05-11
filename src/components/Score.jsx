const Score = ({ user, index, scoreField }) => {
  return (
    <div
      className="flex relative justify-around items-center border-b p-1 border-gray-500"
      key={index}
    >
      <p className="absolute left-2 text-gray-800 md:text-xl">{index + 1}</p>
      <img src={user.picture} className="rounded-full w-12 md:w-16" />
      <div>
        <p className="text-lg md:text-2xl text-gray-800">{user.name}</p>
        <p className="text-sm md:text-lg text-gray-700">{user.email}</p>
      </div>
      <p className="text-xl md:text-3xl text-gray-800">
        {scoreField == "timeScore" ? user.timeScore : user.flipsScore}
      </p>
    </div>
  );
};

export default Score;
