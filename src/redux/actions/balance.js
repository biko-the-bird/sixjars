
import * as constants from '../constants';

export const setJars = (jars) => {
    return {
        type: constants.SET_JARS,
        jars
    }
};

export const withdrawJar = (jar, amount) => {
    return {
        type: constants.WITHDRAW_JAR,
        jar,
        amount
    }
}

