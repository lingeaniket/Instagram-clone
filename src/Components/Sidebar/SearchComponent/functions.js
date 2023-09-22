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

export const search = async (e, setSearchResults, setSearchQuery) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim().length > 0) {
        await axios
            .get(`${apiSite}/users/q/${e.target.value.trim()}`)
            .then((response) => {
                setSearchResults(() => response.data);
            });
    } else {
        setSearchResults([]);
    }
};

export const searchHistory = (id, method) => {
    const history = JSON.parse(localStorage.getItem("search-history")) || [];
    if (method === "add") {
        if (history.includes(id)) {
            history.splice(history.indexOf(id), 1);
            localStorage.setItem(
                "search-history",
                JSON.stringify([id, ...history])
            );
        } else {
            localStorage.setItem(
                "search-history",
                JSON.stringify([id, ...history])
            );
        }
    } else if (method === "remove") {
        history.splice(history.indexOf(id), 1);
        localStorage.setItem("search-history", JSON.stringify(history));
    } else if (method === "clear") {
        localStorage.setItem("search-history", JSON.stringify([]));
    }
    // setTimeout(() => {
    //     setRecents((prev) => ++prev);
    // }, 500);
};

export const userClick = (id, searchCloseFunc, setSearchQuery, setSearchResults)=>{
    searchCloseFunc(false);
        searchHistory(id, "add");
        setSearchQuery("");
        setSearchResults([]);
}

export const searchClick = (e, componentRef, searchRef,  searchCloseFunc) =>{
    if (
        !(
            componentRef.current.contains(e.target) ||
            searchRef.current.contains(e.target)
        )
    ) {
        searchCloseFunc(false);
    }
}