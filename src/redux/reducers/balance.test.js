import balanceReducer from './balance';
import * as constants from '../constants';

describe('balance reducer', () => {
    
    var jars = constants.INIT_JARS;
    describe("when initalizing", () => {
              
        it("sets 6 empty jars keys in a object", () => {
            expect(balanceReducer(undefined,
                 {type: constants.SET_JARS, jars}))
                 .toEqual(jars);
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