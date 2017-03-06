import { checkListTypes } from '../../ts/typecheckers/lists'
import { expect } from 'chai';
import 'mocha';

describe('TypeCheckers:', () => {
    describe("Lists:", () => {
        it('will not throw if the values types match', () => {
            let val1: number[] = [3,3];
            let val2: number[] = [42,3];
            expect(() => checkListTypes(val1, val2)).not.throws();
        });

        it('will throw if the values types do not match', () => {
            let val1: number[] = [3,42];
            let val2: string[] = ["42", "3", ":)"];
            expect(() => checkListTypes(val1, val2)).throws();
        });

        it('will throw if the first value is null', () => {
            let val1: any = null;
            let val2: number[] = [42,9001];
            expect(() => checkListTypes(val1, val2)).throws();
        });

        it('will throw if the second value is null', () => {
            let val1: number[] = [42,9001];
            let val2: any = null;
            expect(() => checkListTypes(val1, val2)).throws();
        });

        it('will throw if the first value is undefined', () => {
            let val1: any = undefined;
            let val2: number[] = [42, 9001];
            expect(() => checkListTypes(val1, val2)).throws();
        });

        it('will throw if the second value is undefined', () => {
            let val1: number[] = [42, 9001];
            let val2: any = undefined;
            expect(() => checkListTypes(val1, val2)).throws();
        });
    });
});