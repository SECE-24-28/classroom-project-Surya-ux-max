// 

import { useState } from "react"; // use state is a react hook used by react to remember what it stores

function App(){
  const[items,setItems] = useState([]);  // creating , storing items using useState , setItems will help in changing updating functions

  const[text,setText] = useState(""); // used for text input , setText --- updates the input text

  const[editingIndex,setEditingIndex] = useState(null); // react will remember what Text they are editing

  const handleAdd = () =>{
    if(text === "") return;  // it will check text box , if it contains any text else it will return empty 

    if(editingIndex!=null){ // it means we are editing the existing item , id editingTools==null means adding new items

      const updatedList = [...items]; // copy of file
      updatedList[editingIndex] = text; // replace the item being edited 
      setItems(updatedList); // save the updatedList
      setEditingIndex( null); // stop the editing mode
    }
    else{
      setItems([...items,text]); // adding new item
    }
    setText(""); // clears the text box 
  };

  const handleDelete = (index)=>{
    const updatedList = items.filter((_,i)=>i !== index);
    setItems(updatedList);
  };

  const handleEdit = (index) =>{
    setText(items[index]);
    setEditingIndex(index);
  };

  return (
    
    <div style={{ padding: "20px" , justifyContent:"center",alignItems:"center",display:"flex"
                  
    }}>
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

   
