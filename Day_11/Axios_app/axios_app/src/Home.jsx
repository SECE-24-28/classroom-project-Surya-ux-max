import React from "react";

const Home = ({ searchResults }) => {
  return (
    <div className="container">
      <h1 className="title">User Feedback</h1>

      <div className="cards">
        {searchResults.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.Title}</h2>
            <p className="date">{item.Datetime}</p>
            <p className="body">{item.Body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
