import React, { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { generateRandomUsersAndPosts } from "./function";
import { changeMode } from "../../Features/fullPostSlice";

import Loader from "../Icons/Loader/Loader";
import ImagePost from "./ImagePost/ImagePost";

import { Skeleton } from "@mui/material";

import "./explore.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Explore = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    const handleFullPost = useCallback(() => {
        dispatch(changeMode("explore"));
    }, [dispatch]);

    useEffect(() => {
        const generateRandom = async () => {
            const data1 = await generateRandomUsersAndPosts();
            setPosts((prev) => [...prev, data1]);
            const data2 = await generateRandomUsersAndPosts();
            setPosts((prev) => [...prev, data2]);
        };

        generateRandom();
    }, []);

    return (
        <div className="explore001">
            <div className="explore002">
                <div className="explore003">
                    <InfiniteScroll
                        style={{ overflow: "hidden" }}
                        dataLength={posts.length}
                        next={async () => {
                            const data = await generateRandomUsersAndPosts();
                            setPosts((prev) => [...prev, data]);
                        }}
                        hasMore={true}
                    >
                        {posts.map((user, index) => (
                            <div className="explore004" key={index}>
                                {user?.map((post, idx) => (
                                    <ImagePost
                                        key={idx + index}
                                        handleFullPost={handleFullPost}
                                        post={post.post}
                                        account={post.account}
                                    />
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
            <Outlet />
        </div>
    );
};

export default Explore;
