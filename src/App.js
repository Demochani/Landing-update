import React from "react";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import "./components/styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Posts />
    </div>
  );
}

export default App;
