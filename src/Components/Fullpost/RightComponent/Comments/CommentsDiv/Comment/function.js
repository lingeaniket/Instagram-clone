import { updateComment, updateData } from "../../../../../../Features/fullPostCommentSlice";

export function timeElapsedFromCurrent(unixTimestamp) {
    const currentTimestamp = Date.now(); // Current Unix timestamp in seconds
    const timeDifference = currentTimestamp - unixTimestamp;

    if (timeDifference >= 60 * 60 * 24 * 7 * 1000) {
        const weeks = Math.floor(timeDifference / (60 * 60 * 24 * 7 * 1000));
        return `${weeks} w`;
    } else if (timeDifference >= 60 * 60 * 24 * 1000) {
        const days = Math.floor(timeDifference / (60 * 60 * 24 * 1000));
        return `${days} d`;
    } else if (timeDifference >= 60 * 60 * 1000) {
        const hours = Math.floor(timeDifference / (60 * 60 * 1000));
        return `${hours} h`;
    } else if (timeDifference >= 60 * 1000) {
        const minutes = Math.floor(timeDifference / (60 * 1000));
        return `${minutes} m`;
    } else {
        const seconds = Math.floor(timeDifference / 1000);
        return `${seconds} s`;
    }
}

export function replyComment(
    setReplyData,
    userData,
    comment,
    type,
    commentId,
    dispatch,
    setComment,
) {
    setReplyData((prev) => {
        return {
            ...prev,
            username: userData.username,
            userId: comment.userId,
            commentId: type === "primary" ? comment.id : commentId,
        };
    });
    dispatch(
        updateData({
            username: userData.username,
            userId: comment.userId,
            commentId: type === "primary" ? comment.id : commentId,
        })
    );
    setComment(() => `@${userData.username} `);
    dispatch(updateComment({ comment: `@${userData.username}` }));
}
