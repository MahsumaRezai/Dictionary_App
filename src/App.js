import React, { useState, useEffect } from "react";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
          <button className="toggle-button" onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="hello-button">hello</button>
        </header>
        <main>
          {loading ? (
            <LoadingSpinner />
          ) : (
              <Dictionary defaultKeyword="aesthetic" />
            )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
