/** El código está escrito en ingles para crear hábito */

/** Importar las clases necesarias */

import {Direction} from './Direccion';
import { Mail } from './Mail';
import { Phone } from './Telefono';


export class Person {
    private _firstName: string;         /** Nombre de la persona */
    private _lastName: string;           /** Apellido de la persona */
    private _age: number;               /** Edad de la persona */
    private _dni: string;                /** DNI de la persona */
    private _birthday: Date;              /** Cumpleaños de la persona */
    private _favoriteColor: string;      /** Color favorito de la persona */
    private _gender: string;                /** Género de la persona */
    private _directions: Array<Direction>;      /** Direcciónes (array) de la persona */
    private _mails: Array<Mail>;            /** Mails (array) de la persona */
    private _phones: Array<Phone>;           /** Teléfonos (array) de la persona */
    private _notes: string;                 /** Notas sobre la persona */


    constructor(firstName: string, lastName: string, age: number, dni: string, birthday: Date, favoriteColor: string, gender: string, 
    directions: Array<Direction>, mails: Array<Mail>, phones: Array<Phone>, notes: string) 
    {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._dni = dni;
    this._birthday = birthday;
    this._favoriteColor = favoriteColor;
    this._gender = gender;
    this._directions = directions;
    this._mails = mails;
    this._phones = phones;
    this._notes = notes;
    }


    /** Obtiene la propiedad de la persona
     * @returns la propiedad de la persona
     */

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get dni() {
        return this._dni;
    }

    get birthday() {
        return this._birthday;
    }

    get favoriteColor() {
        return this._favoriteColor;
    }

    get gender() {
        return this._gender;
    }

    get directions() {
        return this._directions;
    }

    get mails() {
        return this._mails;
    }

    get phones() {
        return this._phones;
    }

    get notes() {
        return this._notes;
    }


    /** Establece la propiedad de la persona
     * @param propiedad La nueva propiedad de la persona
     */

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    set age(age: number) {
        this._age = age;
    }

    set dni(dni: string) {
        this._dni = dni;
    }

    set birthday(birthday: Date) {
        this._birthday = birthday;
    }

    set favoriteColor(favoriteColor: string) {
        this._favoriteColor = favoriteColor;
    }

    set gender(gender: string) {
        this._gender = gender;
    }

    set directions(directions: Array<Direction>) {
        this._directions = directions;
    }

    set mails(mails: Array<Mail>) {
        this._mails = mails;
    }

    set phones(phones: Array<Phone>) {
        this._phones = phones;
    }

    set notes(notes: string) {
        this._notes = notes;
    }


    /** Agregar nueva dirección a la lista de direcciones */

    addNewDirection(direction: Direction) {
        this._directions.push(direction)
    }

    /** Agregar nuevo mail a la lista de direcciones */

    addNewMail(mail: Mail) {
        this._mails.push(mail)
    }

    /** Agregar nuevo teléfono a la lista de direcciones */

    addNewPhone(phone: Phone) {
        this._phones.push(phone)
    }

}