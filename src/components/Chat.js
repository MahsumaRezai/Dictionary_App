import React, { useState, useEffect } from "react";
import "../styles/Footer.css";

const Chats = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  return (
    <div className="Chats">
      <h2>Search History</h2>
      {searchHistory.length > 0 ? (
        <ul>
          {searchHistory.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      ) : (
        <p>No search history available.</p>
      )}
    </div>
  );
};

export default Chats;
