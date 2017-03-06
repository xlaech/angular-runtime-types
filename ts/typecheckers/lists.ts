export function checkListTypes(shouldBe: any, value: any) {
        var  checks: boolean[] = [
            Array.isArray(shouldBe),
            Array.isArray(value)
        ]

        if (!checks.reduce((x,y) => x && y))
            throw "Typemissmatch. Expected an array was expected but '" + value + "' has type '" + typeof value  + ".";

        // cannot check the type :(
        if(shouldBe.length === 0 || value.length === 0)
            return;

        // Do all the values have the same type?
        var type = shouldBe[1];
        var matched = value
                        .map(x => typeof x === typeof type)
                        .reduce((x,y) => x && y);

        if(!matched)
            throw "Typemissmatch. This lists expects values of type " + 
                    typeof shouldBe[0] + 
                    ", but the provided list '" + 
                    value + "' is of type " + 
                    typeof value[0] + "[].";
}