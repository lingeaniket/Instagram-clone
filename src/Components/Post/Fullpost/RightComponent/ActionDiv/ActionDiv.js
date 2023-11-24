import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";

import Like from "../../../../Icons/Like/Like";
import Save from "../../../../Icons/Save/Save";
import Share from "../../../../Icons/Share/Share";
import Comment from "../../../../Icons/Comment/Comment";

import { Skeleton } from "@mui/material";

const RoundedSkeleton = () => {
    return (
        <Skeleton
            variant="rounded"
            sx={{
                width: "24px",
                height: "24px",
            }}
        />
    );
};

const ActionDiv = ({ likeref, handleLiked, liked, post }) => {
    const [searchParams] = useSearchParams();
    const postId = Number(searchParams.get("postId"));
    return (
        <div className="fullPost044">
            <div className="fullPost084">
                <div ref={likeref} onClick={handleLiked} className="fullPost045 fullPost016 fullPost006 animeicon">
                    {post.id !== postId ? <RoundedSkeleton /> : <Like liked={liked} size={24} />}
                </div>
            </div>
            <div>
                <div className="fullPost045 fullPost016 fullPost006">{post.id !== postId ? <RoundedSkeleton /> : <Comment />}</div>
            </div>
            <div>
                <div className="fullPost045 fullPost016 fullPost006">{post.id !== postId ? <RoundedSkeleton /> : <Share />}</div>
            </div>
            <div className="fullPost085">
                <div className="fullPost045 fullPost016 fullPost006">{post.id !== postId ? <RoundedSkeleton /> : <Save />}</div>
            </div>
        </div>
    );
};

export default memo(ActionDiv);
