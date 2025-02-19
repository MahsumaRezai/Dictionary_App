import React, { useState, useEffect } from "react";
import Results from "./Results";
import Photos from "./Photos";
import PropTypes from "prop-types";
import "../styles/Dictionary.css";

const Dictionary = ({ defaultKeyword, onSaveChat }) => {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const search = () => {
      const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      const pexelsApiHeaders = { Authorization: pexelsApiKey };

      // استفاده از fetch به جای axios
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

    if (!loaded) {
      search();
      setLoaded(true);
    }
  }, [keyword, loaded]);

  const handlePexelsResponse = (data) => {
    setPhotos(data.photos);
  };

  const handleDictionaryResponse = (data) => {
    setResults(data[0]);
    // ذخیره لغت جستجو شده
    onSaveChat(keyword); // فراخوانی تابع ذخیره لغت
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoaded(false);
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
            placeholder={defaultKeyword}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <div className="suggestions">
          Suggested concepts: cat, tree, code, sun...
        </div>
      </section>
      {results && <Results results={results} />}
      {photos && <Photos photos={photos} />}
    </div>
  );
};

Dictionary.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  onSaveChat: PropTypes.func.isRequired, // اضافه کردن نوع تابع
};

export default Dictionary;
