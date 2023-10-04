import React, { useState, useEffect } from "react";
import axios from "axios";


const Translation = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("es");
  const [translation, setTranslation] = useState("");
  const [supportedLanguages, setSupportedLanguages] = useState([]);

  useEffect(() => {
    const fetchSupportedLanguages = async () => {
      try {
        const response = await axios.get(
          "https://translation.googleapis.com/language/translate/v2/languages",
          {
            params: {
              key: process.env.REACT_APP_MY_API_KEY,
            },
          }
        );

        const languages = response.data.data.languages.map((language) => ({
          code: language.language,
        }));

        setSupportedLanguages(languages);
      } catch (error) {
        console.error(error);
        alert("Error occurred while fetching supported languages");
      }
    };

    fetchSupportedLanguages();
  }, []);

  const getTranslatedLanguage = (code) => {
    return new Intl.DisplayNames(['en'], {
        type: 'language'
      }
      ).of(code)
  }


  const translateText = async () => {
    try {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        null,
        {
          params: {
            q: text,
            target: language,
            key: process.env.REACT_APP_MY_API_KEY,
          },
        }
      );

      const translatedText = response.data.data.translations[0].translatedText;
      setTranslation(translatedText);
    } catch (error) {
      console.error(error);
      alert("Error occurred during translation");
    }
  };
          
  
  const handleSubmit = (e) => {
    e.preventDefault();
    translateText();
  };

  return (
    <div className="translation-container">
      <h1 className="app-title">Translation App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text to translate:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            cols={40}
            className="text-input"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="language">Target language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code} >
                {getTranslatedLanguage(lang.code)}
                    </option>
            ))}
          </select>
        </div>
        <button type="submit" className="translate-button">
          Translate
        </button>
      </form>
      {translation && (
        <div className="translation-result">
          <h2>Translation</h2>
          <p>{translation}</p>
        </div>
      )}
    </div>
  );
};

export default Translation;
