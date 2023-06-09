/** El código está escrito en ingles para crear hábito */

export class Phone {
    private _description: string; /** Descripción del telefono */
    private _number: number;    /** Numero de telefono */

    constructor(description: string, number: number) {
        this._description = description;
        this._number = number;
    }


    /** Obtiene la descripción del telefono
     * @returns la descripción del telefono
     */

    get description() {
        return this._description;
    }


    /** Obtiene el numero de telefono
     * @returns el numero de telefono
     */

    get number() {
        return this._number;
    }


    /** Establece la descripción del telefono
     * @param description La nueva descripción del telefono
     */

    set description(description: string) {
        this._description = description;
    }
    

    /** Establece el numero de telefono 
     * @param number El nuevo numero de telefono
     */

    set number(number: number) {
        this._number = number;
    }
    
}