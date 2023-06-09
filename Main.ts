/** El código está escrito en ingles para crear hábito */

/** Importar las clases necesarias */

import { Person } from "./Persona";
import { Direction } from "./Direccion";
import { Phone } from "./Telefono";
import { Mail } from "./Mail";

/** Crear la primera dirección de David */

const mainResidenceDavid = new Direction(
    "Calle Buendia",
    12,
    1,
    "D",
    80052,
    "Barcelona",
    "Catalunya"
)

/** Crear el email personal de David */

const personalMailDavid = new Mail (
    "personal",
    "davidR@gmail.com"
)

/** Crear el teléfono de David */

const personalPhoneDavid = new Phone (
    "personal",
    658337144
)

/** Crear la instancia de la persona David */

const dataDavid = new Person (
    "David",
    "Ramirez",
    34,
    "49232165L",
    new Date (26/3/1989),
    "green",
    "hombre",
    [mainResidenceDavid],
    [personalMailDavid],
    [personalPhoneDavid],
    "Trabajador"
)

/** Crear la primera dirección de Rosi */

const mainResidenceRosi = new Direction(
    "Calle Madriguera",
    3,
    false,
    false,
    30045,
    "Alicante",
    "Alicante"
)

/** Crear la segunda dirección de David */

const secondResidenceRosi = new Direction(
    "Calle Castañeda",
    15,
    false,
    false,
    36950,
    "Novelda",
    "Alicante"
)

/** Crear el email personal de Rosi */

const personalMailRosi = new Mail (
    "personal",
    "rosiG@hotmail.es"
)

/** Crear el teléfono personal de Rosi */

const personalPhoneRosi = new Phone (
    "personal",
    698456228
)

/** Crear la instancia de la persona Rosi */

const dataRosi = new Person (
    "Rosi",
    "Garcia",
    37,
    "66974521T",
    new Date (16/5/1986),
    "Naranja",
    "Mujer",
    [mainResidenceRosi, secondResidenceRosi],
    [personalMailRosi],
    [personalPhoneRosi],
    "En baja maternal"
)

/** Crear la primera dirección de Clara*/

const mainResidenceClara = new Direction (
    "Calle Buenavista",
    29,
    5,
    "D",
    32165,
    "Madrid",
    "Madrid"
)

/** Crear la segunda dirección de David */

const secondResidenceClara = new Direction (
    "Calle Hierbabuena",
    2,
    false,
    false,
    36415,
    "Zaragoza",
    "Madrid"
)

/** Crear el email personal de Clara */

const personalMailClara = new Mail (
    "personal",
    "claritaG@gmail.com"
)

/** Crear el email de trabajo de Clara */

const workMailClara = new Mail (
    "Trabajo",
    "clara@optometria.com"
)

/** Crear el teléfono personal de Clara */

const personalPhoneClara = new Phone (
    "Personal",
    622795874
)

/** Crear el teléfono de trabajo de Clara */

const workPhoneClara = new Phone (
    "Trabajo",
    987652112
)

/** Crear la instancia de la persona Clara */

const dataClara = new Person (
    "Clara",
    "Gomariz",
    22,
    "49562132M",
    new Date (12/8/2000),
    "Azul",
    "Mujer",
    [mainResidenceClara, secondResidenceClara],
    [personalMailClara, workMailClara],
    [personalPhoneClara, workPhoneClara],
    "Estudiante y trabajadora"
)


/** Imprimir por consola los contactos antes del cambio */

console.log("Contactos previos al cambio");
console.log(dataDavid);
console.log(dataRosi);
console.log(dataClara);

/** Crear un array de contactos */

const contacts: Array<Person> = new Array(dataDavid, dataRosi, dataClara);

/** DNI a buscar */

const dniToSearch: string = "49232165L";    

/** Encontrar la persona a actualizar */

const personToUpdate: Person = contacts.find(person => person.dni === dniToSearch) as Person;

/** Crear la nueva dirección */

const newDirection = new Direction (
    "Calle Bailén",
    32,
    false,
    false,
    36502,
    "Alicante",
    "Alicante"
)

/** Crear el nuevo mail */

const newMail = new Mail (
    "Trabajo",
    "david@paleo.com"
)

/** Crear el nuevo teléfono */

const newPhone = new Phone (
    "Trabajo",
    669456123
)

/** Crear la nueva dirección, email y teléfono a la persona */

personToUpdate.addNewDirection(newDirection);
personToUpdate.addNewMail(newMail);
personToUpdate.addNewPhone(newPhone);

/** Imprimir los datos actualizados */

console.log("Datos actualizados");
console.log(dataDavid);
console.log(dataRosi);
console.log(dataClara);