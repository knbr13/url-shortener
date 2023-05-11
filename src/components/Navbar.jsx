import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-around text-black bg-opacity-50 bg-gray-300 w-10/12 m-auto rounded-md">
        <Link className="text-gray-800" to={"/game"}>Game</Link>
        <Link className="text-gray-800" to={"/leaderboard"}>leaderboard</Link>
    </div>
  )
}

export default Navbar