const Home = ({ login }) => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-full h-screen">
      <div className="w-fit p-2 text-center bg-gray-300 rounded-lg">
        <h2 className="pb-4 text-gray-900 text-base font-bold">Login to Start the game</h2>
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      </div>
    </div>
  );
};

export default Home;
