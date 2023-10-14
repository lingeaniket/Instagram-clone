import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const tabStyle = {
    fontSize: 28,
};

export const tabArr = [
    {
        title: "home",
        route: "/",
        icon: <HomeIcon sx={tabStyle} />,
    },
    {
        title: "search",

        icon: (
            <svg
                aria-label="Search"
                className="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <path
                    d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="16.511"
                    x2="22"
                    y1="16.511"
                    y2="22"
                ></line>
            </svg>
        ),
    },
    {
        title: "explore",
        route: "/explore",
        icon: <ExploreOutlinedIcon sx={tabStyle} />,
    },
    {
        title: "messages",
        route: "/direct",
        icon: (
            <svg
                aria-label="Messenger"
                className="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <path
                    d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.739"
                ></path>
                <path
                    d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                    fillRule="evenodd"
                ></path>
            </svg>
        ),
    },
    {
        title: "notifications",
        icon: <FavoriteBorderOutlinedIcon sx={tabStyle} />,
    },
    {
        title: "profile",
        route: "/profile",
    },
];
