import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  //update env variable

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/data`)
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Indraprastha Sewa Samiti Ramleela 2024</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
