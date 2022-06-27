import { useEffect, useState } from "react";

export default function ScoreKeeper() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    const scoreFromLocalStorage = localStorage.getItem("score");
    if (scoreFromLocalStorage) {
      setScore(+scoreFromLocalStorage);
    }
  }, []);
  const changeScore = (add = 1) => {
    localStorage.setItem("score", score + add);
    setScore((prev) => prev + add);
  };

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => changeScore()}>+</button>
      <button onClick={() => changeScore(-1)}>-</button>
    </div>
  );
}
