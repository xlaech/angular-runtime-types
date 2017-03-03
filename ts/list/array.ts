import { checkPrimitiveTypes } from '../typecheckers/primitives'
import { checkListTypes } from '../typecheckers/lists'

/**
 * Extends the JavaScript Array to ensure runtime typechecking for all array function mutating state.
 * Other functions will still be handled by the Array<T> implementation
 */
export class TArray<T> extends Array<T> {
    constructor(start: Array<T> = []) {
        super();
        this.push(...start);
    }

    push(...values: T[]): number {
        checkListTypes(this, values);
        return this.push(...values);
    } 

    /**
     * TODO:
     * isArray()
     * concat()
     * copyWithin()
     * entries()
     * every()
     * fill()
     * filter()
     * find()
     * findIndex()
     * forEach()
     * includes()
     * indexOf()
     * join()
     * keys()
     * lastIndexOf()
     * map()
     * reduce()
     * reduceRight()
     * slice()
     * some()
     * sort()
     * slice()
     * splice()
     * toLocaleString()
     * toSource()
     * unshift()
     * valuesOf()
     */
}