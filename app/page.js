// The Humanizer - Frontend Code

import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [humanizedText, setHumanizedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dummy humanization logic: just capitalize the input text
    const result = inputText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setHumanizedText(result);
  };

  return (
    <div className="App">
      <h1>The Humanizer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text to humanize"
        />
        <button type="submit">Humanize</button>
      </form>
      {humanizedText && (
        <div className="result">
          <h2>Humanized Text:</h2>
          <p>{humanizedText}</p>
        </div>
      )}
    </div>
  );
}

export default App;