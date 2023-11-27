import React, { useEffect, useState, memo } from "react";

import { loadRecents } from "../functions";

import ResultComponent from "../ResultComponent/ResultComponent";

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
                    <ResultComponent key={result.id} result={result} handleSearchHistory={handleSearchHistory} handleUserClick={handleUserClick} />
                ))}
            </ul>
        </div>
    );
};

export default memo(Recents);
