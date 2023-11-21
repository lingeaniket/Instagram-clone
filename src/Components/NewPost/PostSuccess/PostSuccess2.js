import React from "react";

const PostSuccess2 = () => {
    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '100%'
        }}>
            <div
                style={{
                    height: "96px",
                    width: "96px",
                }}
            >
                <img
                    draggable="false"
                    height="100%"
                    width="100%"
                    alt="Animated tick"
                    class="xl1xv1r"
                    referrerpolicy="origin-when-cross-origin"
                    src="https://static.cdninstagram.com/rsrc.php/v3/yQ/r/alF2W5MavPX.gif"
                />
            </div>
            <div
                style={{
                    marginBottom: "16px",
                    marginTop: "16px",
                }}
            >
                <div
                    style={{
                        lineHeight: "25px",
                        fontSize: "20px",
                        textAlign: "center",
                        fontWeight: 400,
                        //bf -4, af -6
                    }}
                >
                    Your post has been shared.
                </div>
            </div>
        </div>
    );
};

export default PostSuccess2;
