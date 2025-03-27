// src/components/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [wickets, setWickets] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Score: {score}</p>
      <p>Balls: {balls}</p>
      <p>Wickets: {wickets}</p>

      <button onClick={() => setScore(score + 1)}>Increment Score</button>
      <button onClick={() => setBalls(balls + 1)}>Increment Balls</button>
      <button onClick={() => setWickets(wickets + 1)}>Increment Wickets</button>
    </div>
  );
}

export default Counter;