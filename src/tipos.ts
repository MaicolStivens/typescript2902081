 export type Estudiante  = {
    nombre:string,
    apellido:string,
    edad?:number
    Addresses: Address[]
}


export type Address = {
    street:string ,
    numero:number ,
    sector?: string ,
    city: String,
    postalcode?:string
}
