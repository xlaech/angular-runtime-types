import { checkPrimitiveTypes } from '../typecheckers/primitives'

export class TArray<T> extends Array<T> {
    constructor(start: Array<T> = []) {
        super();
        this.push(...start);
    }

    push(...values: T[]): number {
        checkPrimitiveTypes(this, typeof values);
        return this.push(...values);
    } 
}