import React from "react";
import CommentsDiv from "../CommentsDiv/CommentsDiv";

const CommentDiv = ({ userData, post }) => {
    return (
        <div className="fullPost048 fullPost063">
            <div>
                <div className="fullPost049">
                    <div className="fullPost050">
                        <div className="fullPost051">
                            <div className="fullPost052">
                                <div
                                    style={{
                                        height: "32px",
                                        width: "32px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        style={{
                                            maxWidth: "100%",
                                        }}
                                        src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="fullPost053">
                                    <div className="fullPost054">
                                        {userData?.username}
                                    </div>
                                </h2>
                                <div className="fullPost055">
                                    <h1 className="fullPost056">
                                        {post?.caption}
                                    </h1>
                                </div>
                                <div className="fullPost057">
                                    <span className="fullPost058">
                                        <time
                                            className="fullPost059"
                                            dateTime="2023-09-10T08:34:19.000Z"
                                        >
                                            1 w
                                        </time>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Other comments */}
            {post?.comments?.map((comment) => (
                <CommentsDiv comment={comment} />
            ))}
        </div>
    );
};

export default CommentDiv;
