import React from "react";
import Recents from "../Recents/Recents";
import ResultComponent from "../ResultComponent/ResultComponent";

const Result = ({ searchResults, handleSearchHistory, recents, handleUserClick }) => {
    return (
        <div className="search014">
            <div className="searchField">
                {searchResults.length === 0 && (
                    <Recents handleSearchHistory={handleSearchHistory} recents={recents} handleUserClick={handleUserClick} />
                )}
                {searchResults.map((result) => (
                    <ResultComponent result={result} handleUserClick={handleUserClick} recents={false} />
                ))}
            </div>
        </div>
    );
};

export default Result;
