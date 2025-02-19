import React, { useState } from "react";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  // اضافه کردن حالت دارک مود
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // ذخیره لغات جستجو شده

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSaveChat = (word) => {
    // افزودن لغت جدید به تاریخچه چت
    setChatHistory((prevHistory) => [...prevHistory, word]);
  };

  const handleClearChat = () => {
    // پاک کردن تاریخچه چت
    setChatHistory([]);
  };

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
          {/* دکمه برای تغییر حالت در بالا سمت راست */}
          <button className="toggle-button" onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <main>
          <Dictionary
            defaultKeyword="aesthetic"
            onSaveChat={handleSaveChat} // ارسال تابع ذخیره لغت به Dictionary
          />
        </main>

        {/* دکمه‌های چت و پاک کردن چت */}
        <div className="chat-buttons">
          <button onClick={() => alert(`Saved words: ${chatHistory.join(", ")}`)}>
            چت
          </button>
          <button onClick={handleClearChat}>پاک کردن چت</button>
        </div>

        <footer className="mt-5 footer">
          <div className="footer-content">
            <p className="credit">
              Coded by{" "}
              <a
                href="https://github.com/MahsumaRezai"
                target="_blank"
                className="footer-link"
              >
                Masoumeh Nowrozi
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
