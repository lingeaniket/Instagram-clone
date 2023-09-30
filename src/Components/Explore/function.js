import axios from "axios";
import { apiSite } from "../../Website/website";

export const generateRandomUsersAndPosts = async () => {
    const users = await generate6users();

    return users.filter((post) => post !== null);
};

const generate6users = async () => {
    const data = [];
    const users = [];
    for (let i = 0; i < 6; i++) {
        let id = generateRandom(1, 100);
        let account = await accountData(id);
        // while (users.includes(id) || account.private) {
        // while (account.private) {
        //     id = generateRandom(1, 100);
        //     account = await accountData(id);
        // }
        users.push(id);
        data.push({
            account,
            post: await loadPosts(id),
        });
    }
    return data;
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
            promise?.data?.posts?.length === 0
                ? 0
                : promise.data?.posts?.length - 1
        );
        return promise?.data?.posts[randomPost];
    } catch (err) {
        console.log(err);
    }
};
