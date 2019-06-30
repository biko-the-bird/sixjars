import * as constants from '../redux/constants';


export const updateJars = ( deposit, jars) => {
    const keys = Object.keys(jars);
    keys.forEach(key => {
        switch(key) {
            case constants.NEC: 
                jars[key] = jars[key] + (deposit * 0.55);
                break;
            case constants.GIV: 
                jars[key] = jars[key] + (deposit * 0.05);
                break;
            default:
                jars[key] = jars[key] + (deposit * 0.1);
                break;
        }
    });
    return jars;
}