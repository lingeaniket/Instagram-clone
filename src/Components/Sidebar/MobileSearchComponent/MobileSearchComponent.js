import React, { useEffect, useRef, useState } from "react";
import InputContainer from "../SearchComponent/InputContainer";
import Result from "../SearchComponent/Result/Result";

import { search, searchHistory, userClick } from "../SearchComponent/functions";

const MobileSearchComponent = () => {
    const [recents, setRecents] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const [searchDiv, setSearchDiv] = useState(false);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        setSearchQuery(e.target.value);
        search(e.target.value, setSearchResults);
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

    const searchCloseFunc = (click) => {
        setSearchDiv(click);
    };

    const handleSearchClose1 = (e) => {
        if (!(containerRef.current.contains(e.target) || searchRef.current.contains(e.target))) {
            searchCloseFunc(false);
        } else {
            searchCloseFunc(true);
        }
    };

    const searchRef = useRef(null);
    const containerRef = useRef(null);

    const handleClearInput = (e) => {
        setSearchQuery("");
        setSearchResults(() => []);
    };

    useEffect(() => {
        window.addEventListener("click", handleSearchClose1);

        return () => {
            window.removeEventListener("click", handleSearchClose1);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div
            // onClick={handleSearchClose}
            // ref={searchRef}
            style={{
                width: "268px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "16px",
            }}
        >
            <div ref={searchRef}>
                <InputContainer searchQuery={searchQuery} handleSearch={handleSearch} clearFunc={handleClearInput} />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "50px",
                    width: "375px",
                    boxShadow: "0 4px 12px rgba(0,0,0,.15)",
                    borderRadius: "6px",
                    overflow: "scroll",
                    maxHeight: "70vh",
                    backgroundColor: "white",
                    display: searchDiv ? "block" : "none",
                }}
                ref={containerRef}
            >
                <Result
                    searchResults={searchResults}
                    handleSearchHistory={handleSearchHistory}
                    recents={recents}
                    handleUserClick={handleUserClick}
                />
            </div>
        </div>
    );
};

export default MobileSearchComponent;
