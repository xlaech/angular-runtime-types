export function checkListTypes(shouldBe: any, value: any) {
        var  checks: boolean[] = [
            Array.isArray(shouldBe),
            Array.isArray(value)
        ]

        if (!checks.reduce((x,y) => x && y))
            throw "Typemissmatch. Expected a " + typeof shouldBe + ", but the provided variable '" + value + "' is of type " + typeof value + ".";

        var concatList = (shouldBe as Array<any>).concat(value);

        // cannot check the type :(
        if(concatList.length === 0)
            return;

        // Do all the values have the same type?
        var type = concatList[1];
        var matched = concatList
                        .map(x => typeof x === type)
                        .reduce((x,y) => x && y);

        if(!matched)
            throw "Typemissmatch. Expected a " + typeof shouldBe + ", but the provided variable '" + value + "' is of type " + typeof value + ".";
}