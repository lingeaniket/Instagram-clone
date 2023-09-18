import TimelineIn from "./TtimelineIn/TimelineIn";

const Timeline = () => {
    return (
        <div className="w_80 grid01" style={{
            marginTop: '35px'
        }}>
            <TimelineIn/>
            <div className="w_20">rightSideBar</div>
        </div>
    );
};

export default Timeline;