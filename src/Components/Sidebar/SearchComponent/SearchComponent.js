import React, { useEffect, useRef, useState } from "react";

import { search, searchHistory, userClick } from "./functions";

import "./searchComponent.css";
import InputContainer from "./InputContainer";
import Result from "./Result/Result";

const SearchComponent = ({ searchDiv, searchCloseFunc, searchRef }) => {
    const componentRef = useRef(null);

    const [recents, setRecents] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        search(e, setSearchResults, setSearchQuery);
    };

    const handleSearchHistory = (id, method) => {
        searchHistory(id, method);
        setTimeout(() => {
            setRecents((prev) => ++prev);
        }, 500);
    };

    const handleUserClick = (id) => {
        userClick(id, searchCloseFunc, setSearchQuery, setSearchResults);
    };

    const handleSearchClose = (e) => {
        if (!(componentRef.current.contains(e.target) || searchRef.current.contains(e.target))) {
            searchCloseFunc(false);
        }
    };

    const handleClearInput = (e) => {
        setSearchQuery("");
        setSearchResults(() => []);
    };

    useEffect(() => {
        window.addEventListener("click", handleSearchClose);

        return () => {
            window.removeEventListener("click", handleSearchClose);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div
            ref={componentRef}
            className="search001"
            style={{
                display: `${searchDiv ? "block" : "none"}`,
            }}
        >
            <div className="search002">
                <div className="search003">
                    <div className="search004">
                        <div>
                            <span className="search005">Search</span>
                        </div>
                    </div>
                    <div className="search006">
                        <div className="search007">
                            <div className="search008">
                                <InputContainer searchQuery={searchQuery} handleSearch={handleSearch} clearFunc={handleClearInput} />
                                <hr className="search013" />
                                <Result
                                    searchResults={searchResults}
                                    handleSearchHistory={handleSearchHistory}
                                    recents={recents}
                                    handleUserClick={handleUserClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
