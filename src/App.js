import React, { useState } from "react";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  // اضافه کردن حالت دارک مود
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
          {/* دکمه برای تغییر حالت */}
          <button className="toggle-button" onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
        <footer className="mt-5 footer">
          <div className="footer-content">
            <p className="credit">
              Coded by{" "}
              <a
                href="https://github.com/MahsumaRezai"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Masoumeh Nowrozi
              </a>
              {" "}
              <a
                href="https://github.com/MahsumaRezai"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;