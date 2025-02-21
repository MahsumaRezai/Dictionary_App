import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import Modal from "./Modal";

const Chats = (props) => {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setSearchHistory(history);
    }, []);
    const clearSearchHistory = () => {
        localStorage.removeItem("searchHistory");
        setSearchHistory([]);
    };

    return (
        <Modal onClose={props.onClose}>
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
                <div className="button">
                    <button className="btn" onClick={props.onClose}>Close</button>
                    <button className="btn-remve" onClick={clearSearchHistory}>Clear History</button>
                </div>
            </div>
        </Modal>
    );
};

export default Chats;
