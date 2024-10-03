"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante_1 = __importDefault(require("./mostrarEstudiante"));
// Definir variables de tipo dado
const e1 = {
    nombre: "Maicol",
    apellido: "Muñoz",
    edad: 17,
    Addresses: [
        {
            street: "Suba",
            numero: 12234,
            city: "Bogota",
        },
        {
            street: "Bosa",
            numero: 32,
            city: "Bogoteiton",
        },
    ],
};
const e2 = {
    nombre: "Carlos",
    apellido: "Jimenez",
    edad: 11,
    Addresses: [
        {
            street: "Lisboa",
            numero: 132,
            city: "Bogota",
        },
        {
            street: "Buena Calle",
            numero: 12,
            city: "Villamario",
        },
        {
            street: "Bogota",
            numero: 32,
            city: "Usme",
        },
    ],
};
// Crear arreglo para almacenar estudiantes
let arregloEstudiantes = [];
// Agregar primeros elementos
arregloEstudiantes.push(2);
arregloEstudiantes.push("Jorge");
arregloEstudiantes.push("Carlos");
arregloEstudiantes.push(3);
const addEstudiante = (e) => {
    arregloEstudiantes.push(e);
};
addEstudiante(e1);
addEstudiante(e2);
// Recorrer el arreglo de estudiantes
// Mostrar solo los estudiantes
arregloEstudiantes.forEach((elemento) => {
    if (typeof elemento === "object" && "nombre" in elemento && "apellido" in elemento) {
        (0, mostrarEstudiante_1.default)(elemento);
    }
});
console.log(mostrarEstudiante_1.default);
/*
//Crear metodo Para agregar un estudiante ya definido

const addEstudiante = (e : Estudiante)=> {
 //Isntrucciones para agregar al estudiante
 //Al arreglo
    arregloEstudiantes.push(e)
    console.log(`Estudiante Agregado Correctamente`)
}

//Metodo para añadir estudiante al principio del arreglo
function addEstudiantePrincipio (e : Estudiante){
    arregloEstudiantes.unshift(e);
}


//Encontrar los estudiantes que vivan en bogota y que actualize  su edad a 20
const ActualizarEdadBogota = () => {
    arregloEstudiantes.forEach((estudiante) => {
        // Verificar si alguna de las direcciones tiene la ciudad "Bogota"
        const viveEnBogota = estudiante.Addresses.some((address) => address.city === "Bogoteiton");
        if (viveEnBogota) {
            estudiante.edad = 20; // Actualizar la edad
            console.log(`Edad actualizada para el estudiante ${estudiante.nombre} ${estudiante.apellido}.`);
        }
    });
}


  
//Metodo para encontrar un estudiante por nombre y actualizar su apellido
function actulizarApellidoPorNombre(nombre : string, nuevoApellido : string){
    const Estudiante = arregloEstudiantes.find (e => e.nombre === nombre)
    if(Estudiante){
        Estudiante.apellido = nuevoApellido;
        console.log(`Apellido de ${nombre} Actualizado a ${nuevoApellido}.`);
    }else{
        console.log(`Estudiante con nombre ${nombre} no Encontrado`);
    }
}


//Metodo para borrar un estudiante por nombre y apellido

function borrarEstudiante(nombre: string, apellido: string) {
    const longitudInicial = arregloEstudiantes.length;

    // Filtrar el arreglo excluyendo al estudiante que coincida con el nombre y apellido
    arregloEstudiantes = arregloEstudiantes.filter((e) => !(e.nombre === nombre && e.apellido === apellido));

    const longitudFinal = arregloEstudiantes.length;

    // Verificar si el estudiante fue eliminado
    if (longitudInicial > longitudFinal) {
        console.log(`Estudiante ${nombre} ${apellido} eliminado correctamente.`);
    } else {
        console.log(`Estudiante ${nombre} ${apellido} no encontrado.`);
    }
}


//Metodo para borrar los estudiantes que tengan menos de 18 años y vivan en bogota
function BorrarMenoresBogota() {
    const longitudInicial = arregloEstudiantes.length;

    // Filtrar el arreglo excluyendo a los estudiantes que vivan en Bogotá y sean menores de 18
    arregloEstudiantes = arregloEstudiantes.filter((estudiante) => {
        const viveEnBogota = estudiante.Addresses.some((address) => address.city === "Bogota");
        // Retorna true si el estudiante no vive en Bogotá o si tiene 18 años o más (es decir, lo mantiene en el arreglo)
        return !(viveEnBogota && estudiante.edad !== undefined && estudiante.edad < 18);
    });

    const longitudFinal = arregloEstudiantes.length;

    // Mensaje si se eliminó al menos un estudiante
    if (longitudInicial > longitudFinal) {
        console.log(`Se eliminaron ${longitudInicial - longitudFinal} estudiantes menores de 18 años que viven en Bogotá.`);
    } else {
        console.log("No se encontraron estudiantes menores de 18 años que vivan en Bogotá.");
    }
}

// Invocar el método para borrar estudiantes menores de 18 años que vivan en Bogotá




//Invocar el metodo para agregar e1
//Al arreglo

console.log(addEstudiante)


//addEstudiante(e1);
//addEstudiantePrincipio(e2);

// Actualizar la edad de los estudiantes que viven en Bogotá
ActualizarEdadBogota();

// Mostrar los estudiantes antes de borrar
console.log('Estudiantes antes de borrar: ', arregloEstudiantes);

// Borrar estudiante
borrarEstudiante("Maicol", "Muñoz");

console.log('Estudiantes después de borrar: ', arregloEstudiantes);

BorrarMenoresBogota();  */ 
