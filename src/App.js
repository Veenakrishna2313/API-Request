import React, { useState } from 'react';

import './App.css';
import axios from 'axios';

function App() {

  const [joke,setJoke]=useState("");


  const getJoke= () => {
    axios.get("https://api.jokes.one/jod?category=animal").then(
      (response)=>{
       setJoke(response.data.contents.jokes[0].joke.text );
    }
    );
  };

  return (
    <div className="Content">
      Hello Youtube
      <div>
        <button onClick={getJoke}>Get Joke</button>
       <div>{joke}</div> 
        
      </div>
    </div>
  );
}

export default App;
