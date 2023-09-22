import axios from "axios";

export const generateRandomUsersAndPosts = async () => {
    const users = generate5users();
    const data = users.map((id) => loadPosts(id));
};

const generate5users = () => {
    const users = [];
    for (let i = 0; i < 5; i++) {
        let id = generateRandom(0, 100);
        while (users.includes(id)) {
            id = generateRandom(0, 100);
        }
        users.push(id);
    }

    return users;
};

const generateRandom = (first, last) => {
    return Math.floor(Math.random() * (last - first)) + first;
};

// const loadPosts = async (id) => {
//   try {
//       // const promise = await axios.get(`${}`)
//   }
// };
