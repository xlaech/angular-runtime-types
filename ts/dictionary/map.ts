import { checkPrimitiveTypes } from '../../ts/typecheckers/primitives';
/**
 * Extends the new JS Map type https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * to ensure runtime typechecking on all function which mutate state
 */
export class TMap<K, V> extends Map<K, V> {

    /**
     * Insert a new key-value pair into the map.
     * 
     * Note: empty maps can not be typechecked due to lost typeinformation during compilation.
     * To avoid this, make sure your map gets initialized with some values
     */
    set(key: K, value: V): this {

        if (this.size > 0) {
            checkPrimitiveTypes(this.keys().next().value, key);
            checkPrimitiveTypes(this.values().next().value, value);
        }


        return super.set(key, value);
    }

    /**
     * Finds the value for a given key in the map.
     * 
     * Note: empty maps can not be typechecked due to lost typeinformation during compilation.
     * To avoid this, make sure your map gets initialized with some values
     */
    get(key: K): V {

        if (this.size > 0) 
            checkPrimitiveTypes(this.keys().next().value, key);

        return super.get(key);
    }


    /**
     * deletes the key-value pair with the specified key
     * 
     * Note: empty maps can not be typechecked due to lost typeinformation during compilation.
     * To avoid this, make sure your map gets initialized with some values
     */
    delete(key: K): boolean {

        if (this.size > 0) 
            checkPrimitiveTypes(this.keys().next().value, key);

        return super.delete(key);
    }

    /**
     * checks, if the provided key exists
     * 
     * Note: empty maps can not be typechecked due to lost typeinformation during compilation.
     * To avoid this, make sure your map gets initialized with some values
     */
     has(key: K): boolean {

        if (this.size > 0) 
            checkPrimitiveTypes(this.keys().next().value, key);

        return super.has(key);
     }
}