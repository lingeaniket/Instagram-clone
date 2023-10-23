import axios from "axios";
import { apiSite } from "../../Website/website";

export const generateUser = async () => {
    let id = generateRandom(1, 100);
    let account = await accountData(id);

    while (account.private) {
        id = generateRandom(1, 100);
        account = await accountData(id);
    }

    return { account, post: await loadPosts(id) };
};

const generateRandom = (first, last) => {
    return Math.floor(Math.random() * (last - first)) + first;
};

const accountData = async (id) => {
    const data = await axios.get(`${apiSite}/users/${id}`);
    return data.data;
};

const loadPosts = async (id) => {
    try {
        const promise = await axios.get(`${apiSite}/posts/${id}`);
        const randomPost = generateRandom(
            0,
            promise?.data?.posts?.length === 0 ? 0 : promise.data?.posts?.length - 1
        );
        return promise?.data?.posts[randomPost];
    } catch (err) {
        console.log(err);
    }
};
