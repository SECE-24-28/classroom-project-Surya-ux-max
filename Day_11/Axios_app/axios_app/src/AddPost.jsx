import React, { useState } from "react";
import api from "./api/post";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      Title: title,
      Body: body,
      Datetime: new Date().toLocaleString(),
    };

    try {
      await api.post("/Feedback", newPost);
      navigate("/"); // redirect to home page after saving
    } catch (err) {
      console.log("Post Error:", err);
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddPost;
