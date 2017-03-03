export function checkPrimitiveTypes(shouldBe: any, value: any) {
    if(typeof shouldBe !== typeof value)
        throw "Typemissmatch. Expected a " + typeof shouldBe + ", but the provided variable '" + value + "' is of type " + typeof value + ".";
}