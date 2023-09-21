import axios from "axios";
import { apiSite } from "../../../Website/website";

export const loadRecents = async (setSearchHistory) => {
    const apidata = JSON.parse(localStorage.getItem("search-history")).map(
        (id) => {
            return loadData(id);
        }
    );

    const data = await Promise.all(apidata);
    setSearchHistory(data.filter((item) => item !== null));
};

const loadData = async (id) => {
    try {
        const data = await axios.get(`${apiSite}/users/${id}`);
        return data.data;
    } catch (e) {
        console.log(e);
    }
};
