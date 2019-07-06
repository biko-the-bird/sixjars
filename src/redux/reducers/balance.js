import * as constants from '../constants';
import {read_cookie, bake_cookie} from 'sfcookies';




const balance = (prevState = constants.INIT_JARS, action) => {
    let balance;
    const oldJars = (read_cookie(constants.JARS_COOKIE)[constants.NEC] && read_cookie(constants.JARS_COOKIE)) || prevState;
    
    switch (action.type) {
        case constants.SET_JARS:
            balance = oldJars;
            var keys = Object.keys(action.jars);
            keys.forEach(key => {
                balance[key] = action.jars[key];
            })
            break;
        case constants.WITHDRAW_JAR:
            balance = oldJars;
            var difference =  balance[action.jar] - action.amount;
            //we don't allow jars to contain negative amounts
            balance[action.jar] = (difference >= 0) ? difference : 0;
            break;
        default:
            balance = oldJars;
    }
    bake_cookie(constants.JARS_COOKIE, balance);
    return balance;
}
export default balance;

