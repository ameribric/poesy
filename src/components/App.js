import React, { useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const request = async () => {
    let req = await fetch('http://localhost:8004/poems')
    let res = await req.json()
    console.log(res)
  }
  request()

const [showButton, setShowButton] =useState(false)

  return (
    <div className="app">
      <div className="sidebar">
        <button>Show/hide new poem form</button>
        {{showButton} ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;
