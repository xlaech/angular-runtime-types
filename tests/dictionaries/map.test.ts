import { strictEqual } from 'assert';
import { TMap } from '../../ts/dictionary/map'
import { fakeNumber, fakeString } from '../util/typeFakers'
import { expect } from 'chai';
import 'mocha';

describe('Dictionaries:', () => {
    describe("Map:", () => {
        describe("set():", () => {
            it("will insert correct values properly", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                map.set(2, "two");
                map.set(3, "three");

                expect(map.get(1)).to.equal("one");
                expect(map.get(2)).to.equal("two");
                expect(map.get(3)).to.equal("three");
            }),

            it("will not throw if a valid key-value pair is inserted", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.set(2, "two")).not.throws();
            }),

            it("will throw if the key is invalid", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.set(fakeNumber("two"), "two")).throws();
            }),

            it("will throw if the value is invalid", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.set(1, fakeString(3))).throws();
            }),

            it("will throw if key is null", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.set(fakeNumber(null), "two")).throws();
            }),

            it("will throw if the value is null", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.set(1, fakeString(null))).throws();
            }),

            it("will throw if key is undefined", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.set(fakeNumber(undefined), "two")).throws();
            }),

            it("will throw if the value is undefined", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.set(1, fakeString(undefined))).throws();
            })
        });

        describe("get():", () => {
            it("will return the correct value, if the key is valid", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                map.set(2, "two");
                map.set(3, "three");

                expect(map.get(1)).to.equal("one");
                expect(map.get(2)).to.equal("two");
                expect(map.get(3)).to.equal("three");
            }),

            it("will fail if the provided key is wrong", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.get(fakeNumber("Chuck Norris"))).throws();
            }),

            it("will fail if the key is null", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.get(fakeNumber(null))).throws();
            }),

            it("will fail if the key is undefined", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                expect(() => map.get(fakeNumber(undefined))).throws();
            })
        });

        describe("delete():", () => {
            it("will properly delete when the key is valid", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");
                map.set(2, "two");
                map.set(3, "three");

                map.delete(2);

                expect(map.has(1)).to.equal(true);
                expect(map.has(2)).to.equal(false);
                expect(map.has(3)).to.equal(true);
                expect(map.get(1)).to.equal("one");
                expect(map.get(3)).to.equal("three");
            }),

            it("will throw if the key is wrong", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");

                expect(() => map.delete(fakeNumber("nope... it's Chuck Tester :)"))).throws();
            }),

            it("will throw if the key is null", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");

                expect(() => map.delete(fakeNumber(null))).throws();
            }),

            it("will throw if the key is undefined", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");

                expect(() => map.delete(fakeNumber(undefined))).throws();
            })
        });

        describe("has():", () => {
            it("will return true/false if the key is valid", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");

                expect(map.has(1)).to.equal(true);
                expect(map.has(2)).to.equal(false);
            }),

            it("will throw when the key is wrong", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");

                expect(() => map.has(fakeNumber("one"))).throws();
            }),

            it("will throw when the key is null", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");

                expect(() => map.has(fakeNumber(null))).throws();
            }),

            it("will throw when the key is undefined", () => {
                var map: TMap<number, string> = new TMap<number, string>();
                map.set(1, "one");

                expect(() => map.has(fakeNumber(undefined))).throws();
            })
        });
    });
});