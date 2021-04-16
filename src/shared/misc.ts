export class Misc {

    /**
     * @public
     * @static
     * @param param Parameter
     * @returns Is string
     * @description Checks if parameter is string
     */
     public static isString(param: string): boolean {
        return typeof param === 'string';
    }

}
