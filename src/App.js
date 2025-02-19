import React, { useState } from "react";
import Dictionary from "./components/Dictionary";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
          <button className="toggle-button" onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;