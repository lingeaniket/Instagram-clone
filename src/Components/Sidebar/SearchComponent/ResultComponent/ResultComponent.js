import React from "react";
import { useNavigate } from "react-router-dom";

import Close from "../../../Icons/Close/Close";

import "./resultComponent.css";
import RoundedImage from "../../../RoundedImage/RoundedImage";

const ResultComponent = ({ result, handleUserClick, recents = true, handleSearchHistory }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        handleUserClick(result.id);
        navigate(`/p/${result.id}`);
    };

    return (
        <div className="searchResults">
            <div className="resComp001">
                <div className="resComp002">
                    <div className="resComp003">
                        <div className="resComp004" onClick={handleClick}>
                            <span className="resComp005">
                                <RoundedImage url={result.avatar} />
                            </span>
                        </div>
                        <div className="resComp006" onClick={handleClick}>
                            <div className="resComp007">
                                <div className="resComp008">
                                    <div className="resComp009">
                                        <span className="resComp010"> {result.username}</span>
                                    </div>
                                    <div className="resComp011">
                                        {result.first_name} {result.last_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {recents && (
                            <div
                                onClick={() => {
                                    handleSearchHistory(result.id, "remove");
                                }}
                                className="resComp012"
                            >
                                <div className="resComp013">
                                    <div className="resComp014" style={{}}>
                                        <Close
                                            color="rgb(115, 115, 115)"
                                            size="16"
                                            title="remove"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultComponent;
