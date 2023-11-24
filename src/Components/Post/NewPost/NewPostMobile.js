import React, { useCallback, useState } from "react";
import PostFolder from "./PostFolder/PostFolder";

const NewPostMobile = () => {
    const steps = ["Create new post", "Select a photo", "Review", "Create a new post", "Post sharing", "Post shared"];

    const [step, setStep] = useState(1);

    const handleStep = useCallback((step) => {
        setStep(step);
    }, []);
    return <PostFolder step={step} handleStep={handleStep} steps={steps} />;
};

export default NewPostMobile;
