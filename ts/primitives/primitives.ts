import {checkPrimitiveTypes} from "../typecheckers/primitives"

export abstract class Typesafe<T> {
    private _value: T;

    constructor(start: T) {
        this._value = start;
    }

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        checkPrimitiveTypes(this._value, value)
        this._value = value;
    }
}

export class TInt extends Typesafe<number> {};
export class TString extends Typesafe<string> {};
export class TBool extends Typesafe<boolean> {};