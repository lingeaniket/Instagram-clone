import axios from "axios";
import React, { useEffect, useState } from "react";

import { apiSite } from "../../../../Website/website";

import { List } from "@mui/material";

const SingleList = ({ followe }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            await axios.get(`${apiSite}/users/${followe.id}`).then((response) => {
                setUser(() => response.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
        };
        loadData();
    }, [followe.id]);

    return (
        <div className="listModal023">
            <List loading={loading} user={user} />
        </div>
    );
};

export default SingleList;
