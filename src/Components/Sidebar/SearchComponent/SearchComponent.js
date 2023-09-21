import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { apiSite } from "../../../Website/website";
import ResultComponent from "./ResultComponent/ResultComponent";
import Recents from "./Recents/Recents";

import "./searchComponent.css";

const SearchComponent = ({ searchDiv, searchCloseFunc,searchRef }) => {
    const componentRef = useRef(null);
    const [recents, setRecents] = useState(0);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = async (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim().length > 0) {
            await axios
                .get(`${apiSite}/users/q/${e.target.value.trim()}`)
                .then((response) => {
                    setSearchResults(() => response.data);
                });
        } else {
            setSearchResults([]);
        }
    };

    const handleSearchHistory = (id, method) => {
        console.log(method, " is called");
        const history =
            JSON.parse(localStorage.getItem("search-history")) || [];
        if (method === "add") {
            if (history.includes(id)) {
                history.splice(history.indexOf(id), 1);
                localStorage.setItem(
                    "search-history",
                    JSON.stringify([id, ...history])
                );
            } else {
                localStorage.setItem(
                    "search-history",
                    JSON.stringify([id, ...history])
                );
            }
        } else if (method === "remove") {
            history.splice(history.indexOf(id), 1);
            localStorage.setItem("search-history", JSON.stringify(history));
        } else if (method === "clear") {
            localStorage.setItem("search-history", JSON.stringify([]));
        }
        setRecents((prev) => ++prev);
    };

    const handleUserClick = (id) => {
        searchCloseFunc(false);
        handleSearchHistory(id, "add");
        setSearchQuery("");
        setSearchResults([]);
    };

    const handleSearchClose = (e) => {
        if (!(componentRef.current.contains(e.target) || searchRef.current.contains(e.target))) {
            // alert("clicked outside");
            searchCloseFunc(false);
        }
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
            style={{
                position: "absolute",
                left: "215px",
                display: `${searchDiv ? "block" : "none"}`,
            }}
        >
            <div
                style={{
                    boxShadow: "4px 0px 24px rgba(0,0,0,0.15)",
                    backgroundColor: "white",
                    borderRight: "1px solid rgb(219,219,219)",
                    borderRadius: 0,
                    borderTopRightRadius: "16px",
                    borderBottomRightRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    width: "379px",
                    padding: "8px 0 8px 0",
                    overflowY: "auto",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        width: "100%",
                        overflowY: "hidden",
                    }}
                >
                    <div
                        style={{
                            padding: "12px 14px 36px 24px",
                            margin: "0 8px",
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    fontWeight: "600",
                                    fontSize: "24px",
                                }}
                            >
                                Search
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            justifyContent: "flex-start",
                            alignSelf: "auto",
                            position: "relative",
                            alignItems: "stretch",
                            alignContent: "stretch",
                            overflowY: "visible",
                            overflowX: "visible",
                            minWidth: 0,
                            minHeight: 0,
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                maxHeight: "inherit",
                                justifyContent: "inherit",
                                flexGrow: "inherit",
                                alignContent: "inherit",
                                minWidth: "inherit",
                                height: "inherit",
                                minHeight: "inherit",
                                width: "inherit",
                                position: "relative",
                                maxWidth: "inherit",
                                alignItems: "inherit",
                                flexDirection: "inherit",
                                flexShrink: "inherit",
                                display: "inherit",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        margin: "0 16px",
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                        alignItems: "stretch",
                                        overflow: "visible",
                                    }}
                                >
                                    <div
                                        style={{
                                            minWidth: "125px",
                                            width: "100%",
                                            marginBottom: "24px",
                                            display: "flex",
                                            height: "40px",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            position: "relative",
                                        }}
                                    >
                                        <input
                                            type="text"
                                            style={{
                                                paddingTop: "3px",
                                                fontSize: "16px",
                                                zIndex: 2,
                                                width: "100%",
                                                paddingBottom: "3px",
                                                height: "100%",
                                                paddingLeft: "16px",
                                                paddingRight: "16px",
                                                border: 0,

                                                backgroundColor:
                                                    "rgb(239,239,239)",
                                                outline: "none",
                                                borderRadius: "8px",
                                                lineHeight: "18px",
                                            }}
                                            value={searchQuery}
                                            onChange={handleSearch}
                                        />

                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                zIndex: 3,
                                                right: "12px",
                                                cursor: "pointer",
                                                height: "20px",
                                                width: "20px",
                                                fontSize: "10px",
                                                display: "flex",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor:
                                                    "rgb(210,210,210)",
                                            }}
                                        >
                                            <div>x</div>
                                        </div>
                                    </div>
                                </div>
                                <hr
                                    style={{
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "rgb(219,219,219)",
                                    }}
                                />
                                {/* this div is common to both search results and recents */}
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        height: "100%",
                                        overflowY: "auto",
                                        position: "relative",
                                    }}
                                >
                                    <div className="searchField">
                                        {/* if it was not searched use this component */}
                                        {/* else use <Recents/> */}
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
