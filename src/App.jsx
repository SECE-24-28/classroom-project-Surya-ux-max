// App.jsx
import { useState } from "react";
import { problems } from "./data";
import Problems from "./Problems";

function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <div className="app">
      <h1>🚀 LeetCode Clone</h1>

      {!selectedProblem ? (
        <Problems problems={problems} onSelect={setSelectedProblem} />
      ) : (
        <div className="problem-details">
          <h2>{selectedProblem.title}</h2>
          <p className={`difficulty ${selectedProblem.difficulty.toLowerCase()}`}>
            Difficulty: {selectedProblem.difficulty}
          </p>
          <p>{selectedProblem.description}</p>

          <button onClick={() => setSelectedProblem(null)}>⬅ Back</button>
        </div>
      )}
    </div>
  );
}

export default App;
