
function multiplicacion(a, b){
    return a * b
}

const seguroBase = 2000

const respCivil = 2000
const tercerosCompletos = 2200
const todoRiesgo = 2500

let toyota = 1.5
let volkswagen = 1.2
let ford = 1.05
let chevrolet = 1.15
let renault = 1.08
let audi = 2

      
    
let precioParcial = 0
    
let brand = prompt ("Indique la marca de su auto:")

/*switch(brand){
    case "toyota":
        return precioParcial = multiplicacion(seguroBase, toyota)
    

        alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
        break
}*/

            if(brand == "Toyota" || brand == "TOYOTA" || brand == "toyota"){
                precioParcial = multiplicacion(seguroBase, toyota)
                alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
               
                }

            else if(brand == "Volkswagen" || brand == "VOLKSWAGEN" || brand == "volkswagen"){
                precioParcial = multiplicacion(seguroBase, volkswagen)
                alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
             
                }

             else if(brand.toUpperCase == "Ford" || brand == "FORD" || brand == "ford"){
                precioParcial = multiplicacion(seguroBase, ford)
                alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
        
                }

            else if(brand.toUpperCase == "Chevrolet" || brand == "CHEVROLET" || brand == "chevrolet"){
                precioParcial = multiplicacion(seguroBase, chevrolet)
                
                }

            else if(brand.toUpperCase == "Renault" || brand == "RENAULT" || brand == "renault"){
                precioParcial = multiplicacion(seguroBase, renault)
                alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
              
                }

            else if(brand.toUpperCase == "Audi" || brand == "AUDI" || brand == "AUDI"){
                precioParcial = multiplicacion(seguroBase, audi)
                alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
                }
            else {
                alert("Indique una marca valida")
            }

                





let year = prompt ("Indique el año de su auto:")
const añoActual = 2022
let diferencia = añoActual - year
let calculoDiferenciaPorAño = ((diferencia * precioParcial) * 3 )/ 100
precioParcial = precioParcial + calculoDiferenciaPorAño
alert ("Su precio parcial es:" + " " + "$" + precioParcial)


let type = prompt ("Indique el seguro que desea: \n - Resposabilidad Civil\n - Terceros Completos\n - Todo Riesgo")
let respuesta = alert ("Los datos ingresados son:" + "\n" + brand +"\n" + year + "\n" + type) 
