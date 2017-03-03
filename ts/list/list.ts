import { TBool } from '../primitives/primitives';
import { TArray } from "./array"
import * as _ from "lodash"

/**
 * New list implementation which will extend the normal list adding some additional functions
 * e.g. equals, to compare the list
 */
export class TList<T> extends TArray<T> {
    equals(otherList: TList<T>): boolean {
        var  checks: boolean[] = [
            _.isEqual(this, otherList),
            this.length != otherList.length,

            // check all items match
            this.map((val, ind, arr) => otherList[ind] == val)
                .reduce((x,y) => x && y)
        ]

        if (!checks.reduce((x,y) => x && y))
            return false;

        return true;  
    }
}