
/*SIMULADOR DE COTIZACIONES DE SEGUROS DE AUTO*/
function Cotizaciones (seleccioneMarca, precioPorYear, precioPorTipo) {
    this.brand = seleccioneMarca;
    this.year = precioPorYear;
    this.type = precioPorTipo;
}


/*FUNCION PARA MULTIPLICAR */
function multiplicacion(a, b){
    return a * b
}

const seguroBase = 2000

 
/*AUMENOS SEGUN MARCAS DE AUTO*/
/*OBJETOS DE LAS MARCAS DE AUTO*/
/*let marcasDeAuto = {
    toyota: 1.5,
    volkswagen: 1.2,
    ford: 1.05,
    chevrolet: 1.15,
    renault: 1.08,
    audi: 2  
}*/
 /*MODIFIQUE E HICE UN OBJETO CONSTRUCTOR DE CADA MARCA */

 const idGenerator = () => {
    return Math.round(Math.random() * 100)}

function Cars (id, brands, costoBase){
    this.id = id
    this.brands = brands
    this.costoBase = costoBase
}

let marcaToyota = new Cars(idGenerator(), "Toyota", 1.5)
let marcaVolkswagen = new Cars(idGenerator(), "Volkswagen", 1.2)
let marcaFord = new Cars(idGenerator(), "Ford", 1.05)
let marcaChevrolet = new Cars(idGenerator(), "Chevrolet", 1.15)
let marcaRenault = new Cars(idGenerator(), "Renault", 1.08)
let marcaAudi = new Cars(idGenerator(), "Audi", 2)


/*HACEMOS UN ARRAY CON SOLO EL NOMBRE DE LAS MARCAS */
const arrayMarcas = [marcaToyota, marcaVolkswagen, marcaFord, marcaChevrolet, marcaRenault, marcaAudi]
const listaMarcas = []

for (nombreMarca of arrayMarcas) {
    listaMarcas.push(nombreMarca.brands)
}
console.log(listaMarcas.join(", "))

/*PRUEBA DE INCLUDES() */
const filtradoMarcas = listaMarcas.filter((searchBrands) => searchBrands.includes("T"))
console.log(filtradoMarcas)

/*const filtradoNombre = arrayMarcas.filter((searchBrands) => searchBrands.costoBase > 1.2)
console.log(filtradoNombre)*/

/*MAP CON AUMENTO DE PRECIOS*/
const brandPrice = arrayMarcas.map((el) => el.costoBase*1.2) 
console.log(brandPrice)

/*MAP PARA VER LOS ID GENERADOS (PRUEBA) */
let idMarcas = arrayMarcas.map((prod) => prod.id)
/*console.log(idMarcas)*/



/*let seleccionTipoDeSeguro = {
    respCivil: 2000,
    tercerosCompletos: 2000,
    todoRiesgo: 2500
}
const respCivil = 2000
const tercerosCompletos = 2200
const todoRiesgo = 2500*/

 
let precioParcial = 0
    

/*DATOS PERSONALES*/
const datosPersonales = []

let inputName = document.getElementById("name")
let nombre = " "
inputName.addEventListener('change', ()=>{nombre = inputName.value})

let inputDni = document.getElementById("dni")
let dni = " "
inputDni.addEventListener('change', ()=>{dni = inputDni.value})

let inputBday = document.getElementById("bday")
let fechaNac = " "
inputBday.addEventListener('change', ()=>{fechaNac = inputBday.value})

datosPersonales.push(nombre.toUpperCase())
datosPersonales.push(dni.toUpperCase())
datosPersonales.push(fechaNac.toUpperCase())
datosPersonales.join("\n")
datosPersonales.forEach ((data) =>{console.log (data)})

function mostrarPorConsola(nombre){
    console.log("Bienvenido" + nombre)
}



/*const clientNames = datosPersonales.filter((cliente) => cliente.nombre.includes("A"))
console.log(clientNames)*/


function precioSegunMarca(base, marca){
    precioParcial = multiplicacion(base, marca)
}

let brand = document.getElementById("brand");
   
    brand.innerHTML = `
        <option id="selectBrand" value="">- Seleccionar -</option>
        <option id="selectBrand" value="">${marcaToyota.brands}</option>
        <option id="selectBrand" value="">${marcaVolkswagen.brands}</option>
        <option id="selectBrand" value="">${marcaFord.brands}</option>
        <option id="selectBrand" value="">${marcaChevrolet.brands}</option>
        <option id="selectBrand" value="">${marcaRenault.brands}</option>
        <option id="selectBrand" value="">${marcaAudi.brands}</option>          
        `
    
    brand.addEventListener('change', seleccioneMarca)
    
    //()=>{brand = opcionesASeleccionarMarca.value}

