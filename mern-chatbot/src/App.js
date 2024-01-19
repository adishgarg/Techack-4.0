import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleUserInput = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-response', { prompt: userInput });
      setBotResponse(response.data.botResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleUserInput}>Submit</button>
      <div>
        <strong>User:</strong> {userInput}
      </div>
      <div>
        <strong>Bot:</strong> {botResponse}
      </div>
    </div>
  );
}

export default App;
