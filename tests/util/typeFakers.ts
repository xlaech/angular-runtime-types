
/**
 * "Unfortunally" the tests are also written in Typescript. This means that we are not allowed to
 * reproduce some of the errors we are trying to solve.
 * This function will trick the compiler into thinking he is dealing with a number
 * 
 * "That thing you burned up isn't important to me; it's the fluid catalytic cracking unit. 
 * It makes shoes for orphans... nice job breaking it, hero."
 * 
 *    -- GLaDOS
 * 
 * @param value Any value that should be faking a number :)
 */
export function fakeNumber(value: any): number {
    return value;
}

/**
 * "Unfortunally" the tests are also written in Typescript. This means that we are not allowed to
 * reproduce some of the errors we are trying to solve.
 * This function will trick the compiler into thinking he is dealing with a number
 * 
 * "I think you'll find it's rather more than just in order, Sir. 
 * You are now entering the most secure location in the whole of England."
 * 
 *    -- Johnny English
 *     
 */
export function fakeString(value: any): string {
    return value;
}