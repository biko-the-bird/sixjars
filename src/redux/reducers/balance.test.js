import balanceReducer from './balance';
import * as constants from '../constants';

describe('balance reducer', () => {
    
    var jars = constants.INIT_JARS;
    describe("when initalizing", () => {
        const action =  {type: constants.SET_JARS, jars};
        it("sets 6 empty jars keys in a object", () => {
            expect(balanceReducer(undefined,
                action))
                 .toEqual(jars);
        })
        it("is an object", () => {
            expect(typeof(balanceReducer(undefined,
                action))).toEqual("object");
        });
        it("has a key for NEC set to 0", () => {
            expect(balanceReducer(undefined, action)[constants.NEC]).toEqual(0);
        })
    });

    describe("when user withdraws", () => {
        var jar = constants.NEC;
        var amount = 5;
        
        var fullJars = Object.assign({}, jars);
        fullJars[jar] = amount;
        it("removes the amount from the jar",() => {
            expect(balanceReducer(fullJars,
                {type: constants.WITHDRAW_JAR,
                jar,
            amount})).toEqual(jars);
        })
    })


})