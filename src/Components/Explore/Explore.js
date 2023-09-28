import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./explore.css";
import { generateRandomUsersAndPosts } from "./function";
// import Reel from '../Icons/Reel/Reel'
import Loader from "../Icons/Loader/Loader";
import ImagePost from "./ImagePost/ImagePost";
import { Outlet } from "react-router-dom";
// import ReelPost from "./ReelPost/ReelPost";

const Explore = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const generateRandom = async () => {
            const data1 = await generateRandomUsersAndPosts();
            const data2 = await generateRandomUsersAndPosts();

            setPosts((prev) => [...prev, data1, data2]);
        };

        generateRandom();
    }, []);

    return (
        <div className="explore001">
            <div className="explore002">
                <div className="explore003">
                    {/* main list five component div */}
                    <InfiniteScroll
                        style={{ overflow: "hidden" }}
                        dataLength={posts.length}
                        next={async () => {
                            const data = await generateRandomUsersAndPosts();

                            setPosts((prev) => [...prev, data]);
                        }}
                        hasMore={true}
                        loader={
                            <>
                                {/* <div className="explore013">
                                    <div className="explore014">
                                        <Loader />
                                    </div>
                                </div> */}
                                {/* <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "100px",
                                        alignItems: "center",
                                    }}
                                >
                                    <div className="explore014">
                                        <Loader />
                                    </div>
                                </div> */}
                            </>
                        }
                    >
                        {posts.map((user, index) => (
                            <div className="explore004">
                                {user?.map((post, idx) => (
                                    <ImagePost
                                        post={post.post}
                                        account={post.account}
                                        
                                    
                                    />
                                ))}
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
            <div className="explore013">
                <div className="explore014">
                    <Loader />
                </div>
            </div>
            
            <Outlet/>
        </div>
    );
};

export default Explore;
