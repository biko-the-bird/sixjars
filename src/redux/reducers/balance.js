import * as constants from '../constants';
import {read_cookie, bake_cookie} from 'sfcookies';




const balance = (prevState = constants.INIT_JARS, action) => {
    let balance;
    const oldJars = read_cookie(constants.JARS_COOKIE) || prevState;
    
    switch (action.type) {
        case constants.SET_JARS:
            balance = action.jars;
            break;
        case constants.WITHDRAW_JAR:
            balance = oldJars;
            var difference =  balance[action.jar] - action.amount;
            balance[action.jar] = (difference >= 0) ? difference : 0;
        default:
            balance = oldJars;
    }
    console.log("reducer balance", balance);
    bake_cookie(constants.JARS_COOKIE, balance);
    return balance;
}
export default balance;

