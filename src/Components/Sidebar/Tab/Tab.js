import { useNavigate } from "react-router-dom";
import "./tab.css";

const Tab = ({ tab }) => {
    const navigate = useNavigate();
    return (
        <div className="tab01" onClick={()=>{
            if(tab?.route){
                navigate(`${tab?.route}`)
            }
        }}>
            <div className="tab02">{tab.icon}</div>
            <div className="tab03">
                {tab.title}
            </div>
        </div>
    );
};

export default Tab;
