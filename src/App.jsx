// 

import { useState } from "react";

function App() {
  const [items, setItems] = useState([]); // stores the list
  const [text, setText] = useState(""); // stores input value
  const [editingIndex, setEditingIndex] = useState(null); // track editing item

  const handleAdd = () => {
    if (text === "") return;

    if (editingIndex !== null) {
      // Updating existing item
      const updatedList = [...items];
      updatedList[editingIndex] = text;
      setItems(updatedList);
      setEditingIndex(null);
    } else {
      // Adding new item
      setItems([...items, text]);
    }

    setText("");
  };

  const handleDelete = (index) => {
    const updatedList = items.filter((_, i) => i !== index);
    setItems(updatedList);
  };

  const handleEdit = (index) => {
    setText(items[index]);
    setEditingIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple React CRUD</h2>

      <input 
        type="text" 
        placeholder="Enter text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        style={{ padding: "8px" }}
      />

      <button onClick={handleAdd} style={{ marginLeft: "10px", padding: "8px" }}>
        {editingIndex !== null ? "Update" : "Add"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
            <button 
              onClick={() => handleEdit(index)} 
              style={{ marginLeft: "10px" }}>
              Edit
            </button>
            <button 
              onClick={() => handleDelete(index)} 
              style={{ marginLeft: "5px", color: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
