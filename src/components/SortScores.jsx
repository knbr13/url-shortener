const SortScores = ({scoreField, setScoreField}) => {
    const handleToFlipsScores = async () => {
        if(scoreField !== "flipsScore"){
            setScoreField("flipsScore");
        }
    }
    const handleToTimeScores = async () => {
        if(scoreField !== "timeScore"){
            setScoreField("timeScore");
        }
    }
  return (
    <div className="w-11/12 text-center md:w-9/12 lg:w-7/12 flex m-auto justify-around bg-gray-300 bg-opacity-50 rounded-lg">
        <p className={"text-gray-800 p-2 hover:bg-gray-300 rounded-lg cursor-pointer" + (scoreField == "flipsScore" ? " bg-gray-300":"")} onClick={handleToFlipsScores}>Flips Score</p>
        <p className={"text-gray-800 p-2 hover:bg-gray-300 rounded-lg cursor-pointer" + (scoreField == "timeScore" ? " bg-gray-300":"")} onClick={handleToTimeScores}>Time Score</p>
      </div>
  )
}

export default SortScores