export default function timeElapsedFromCurrent(unixTimestamp) {
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
