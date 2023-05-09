const Home = ({login}) => {
  return (
    <div>
      <h2>Login to Start the game</h2>
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      
    </div>
  );
};

export default Home;
