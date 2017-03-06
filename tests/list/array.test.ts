import { TArray } from '../../ts/list/array';
import { expect } from 'chai';
import 'mocha';

describe('Lists:', () => {
    describe("Array:", () => {
        describe("push():", () => {
            it('will insert values provided in the beginning', () => {
                var array: TArray<number> = new TArray<number>();
                array.push(1,2,3);
                expect(array.length).to.equal(3); 
                expect(array[0]).to.equal(1); 
                expect(array[1]).to.equal(2); 
                expect(array[2]).to.equal(3); 
            })

            it('will not throw if the values types match', () => {
                var array: TArray<number> = new TArray<number>();
                expect(() => array.push(2,3,4,5)).not.throws();
            });

            it('will throw when all values are of another type', () => {
                var array: TArray<number> = new TArray<number>();
                array.push(2,3,4)
                expect(() => array.push(
                    fakeNumber("haja"), 
                    fakeNumber("nonono"), 
                    fakeNumber("please not :(")))
                .throws();
            })
        });
    });
});

/**
 * "Unfortunally" the tests are also written in Typescript. This means that we are not allowed to
 * reproduce some of the errors we are trying to solve.
 * This function will trick the compiler into thinking he is dealing with a number
 * 
 * "That thing you burned up isn't important to me; it's the fluid catalytic cracking unit. 
 * It makes shoes for orphans... nice job breaking it, hero."
 * 
 *    -- GLaDOS
 * 
 * @param value Any value that should be faking a number :)
 */
function fakeNumber(value: any): number {
    return value;
}