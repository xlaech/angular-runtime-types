import {checkPrimitiveTypes} from "../typecheckers/primitives"

export abstract class Typesafe<T> {
    protected _value: T;

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        checkPrimitiveTypes(this._value, value)
        this._value = value;
    }
}

export class TInt extends Typesafe<number> {
    constructor(start: number) {
        super();
        checkPrimitiveTypes(0, start)
        this._value = start;
    }
};


export class TString extends Typesafe<string> {};
export class TBool extends Typesafe<boolean> {};