import React, { useEffect, useRef, useState } from "react";

import Recents from "./Recents/Recents";
import ResultComponent from "./ResultComponent/ResultComponent";

import { search, searchClick, searchHistory, userClick } from "./functions";

import "./searchComponent.css";

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
        searchClick(e, componentRef, searchRef, searchCloseFunc);
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
                                <div className="search009">
                                    <div className="search010">
                                        <input
                                            type="text"
                                            className="search011"
                                            value={searchQuery}
                                            onChange={handleSearch}
                                        />
                                        <div className="search012">
                                            <div>x</div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="search013" />
                                <div className="search014">
                                    <div className="searchField">
                                        {searchResults.length === 0 && (
                                            <Recents
                                                handleSearchHistory={
                                                    handleSearchHistory
                                                }
                                                recents={recents}
                                                handleUserClick={
                                                    handleUserClick
                                                }
                                            />
                                        )}
                                        {searchResults.map((result) => (
                                            <ResultComponent
                                                result={result}
                                                handleUserClick={
                                                    handleUserClick
                                                }
                                                recents={false}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
