import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>

      <Link to="/add">
        <button className="add-btn">Add New Post</button>
      </Link>

      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.Title}</h2>
            <p>{item.Datetime}</p>
            <p>{item.Body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
