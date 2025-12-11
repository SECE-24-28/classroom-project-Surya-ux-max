import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/post";
import Home from "./Home";
import Search from "./Search";

function App() {
  const [post, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetch feedback data
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

  // FILTER the search results
  useEffect(() => {
    const results = post.filter((p) =>
      p.Title.toLowerCase().includes(search.toLowerCase()) ||
      p.Body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [post, search]);

  return (
    <>
      {/* Search component */}
      <Search search={search} setSearch={setSearch} />

      {/* Display filtered results */}
      <Home searchResults={searchResults} />
    </>
  );
}

export default App;
