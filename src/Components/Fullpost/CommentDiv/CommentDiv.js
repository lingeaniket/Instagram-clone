import React from "react";
import Comment from "../Comment/Comment";

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
                                        borderRadius: '50%',
                                        overflow: 'hidden',
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
                                    <div className="fullPost054">{userData?.username}</div>
                                </h2>
                                <div className="fullPost055">
                                    <h1 className="fullPost056">{post?.caption}
                                        
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
            {post?.comments?.map((comment)=>
            <div className="fullPost060">
                {/** this is comment div */}
                <Comment comment={comment}  />
                <div>
                    <div className="fullPost067">
                        <span>
                            <div className="fullPost068">
                                <button className="fullPost069">
                                    <div className="fullPost070"></div>
                                    <span className="fullPost071">
                                        show replies(`{comment?.reply?.length}`)
                                    </span>
                                </button>
                            </div>
                        </span>
                        <div>
                            {/** this show uld be reusab;e */}
                            {/* usecomments div here  */}
                            {
                                comment?.reply?.map((reply)=>
                                <Comment comment={reply} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default CommentDiv;
