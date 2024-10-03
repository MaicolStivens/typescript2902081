import { Address } from "./tipos";
import { Estudiante } from "./tipos";


const mostrarEstudiante =  (estudiante : Estudiante) =>{

    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${estudiante.edad || `No Definido`}`);
    console.log("--------------DIRECCIONES:----------")
    estudiante.Addresses?.forEach((direccion:Address)=>{
        console.log(`Calle: ${direccion.street}`)
        console.log(`Numero: ${direccion.numero}`)
        console.log(`Ciudad: ${direccion.city}`)
        console.log("-------------------------")
})
}


export default mostrarEstudiante;