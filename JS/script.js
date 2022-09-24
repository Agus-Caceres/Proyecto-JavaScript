
/*SIMULADOR DE COTIZACIONES DE SEGUROS DE AUTO*/

function multiplicacion(a, b){
    return a * b
}

const seguroBase = 2000

const respCivil = 2000
const tercerosCompletos = 2200
const todoRiesgo = 2500

/*AUMENOS SEGUN MARCAS DE AUTO*/
let toyota = 1.5
let volkswagen = 1.2
let ford = 1.05
let chevrolet = 1.15
let renault = 1.08
let audi = 2
 
let precioParcial = 0
    
/*switch(brand){
    case "toyota":
        return precioParcial = multiplicacion(seguroBase, toyota)
    

        alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
        break
}*/

function seleccioneMarca (){
    let brand = prompt ("Indique la marca de su auto:")
            if(brand == "Toyota" || brand == "TOYOTA" || brand == "toyota"){
                precioParcial = multiplicacion(seguroBase, toyota)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
               
                }

            else if(brand == "Volkswagen" || brand == "VOLKSWAGEN" || brand == "volkswagen"){
                precioParcial = multiplicacion(seguroBase, volkswagen)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
             
                }

             else if(brand.toUpperCase == "Ford" || brand == "FORD" || brand == "ford"){
                precioParcial = multiplicacion(seguroBase, ford)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
        
                }

            else if(brand.toUpperCase == "Chevrolet" || brand == "CHEVROLET" || brand == "chevrolet"){
                /*precioParcial = multiplicacion(seguroBase, chevrolet)*/
                
                }

            else if(brand.toUpperCase == "Renault" || brand == "RENAULT" || brand == "renault"){
                precioParcial = multiplicacion(seguroBase, renault)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
              
                }

            else if(brand.toUpperCase == "Audi" || brand == "AUDI" || brand == "AUDI"){
                precioParcial = multiplicacion(seguroBase, audi)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
                }

            else {
                alert("Indique una marca valida")
               
            }}
            seleccioneMarca()
          

                
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
const constanteRC = 0.3
const constanteTC = 0.5
const constanteTR = 0.6


function precioPorTipo(){
    let type = prompt ("Indique el seguro que desea: \n 1- Resposabilidad Civil\n 2- Terceros Completos\n 3- Todo Riesgo")
    switch(type){
        case "1":
            if (type == 1){
             precioType = precioParcial2 * constanteRC;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        case "2":
            if (type == 2){
             precioType =  precioParcial2 * constanteTC;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        case "3":
            if (type == 3){
             precioType = precioParcial2 * constanteTR;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        default:
            alert("Ingrese un tipo de seguro válido")
        
    }
}

precioPorTipo()
function costoTotal (){
precioTotal = precioType + precioParcial2
alert("El costo total es:" + " " + "$" +precioTotal)
}
costoTotal()


   

let continuar = prompt ("Desea cotizar otro seguro? \n 1- Seguir Cotizando \n 2-Salir ")

while(continuar == 1){
        seleccioneMarca()
        precioPorYear()
        precioPorTipo()
        costoTotal()
        continuar = prompt ("Desea cotizar otro seguro? \n 1- Seguir Cotizando \n 2- Salir ")
}

alert("Gracias por tu visita!")




    




/*let respuesta = alert ("Los datos ingresados son:" + "\n" + brand +"\n" + year + "\n" + type)*/
