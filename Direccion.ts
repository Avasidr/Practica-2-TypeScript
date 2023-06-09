/** El código está escrito en ingles para crear hábito */


export class Direction {
    private _street: string;    /** Calle que aparece en la dirección */
    private _number: number;        /** Numero de la dirección */
    private _floor: number | boolean;   /** Piso de (si lo hay) de la dirección */
    private _letter: string | boolean;      /** Letra (si la hay) de la dirección */
    private _postalCode: number;        /** Código postal de la dirección */
    private _town: string;      /** Localidad de la dirección */
    private _province: string;      /** Provincia de la dirección */

    constructor(street: string, number: number, floor: number | boolean, letter: string | boolean, postalCode: number, town: string, province: string) {
        this._street = street;
        this._number = number;
        this._floor = floor; 
        this._letter = letter; 
        this._postalCode = postalCode;
        this._town = town; 
        this._province = province;
    }


    /** Obtiene la propiedad de la dirección
     * @returns la propiedad de la dirección
     */

    get street() {
        return this._street;
    }

    get number() {
        return this._number;
    }

    get floor() {
        return this._floor;
    }

    get letter() {
        return this._letter;
    }

    get postalCode() {
        return this._postalCode;
    }

    get town() {
        return this._town;
    }

    get province() {
        return this._province;
    }


    /** Establece la propiedad de la dirección
     * @param propiedad La nueva propiedad de la dirección
     */

    set street(street: string) {
        this._street = street;
    }

    set number(number: number) {
        this._number = number;
    }

    set floor(floor: number | boolean) {
        this._floor = floor;
    }

    set letter(letter: string | boolean) {
        this._letter = letter;
    }

    set postalCode(postalCode: number) {
        this._postalCode = postalCode;
    }

    set town(town: string) {
        this._town = town;
    }

    set province(province: string) {
        this._province = province;
    }
    
}