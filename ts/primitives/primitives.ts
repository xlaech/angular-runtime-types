import {checkPrimitiveTypes} from "../typecheckers/primitives"

/**
 * Abstract generic class encapsulating the value of a primitive T.
 */
export abstract class Typesafe<T> {
    /**
     * The value we are encapsulating
     */
    protected _value: T;

    /**
     * Reading the value is a safe operation. So we just return it.
     * @returns T The value
     */
    get value(): T {
        return this._value;
    }

    set value(value: T) {
        checkPrimitiveTypes(this._value, value)
        this._value = value;
    }
}

/**
 * Specific instance of Typesafe<T> for number values.
 * see commit cbc6b700ace6f42f3a31a889a7cca5c8d1723011 for information
 * about why the constructor is not in the generic class
 */
export class TInt extends Typesafe<number> {
    constructor(start: number) {
        super();
        checkPrimitiveTypes(0, start)
        this._value = start;
    }
};

/**
 * Specific instance of Typesafe<T> for string values.
 * see commit cbc6b700ace6f42f3a31a889a7cca5c8d1723011 for information
 * about why the constructor is not in the generic class
 */
export class TString extends Typesafe<string> {
    constructor(start: string) {
        super();
        checkPrimitiveTypes("string", start)
        this._value = start;
    }
};

/**
 * Specific instance of Typesafe<T> for boolean values.
 * see commit cbc6b700ace6f42f3a31a889a7cca5c8d1723011 for information
 * about why the constructor is not in the generic class
 */
export class TBool extends Typesafe<boolean> {
    constructor(start: boolean) {
        super();
        checkPrimitiveTypes(true, start)
        this._value = start;
    }
};