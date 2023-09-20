export const arrayFill = (arr) => {
    if (arr.length === 1) {
        return [...arr, {}, {}];
    } else if (arr.length === 2) {
        return [...arr, {}];
    }
    return arr;
};
