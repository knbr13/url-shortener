import { formatTime } from "../utils/format";

const Score = ({ user, index, scoreField, currentPage }) => {
  return (
    <div
      className="flex relative justify-around items-center border-b p-1 border-gray-500"
      key={index}
    >
      <p className="absolute left-1 top-1 bg-gray-300 px-1 rounded-full text-gray-800 md:text-xl">{index + 1 + ((currentPage -1) * 5)}</p>
      <img src={user.picture} className="rounded-full w-10 md:w-14" />
      <div className="bg-gray-300 w-6/12 overflow-x-hidden rounded-lg px-2 bg-opacity-80">
        <p className="text-sm sm:text-lg md:text-xl text-black">{user.name}</p>
        <p className="text-xs sm:text:sm md:text-base text-gray-700 break-words">{user.email}</p>
      </div>
      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base w-2/12 text-gray-800 break-words bg-gray-300 rounded-lg px-2 bg-opacity-80">
        {scoreField == "timeScore" ? formatTime(user.timeScore) : user.flipsScore}
      </p>
    </div>
  );
};

export default Score;
