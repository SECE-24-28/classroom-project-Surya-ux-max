import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/post";
import Search from "./Search";
import Home from "./Home";
import AddPost from "./AddPost";

function App() {
  const [post, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/Feedback");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts(); // correct spelling
  }, []);

  useEffect(() => {
    const filtered = post.filter((p) =>
      p.Title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filtered);
  }, [search, post]);

  return (
    <Router>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <Search search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home posts={searchResults} />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
