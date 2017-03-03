import { TInt, TBool, TString } from '../../ts/primitives/primitives'
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
    describe("Testing TInt", () => {
        it('We can create a TInt', () => {
            let val: TInt = new TInt(3);
            expect(val.value).to.equal(3);
        });
    })
});