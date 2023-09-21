import React, { useEffect, useState } from "react";
import ResultComponent from "../ResultComponent/ResultComponent";
import { loadRecents } from "../functions";

const Recents = ({ handleSearchHistory, handleUserClick,recents }) => {
    const [searchHistory, setSearchHistory] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("search-history")) {
            loadRecents(setSearchHistory);
        }
    }, [recents]);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                position: "relative",
                flexGrow: 1,
                overflowY: "auto",
            }}
        >
            <div
                style={{
                    margin: "6px 24px 8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "4px",
                }}
            >
                <span
                    style={{
                        lineHeight: "20px",
                        fontWeight: 600,
                    }}
                >
                    Recents
                </span>
                <div
                    onClick={() => {
                        handleSearchHistory(-1, "clear");
                    }}
                    style={{
                        fontWeight: 600,
                        color: "rgb(0,149,246)",
                        cursor: "pointer",
                    }}
                >
                    Clear
                </div>
            </div>
            <ul
                style={{
                    border: 0,
                    margin: "8px 0",
                    padding: 0,
                }}
            >
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
