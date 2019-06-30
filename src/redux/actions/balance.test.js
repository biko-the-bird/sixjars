import * as actions from './balance';
import * as constants from '../constants';

it("creates a action to add to the jars", () => {
    const jars = 0;
    
    const expectedAction = {type: constants.SET_JARS, jars};
    expect(actions.setJars(0)).toEqual(expectedAction);
})

it("creates an action to remove from a specific jar", () => {

    const expectedAction = {type: constants.WITHDRAW_JAR, jar: constants.FFA, amount: 5};
    expect(actions.withdrawJar(constants.FFA, 5)).toEqual(expectedAction);
})