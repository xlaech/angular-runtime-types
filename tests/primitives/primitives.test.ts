import { TInt, TBool, TString } from '../../ts/primitives/primitives'
import { expect } from 'chai';
import 'mocha';

describe('Primitives:', () => {
    describe("TInt:", () => {
        it('can be created and its value can be set and is saved', () => {
            let val: TInt = new TInt(3);
            expect(val.value).to.equal(3);
        });

        it('throws for a null value at initialization', () => {
            expect(() => new TInt(null)).throws();
        })
    })
});