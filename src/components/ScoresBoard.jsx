const ScoresBoard = ({ users }) => {
  return (
    <div className="flex flex-col gap-2 m-auto w-11/12 text-center md:w-9/12 lg:w-7/12 rounded-lg p-1 bg-gray-300 bg-opacity-50">
        <div className="flex justify-around items-center border-b border-gray-800">
            <p className="text-sm md:text-lg text-gray-800">Picture</p>
            <p className="text-sm md:text-lg text-gray-800">name + email</p>
            <p className="text-sm md:text-lg text-gray-800">nb of flips</p>
        </div>
      {users?.map((user, index) => {
        return (
          <div className="flex relative justify-around items-center border-b p-1 border-gray-500" key={index}>
            <p className="absolute left-2 text-gray-800 md:text-xl">{index + 1}</p>
            <img src={user.picture} className="rounded-full w-12 md:w-20" />
            <div>
              <p className="text-lg md:text-2xl text-gray-800">{user.name}</p>
              <p className="text-sm md:text-lg text-gray-700">{user.email}</p>
            </div>
            <p className="text-xl md:text-3xl text-gray-800">{user.flipsScore}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ScoresBoard;
