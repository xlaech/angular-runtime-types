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
        });

        it('will accept and save a new integer value', () => {
            let val: TInt = new TInt(3);
            val.value = 42;
            expect(val.value).to.equal(42);
        });

        it('throws for a new null value', () => {
            let val: TInt = new TInt(42);
            expect(() => val.value = null).throws();
        });

        it('throws for a new non number value', () => {
            let val: any = new TInt(42);
            expect(() => val.value = "test").throws();
        })
    });
    describe("TBool:", () => {
        it('can be created and its value can be set and is saved', () => {
            let val: TBool = new TBool(true);
            expect(val.value).to.equal(true);
        });

        it('throws for a null value at initialization', () => {
            expect(() => new TBool(null)).throws();
        });

        it('will accept and save a new boolean value', () => {
            let val: TBool = new TBool(true);
            val.value = false;
            expect(val.value).to.equal(false);
        });

        it('throws for a new null value', () => {
            let val: TBool = new TBool(true);
            expect(() => val.value = null).throws();
        });

        it('throws for a new non boolean value', () => {
            let val: any = new TBool(true);
            expect(() => val.value = "test").throws();
        })
    });
    describe("TString:", () => {
        it('can be created and its value can be set and is saved', () => {
            let val: TString = new TString("I like trains");
            expect(val.value).to.equal("I like trains");
        });

        it('throws for a null value at initialization', () => {
            expect(() => new TString(null)).throws();
        });

        it('will accept and save a new string value', () => {
            let val: TString = new TString("mmh... those cookies :)");
            val.value = "over 9000";
            expect(val.value).to.equal("over 9000");
        });

        it('throws for a new null value', () => {
            let val: TString = new TString("null :)");
            expect(() => val.value = null).throws();
        });

        it('throws for a new non number value', () => {
            let val: any = new TString("hohoho");
            expect(() => val.value = 9001).throws();
        })
    });
});