import { useNavigate } from "react-router-dom";
import "./tab.css";

const Tab = ({ tab, searchOpen, searchRef }) => {
    const navigate = useNavigate();
    return (
        <div ref={tab.title === 'search' ? searchRef: null}
            className="tab01"
            onClick={() => {
                if (tab?.route) {
                    navigate(`${tab?.route}`);
                } else if (tab?.title === "search") {
                    searchOpen();
                }
            }}
        >
            <div className="tab02">{tab.icon}</div>
            <div className="tab03">{tab.title}</div>
        </div>
    );
};

export default Tab;
