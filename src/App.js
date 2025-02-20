import React, { useState, useEffect } from "react";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";
import Chats from "./components/Chat";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isCart, setIsCart] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const showHanlderCart = () => {
    setIsCart(true)
  }

  const closeHanlderCart = () => {
    setIsCart(false)
  }

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
          {isCart && <Chats onClose={closeHanlderCart} />}
          <button className="hello-button" onClick={showHanlderCart}>Chats</button>
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
