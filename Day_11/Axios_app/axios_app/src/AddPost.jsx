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
      navigate("/"); // redirect back home
    } catch (err) {
      console.log("Post Error:", err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Add New Feedback</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={6}
          style={{ padding: "10px", fontSize: "16px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            background: "black",
            color: "white",
            border: "none",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPost;
