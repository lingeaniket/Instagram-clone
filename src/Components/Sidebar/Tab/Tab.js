import "./tab.css";

const Tab = ({ tab }) => {
    return (
        <div className="tab01">
            <div className="tab02">{tab.icon}</div>
            <div className="tab03">
                {tab.title}
            </div>
        </div>
    );
};

export default Tab;
