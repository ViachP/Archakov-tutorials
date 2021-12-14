import React from "react";
import "../index.css";
import ProfileComp from "./components/classComp";
import Profile from "./components/funcComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
          <br />
          <ProfileComp name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
        </div>
      </header>
    </div>
  );
}

export default App;
