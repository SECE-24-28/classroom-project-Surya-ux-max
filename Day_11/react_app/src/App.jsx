import { useEffect, useState } from "react";
import "./App.css";
import api from "../Api/post";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/users");
        setEmployees(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
return (
  <div className="list">
    {employees.map((emp) => (
      <div className="card" key={emp.id}>
        <h2>{emp.name}</h2>
        <p className="role">{emp.role}</p>

        <p><strong>Experience:</strong> {emp.experience}</p>
        <p><strong>Location:</strong> {emp.location}</p>
        <p><strong>Position Applied:</strong> {emp.positionApplied}</p>

        <p>
          <strong>Status:</strong>{" "}
          <span className={`status ${emp.status.toLowerCase()}`}>
            {emp.status}
          </span>
        </p>

        <h4>Skills:</h4>
        <ul className="skills">
          {emp.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

}

export default App;
