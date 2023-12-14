import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState, useCallback, Suspense } from "react";

import Loader from "../Icons/Loader/Loader";
import ImagePost from "../Post/ImagePost/ImagePost";

import { changeMode } from "../../Features/fullPostSlice";

import "./explore.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Skeleton } from "@mui/material";

const Explore = () => {
    const dispatch = useDispatch();

    const [noOfPost, setNoOfPost] = useState([]);

    const handleFullPost = useCallback(() => {
        dispatch(changeMode("explore"));
    }, [dispatch]);

    const loadData = () => {
        const newArray = [];
        for (let i = 0; i < 6; i++) {
            const num = Math.floor(Math.random() * 1000);
            newArray.push(num);
        }

        setNoOfPost((prev) => [...prev, newArray]);
    };

    useEffect(() => {
        loadData();
        console.log("updated")
    }, []);

    return (
        <div className="explore001">
            <div className="explore002">
                <div className="explore003">
                    <InfiniteScroll style={{ overflow: "hidden" }} dataLength={noOfPost.length} next={loadData} hasMore={true}>
                        {noOfPost.map((user, index) => (
                            <div className="explore004" key={index}>
                                {user?.map((number, idx) => (
                                    <ImagePost key={idx + number + "01" + index} handleFullPost={handleFullPost} number={number} />
                                ))}
                            </div>
                        ))}
                    </InfiniteScroll>
                    <div className="explore004">
                        {Array.from({
                            length: 3,
                        }).map((val, index) => (
                            <div
                                className="explore005 explore006"
                                style={{
                                    aspectRatio: "1/1",
                                }}
                                key={index}
                            >
                                <Skeleton
                                    variant="rectangle"
                                    animation="wave"
                                    sx={{
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="explore013">
                <div className="explore014">
                    <Loader />
                </div>
            </div>
            <Suspense fallback={<></>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Explore;
