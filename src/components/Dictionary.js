import React, { useState, useEffect } from "react";
import Results from "./Results";
import Photos from "./Photos";
import PropTypes from "prop-types";
import "../styles/Dictionary.css";

const Dictionary = ({ defaultKeyword }) => {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const search = () => {
      const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      const pexelsApiHeaders = { Authorization: pexelsApiKey };

      fetch(dictionaryApiUrl)
        .then((response) => response.json())
        .then(handleDictionaryResponse)
        .catch((error) => {
          console.error("Error fetching dictionary data:", error);
        });

      fetch(pexelsApiUrl, { headers: pexelsApiHeaders })
        .then((response) => response.json())
        .then(handlePexelsResponse)
        .catch((error) => {
          console.error("Error fetching photos:", error);
        });
    };

    if (keyword) {
      search();
      // ذخیره‌سازی لغت جستجو شده در localStorage
      const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
      if (!searchHistory.includes(keyword)) {
        searchHistory.push(keyword);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      }
    }
  }, [keyword]);

  const handlePexelsResponse = (data) => {
    setPhotos(data.photos);
  };

  const handleDictionaryResponse = (data) => {
    setResults(data[0]);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword(event.target.keyword.value);
  };

  return (
    <div className="Dictionary">
      <section>
        <div className="subheading">Search the words</div>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            name="keyword"
            onChange={handleKeywordChange}
            placeholder="Type a Word"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </section>
      {results && <Results results={results} />}
      {photos && <Photos photos={photos} />}
    </div>
  );
};

Dictionary.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
};

export default Dictionary;