function seleccioneMarca (){
    //let brand = prompt ("Indique la marca de su auto:")
            if(brand == marcaToyota.brands){
                precioSegunMarca(seguroBase, brandPrice[0]) /*REEMPLAZO DE: "marcaToyota.costoBase" - PARA REFLEJAR EL AUMENTO DE COSTO CON EL MAP(*/
                }

            else if(brand == marcaVolkswagen.brands){
                precioSegunMarca(seguroBase, marcaVolkswagen.costoBase)
                /*precioParcial = multiplicacion(seguroBase, marcasDeAuto.volkswagen)*/
                }

             else if(brand == marcaFord.brands){
                precioSegunMarca(seguroBase, marcaFord.costoBase)
                /*precioParcial = multiplicacion(seguroBase, marcasDeAuto.ford)*/
                }

            else if(brand == marcaChevrolet.brands){
                precioSegunMarca(seguroBase, marcaChevrolet.costoBase)
                /*precioParcial = multiplicacion(seguroBase, marcasDeAuto.chevrolet)*/
                /*precioParcial = multiplicacion(seguroBase, chevrolet)*/
                }

            else if(brand == marcaRenault.brands){
                precioSegunMarca(seguroBase, marcaRenault.costoBase)
                /*precioParcial = multiplicacion(seguroBase, marcasDeAuto.renault)*/
                }

            else if(brand == marcaAudi.brands){
                precioSegunMarca(seguroBase, marcaAudi.costoBase)
                /*precioParcial = multiplicacion(seguroBase, marcasDeAuto.audi)*/
                }

            else {
                alert("Indique una marca valida")
              
            }}
            //seleccioneMarca()
          

                
/*CALCULO DE PRECIO DE ACUERDO AL AÑO DEL AUTO */
let precioParcial2

function precioPorYear(){
let year = prompt ("Indique el año de su auto:")
const añoActual = 2022

if(year!=""){
let diferencia = añoActual - year
let calculoDiferenciaPorAño = ((diferencia * precioParcial) * 3 )/ 100 /*CUANTO ES LO QUE SE AUMENTA (CALCULANDO EL 3% DE LA DIFERENCIA EN RELACION AL PRECIO PARCIAL)*/

precioParcial2 = precioParcial + calculoDiferenciaPorAño
}
else{
    alert("Indique un año válido")

}
}
precioPorYear()

/*alert ("Su precio parcial es:" + " " + "$" + precioParcial)*/

/*AUMENTOS POR TIPO DE SEGURO
Responsabilidad Civil: Aumenta un 30%
Terceros completos aumenta un 50%
Todo Riesgo: Aumenta un 62%
*/
let precioTotal

/*OBJETO DE LOS TIPOS DE SEGUROS*/

/*FUNCION CONSTRUCTORA DE LOS TIPOS DE SEGURO */
function Type(tipo, costoPorTipo, _nombre){
    this.tipo = tipo;
    this.costoPorTipo = costoPorTipo;
    this._nombre = _nombre
}

let respCivil = new Type(1, 0.3, "1- Responsabilidad Civil")
let tercerosCompletos = new Type(2, 0.5, "2- Terceros Completos")
let todoRiesgo = new Type(3, 0.6, "3- Todo Riesgo")

const productosSeguro = [respCivil, tercerosCompletos, todoRiesgo] 

let listaNombreProducto = []

for (const productoSeguro of productosSeguro){
    listaNombreProducto.push(productoSeguro._nombre)
}
console.log(listaNombreProducto)

/*let tipoDeSeguro = {
    respCivil: 0.3,
    tercerosCompletos: 0.5,
    todoRiesgo: 0.6
}*/

/*\n 1- Resposabilidad Civil\n 2- Terceros Completos\n 3- Todo Riesgo*/
function precioPorTipo(){
    let type = prompt ("Indique el seguro que desea:\n" +  listaNombreProducto.join("\n"))
    switch(type){
        case "1":
            if (type == respCivil.tipo){
             precioType = precioParcial2 * respCivil.costoPorTipo;
            }
            break;
        case "2":
            if (type == tercerosCompletos.tipo){
             precioType =  precioParcial2 * tercerosCompletos.costoPorTipo;
            }
            break;
        case "3":
            if (type == todoRiesgo.tipo){
             precioType = precioParcial2 * todoRiesgo.costoPorTipo;
            }
            break;
        default:
            alert("Ingrese un tipo de seguro válido")
        
    }
}

precioPorTipo()

/*CALCULO DEL COSTO TOTAL DEL SEGURO*/

let boton = document.getElementById("botonCotizar")

/*boton.addEventListener("onmousemove", estiloBoton)
function estiloBoton(){
    boton.style.backgroundColor = "red";
}*/

boton.addEventListener("click", costoTotal)


function costoTotal (){
precioTotal = Math.round(precioType + precioParcial2)
/*alert("El costo total es:" + " " + "$" + precioTotal)*/
document.getElementById("costoDelSeguro")
costoDelSeguro.innerText = "El costo del seguro es:" + " " + "$" + precioTotal

costoDelSeguro.innerHTML = `
<p id="resumenDatos">Datos Ingresados:</p>
<p>Nombre: ${nombre}</p>
<p>DNI: ${dni}</p>
<p>Año de Nacimiento: ${fechaNac}</p>
<br>
<p id="costoSeguro">El costo total es: $ ${precioTotal}</p>`;

let gracias = document.getElementById("gracias")
gracias.innerText = "Gracias" + " " + nombre + " " + "por tu visita!"
}











