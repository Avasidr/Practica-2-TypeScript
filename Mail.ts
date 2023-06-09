/** El código está escrito en ingles para crear hábito */


export class Mail {         
    private _description: string;  /** Descripción del email */
    private _direction: string;       /** Direccion del email */
    
    constructor(description: string, direction: string) {
        this._description = description;
        this._direction = direction;
    }


    /** Obtiene la descripción del email
     * @returns la descripción del email
     */

    get description() {
        return this._description;
    }


    /** Obtiene la dirección del email 
     * @returns la dirección del email 
     */

    get direction() {
        return this._direction;
    }


    /** Establece la descripción del email
     * @param description La nueva descripción del nuevo email
     */

    set description(description: string) {
        this._description = description;
    }


    /** Establece la dirección del email 
     * @param direction La nueva dirección de email
     */

    set direction(direction: string) {
        this._direction = direction;
    }
}
