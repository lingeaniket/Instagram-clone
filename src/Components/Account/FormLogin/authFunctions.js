import { createUser, validateUser } from "../../../Utility/Utility";

export const validate = async (email, pass) => {
    const valid = await validateUser(email, pass);
    if (valid) {
        return true;
    } else {
        return false;
    }
};

export const create = async (email, pass) => {
    const valid = await createUser(email, pass);
    if (valid) {
        return true;
    } else {
        return false;
    }
};
