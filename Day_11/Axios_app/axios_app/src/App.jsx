import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import api from "./api/post";
import Search from "./Search";
import Home from "./Home";
import AddPost from "./AddPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetch all feedback from JSON server
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/Feedback");
        setPosts(res.data);
      } catch (err) {
        console.log("API fetch error:", err);
      }
    };

    fetchPosts();
  }, []);

  // Search filter for title + body
  useEffect(() => {
      const filtered = posts.filter(
        (p) =>
          p.Title.toLowerCase().includes(search.toLowerCase()) ||
          p.Body.toLowerCase().includes(search.toLowerCase())
      );

      setSearchResults(filtered);
  }, [search, posts]);

  return (
    <Router>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        
        {/* Search Box */}
        <Search search={search} setSearch={setSearch} />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home posts={searchResults} />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
