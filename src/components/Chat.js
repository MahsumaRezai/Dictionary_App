import React, { useState, useEffect } from "react";
import "../styles/Footer.css";

const Chats = (props) => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  // تابع برای پاک کردن تاریخچه جستجو
  const clearSearchHistory = () => {
    localStorage.removeItem("searchHistory"); // یا برای پاک کردن کامل localStorage.clear()
    setSearchHistory([]); // به روزرسانی وضعیت برای حذف آیتم‌ها از رابط کاربری
  };

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
      <button className="btn" onClick={props.onClose}>Close</button>
      {/* دکمه جدید برای پاک کردن تاریخچه جستجو */}
      <button className="btn" onClick={clearSearchHistory}>Clear History</button>
    </div>
  );
};

export default Chats;
