import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts }) => {
  return (
    <div>
      <h1>User Feedback</h1>

      <Link to="/add">
        <button className="add-btn">Add New Post</button>
      </Link>

      <div className="cards">
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((item) => (
            <div className="card" key={item.id}>
              <h2>{item.Title}</h2>
              <p className="date">{item.Datetime}</p>
              <p className="body">{item.Body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
