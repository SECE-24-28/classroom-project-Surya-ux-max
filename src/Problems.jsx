// Problems.jsx
import React from "react";

const Problems = ({ problems, onSelect }) => {
  return (
    <div className="problems-container">
      <h2>🔥 LeetCode Problems</h2>

      {problems.map((problem) => (
        <div
          className="problem-card"
          key={problem.id}
          onClick={() => onSelect(problem)}
        >
          <h3>{problem.id}. {problem.title}</h3>
          <p className={`difficulty ${problem.difficulty.toLowerCase()}`}>
            {problem.difficulty}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Problems;
