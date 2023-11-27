import React, { useEffect, useRef, useState, memo } from "react";

import { search, searchHistory, userClick } from "../SearchComponent/functions";

import Result from "../SearchComponent/Result/Result";
import InputContainer from "../SearchComponent/InputContainer";

import "./styles.css";

const MobileSearchComponent = () => {
    const searchRef = useRef(null);
    const containerRef = useRef(null);

    const [recents, setRecents] = useState(0);
    const [searchDiv, setSearchDiv] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
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
        if (!((containerRef.current && containerRef.current.contains(e.target)) || (searchRef.current && searchRef.current.contains(e.target)))) {
            searchCloseFunc(false);
        } else {
            searchCloseFunc(true);
        }
    };


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
        <div className="mobilev01">
            <div ref={searchRef} className="w_100">
                <InputContainer searchQuery={searchQuery} handleSearch={handleSearch} clearFunc={handleClearInput} />
            </div>
            <div
                className="mobilev02"
                style={{
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

export default memo(MobileSearchComponent);
