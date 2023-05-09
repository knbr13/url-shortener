import Board from "../components/Board"
import Navbar from "../components/Navbar"

const Game = () => {
  return (
    <div className="p-1 flex flex-col gap-2">
        <Navbar />
        <h2 className="w-full text-center text-gray-800 text-2xl font-bold">Match with SpongeBob</h2>
        <Board />
    </div>
  )
}

export default Game