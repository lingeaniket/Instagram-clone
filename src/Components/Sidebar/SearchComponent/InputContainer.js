import React from "react";

const InputContainer = ({ searchQuery, handleSearch, clearFunc }) => {
    const handleClear = () => {
        clearFunc();
    };
    return (
        <div className="search009">
            <div className="search010">
                <input type="text" className="search011" value={searchQuery} onChange={handleSearch} placeholder="Search" />
                <div className="search012">
                    <div onClick={handleClear}>x</div>
                </div>
            </div>
        </div>
    );
};

export default InputContainer;
