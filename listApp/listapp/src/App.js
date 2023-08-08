import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');     // State to hold the input text
  const [items, setItems] = useState([]);   // State to hold the list of items

  // Handler for the input field
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handler for the button to add text to the list
  const handleAddToList = () => {
    setItems(prevItems => [...prevItems, text]);
    setText('');  // Clear the input field
  };

  return (
    <div className="App">
      <h1>Text to List App</h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <button onClick={handleAddToList}>Add to List</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
