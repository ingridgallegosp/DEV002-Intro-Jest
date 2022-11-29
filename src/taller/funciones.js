const sumar = (num1, num2)=> num1 + num2

const filtrarArreglo = (arr, element)=> arr.filter((elem)=> elem != element)

const crearSaludo = (msg)=> {
    if(!msg) throw new Error('Argumento requerido')

    return `Hola ${msg}`
}

export { sumar, filtrarArreglo, crearSaludo }