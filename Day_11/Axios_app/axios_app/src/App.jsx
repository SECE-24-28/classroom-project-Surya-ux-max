import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/post";
import Home from "./Home";

function App() {
  const [post, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetch posts from JSON server
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/Feedback");
        setPosts(res.data);
      } catch (err) {
        console.log("API Error:", err);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search input
  useEffect(() => {
    const results = post.filter((p) =>
      p.Title.toLowerCase().includes(search.toLowerCase()) ||
      p.Body.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(results);
  }, [post, search]); // Runs whenever posts OR search text changes

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="Search feedback..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <Home searchResults={searchResults} />
    </>
  );
}

export default App;
