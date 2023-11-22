import React, { useEffect, useState } from "react";
import Image from "../Image";
import "./imageComponent.css";
import { useDispatch } from "react-redux";
import { changeImageid } from "../../../Features/newPostDetailsSlice";

const ImageComponent = ({ handleStep }) => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState();
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();

    const handlePhoto = (e) => {
        setSelectedPhoto(Number(e.target.id));
    };

    const handleSelectedPhoto = () => {
        dispatch(changeImageid(selectedPhoto));
        handleStep(3);
    };

    const handlePrev = () => {
        setSelectedPhoto(null);
        setPage((prev) => prev - 1);
    };
    const handleNext = () => {
        setSelectedPhoto("");
        setPage((prev) => prev + 1);
    };
    useEffect(() => {
        // alert("runned")
        const getPhotoId = async () => {
            setPhotos(() => {
                return [];
            });
            for (let i = page * 10; i < page * 10 + 9; i++) {
                setPhotos((prev) => [...prev, i]);
            }
        };
        getPhotoId();
    }, [page]);
    return (
        <div className="img_post001">
            <div className="img_post002">
                {photos.map((val) => (
                    <div
                        style={{
                            border: `2px solid ${selectedPhoto === val ? "blue" : "white"}`,
                            width: "33%",
                            margin: "2px 0",
                            position: "relative",
                        }}
                        onClick={handlePhoto}
                        key={val}
                    >
                        <Image id={val} />
                        {selectedPhoto === val && <div className="img_post004"></div>}
                    </div>
                ))}
            </div>
            <div className="img_post003">
                <div>
                    <button
                        className={`nav_buttons ${page === 0 ? "nav_buttons_dis" : "nav_buttons_act"}`}
                        disabled={page === 0}
                        onClick={handlePrev}
                    >
                        Prev
                    </button>
                </div>
                {selectedPhoto || selectedPhoto === 0 ? (
                    <div>
                        <button
                            className="nav_buttons"
                            style={{
                                backgroundColor: "#179500",
                                cursor: "pointer",
                            }}
                            onClick={handleSelectedPhoto}
                        >
                            Continue to post
                        </button>
                    </div>
                ) : null}
                <div>
                    <button className="nav_buttons nav_buttons_act" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
