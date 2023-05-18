import { Link } from "react-router-dom";

const Home = ({ login }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center m-auto w-full h-screen">
      <div className="w-fit sm:w-4/12 md:w-3/12 lg:w-2/12 p-2 text-center bg-gray-300 rounded-lg">
        <h2 className="pb-4 text-gray-900 text-base font-bold">Login to Start the game</h2>
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      </div>
      <div className="w-fit sm:w-4/12 md:w-3/12 p-2 lg:w-2/12 p-2 text-center bg-gray-300 rounded-lg">
         <Link to='/game'>
         <button className="text-sm text-white">
          Or give it a try before logging in
         </button>
         </Link>
         <p className="text-xs text-gray-800">Note: your score won't be saved</p>
      </div>
    </div>
  );
};

export default Home;
