import React, { useState } from "react";
import Layer from "./Layer";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Video");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let url =
      "https://www.google.com/search?q=" +
      encodeURIComponent(
        `intext:"${searchTerm
          .replace(/[^\w\s]/gi, "")
          .replace(/ /g, ".")}" (${getOptionValue(selectedOption)})`
      );
    window.open(url, "_blank");
  };

  const getOptionValue = (option) => {
    switch (option) {
      case "Video":
        return "avi|mkv|mov|mp4|mpg|wmv|avchd|webm";
      case "Audio":
        return "ac3|flac|m4a|mp3|ogg|wav|wma|webm";
      case "Ebook":
        return "CBZ|CBR|CHM|DOC|DOCX|EPUB|MOBI|ODT|PDF|RTF|txt";
      case "Pictures":
        return "bmp|gif|jpg|png|psd|tif|tiff";
      case "Software/Games":
        return "apk|exe|iso|rar|tar|zip|swf";
      case "Compressed":
        return "7z|bz2|gz|iso|rar|zip";
      default:
        return "avi|mkv|mov|mp4|mpg|wmv|avchd|webm";
    }
  };

  return (
    <div className="Clostr">
      <div id="Clostry">
        <h1>Search portal for the Open Directory</h1>

        <div className="boxyt">
          <span id="letter1">Research, Discover & Archive with </span>

          {/* <span id="letter1">A</span>
          <span id="letter2">R</span>
          <span id="letter3">U</span>
          <span id="letter4">N</span>
          <span id="letter4">-</span>
          <span id="letter1">S</span>
          <span id="letter2">H</span>
          <span id="letter3">A</span>
          <span id="letter4">H</span> */}
        </div>

        <form onSubmit={handleFormSubmit}>
          <Layer />
          <div className="gripy">
            <div id="search-bar">
              <div id="dropdown">
                <select value={selectedOption} onChange={handleOptionChange}>
                  <option value="Video">Video</option>
                  <option value="Audio">Audio</option>
                  <option value="Ebook">Ebook</option>
                  <option value="Pictures">Pictures</option>
                  <option value="Software/Games">Software/Games</option>
                  <option value="Compressed">Compressed</option>
                </select>
              </div>
            </div>
            <div className=" rotter">
              <input
                id="search-box"
                placeholder="Search here ..."
                autoFocus
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
            <button id="search-button" type="submit">
              <i className="fal fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchPage;
