import React, { useEffect, useState } from "react";

import ResultComponent from "../ResultComponent/ResultComponent";

import { loadRecents } from "../functions";

import "./recents.css";

const Recents = ({ handleSearchHistory, handleUserClick, recents }) => {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("search-history")) {
            loadRecents(setSearchHistory);
        }
    }, [recents]);
    
    return (
        <div className="recents001">
            <div className="recents002">
                <span className="recents003">Recents</span>
                <div
                    onClick={() => {
                        handleSearchHistory(-1, "clear");
                    }}
                    className="recents004"
                >
                    Clear
                </div>
            </div>
            <ul className="recents005">
                {searchHistory.map((result) => (
                    <ResultComponent
                        result={result}
                        handleSearchHistory={handleSearchHistory}
                        handleUserClick={handleUserClick}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Recents;
