import { checkPrimitiveTypes } from '../typecheckers/primitives'
import { checkListTypes } from '../typecheckers/lists'

/**
 * Extends the JavaScript Array to ensure runtime typechecking for all array function mutating state.
 * Other functions will still be handled by the Array<T> implementation
 */
export class TArray<T> extends Array<T> {

    /**
     * Adds new values to the array
     * 
     * Note: empty arrays can not be typechecked due to lost typeinformation during compilation.
     * To avoid this, make sure your array gets initialized with some values
     */
    push(...values: T[]): number {
        checkListTypes(this, values);
        return super.push(...values);
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