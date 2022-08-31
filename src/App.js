import React from "react";
import Posts from './components/pages/Posts'
import NavBar from "./components/NavBar";
import "./components/styles/App.css";

function App() {
  // const arr = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];

  return (
    <div className="App">
      <NavBar />
      {/* <div>
      {arr.map((element, index) => {
        if (element % 6 === 0) {
          return <hr key={index}/>;
        }

        return <h2 key={index}>{element}</h2>;
      })}
    </div> */}
      <Posts/>
    </div>
  );
}

export default App;
