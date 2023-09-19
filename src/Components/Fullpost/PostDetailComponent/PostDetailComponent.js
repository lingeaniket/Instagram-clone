import React from "react";

import Options from "../../Icons/Options/Options";
import Like from "../../Icons/Like/Like";
import Comment from "../../Icons/Comment/Comment";
import Share from "../../Icons/Share/Share";
import CommentDiv from "../CommentDiv/CommentDiv";

const PostDetailComponent = ({ post, userData }) => {
    return (
        <div className="fullPost028 fullPost062 fullPost024 fullPost042">
            <div className="fullPost029 fullPost024 fullPost042">
                <div className="fullPost030 fullPost024 fullPost042">
                    <div className="fullPost031">
                        <div className="fullPost032">
                            <div className="fullPost033">
                                <div>
                                    <div className="fullPost034">
                                        <div className="fullPost035">
                                            <img style={{
                                              maxWidth: '100%'
                                            }} src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="fullPost036 fullPost024 fullPost042">
                                    <div className="fullPost037">
                                        <div className="fullPost038">
                                            <span className="fullPost039">
                                                {userData?.username}
                                            </span>
                                            {post?.collab && (
                                                <>
                                                    <span className="fullPost040">
                                                        {" "}
                                                        and{" "}
                                                    </span>
                                                    <span className="fullPost039">
                                                        Aniket
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fullPost041">
                                <div className="fullPost006 fullPost016">
                                    <Options />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fullPost043 fullPost042 fullPost024">
                        <div className="fullPost044">
                            <div
                                style={{
                                    marginLeft: "-8px",
                                }}
                            >
                                <div className="fullPost045 fullPost016 fullPost006">
                                    <Like />
                                </div>
                            </div>
                            <div>
                                <div className="fullPost045 fullPost016 fullPost006">
                                    <Comment />
                                </div>
                            </div>
                            <div>
                                <div className="fullPost045 fullPost016 fullPost006">
                                    <Share />
                                </div>
                            </div>
                            <div
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "-10px",
                                }}
                            >
                                <div className="fullPost045 fullPost016 fullPost006">
                                    <Share />
                                </div>
                            </div>
                        </div>
                        <div
                            className="fullPost046"
                            style={{
                                fontSize: "12px",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "600",
                                }}
                            >
                                {post?.likes} likes
                            </span>
                        </div>
                        <div className="fullPost047 fullPost024 fullPost042">
                            <CommentDiv userData={userData} post={post} />
                        </div>
                        <div className="fullPost072">
                            <span className="fullPost073">1 day agot</span>
                        </div>
                        <div className="fullPost074">
                            <div className="fullPost075 fullPost032">
                                <div>
                                    <input
                                        className="fullPost076"
                                        type="text"
                                        placeholder="Add a comment..."
                                    />
                                </div>
                                <div className="fullPost077">
                                    <button className="fullPost078">
                                        post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetailComponent;
