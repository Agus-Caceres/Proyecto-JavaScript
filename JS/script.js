

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

localStorage.setItem("Marca1", JSON.stringify(marcaToyota))
let toyotaStorage = JSON.parse(localStorage.getItem("Marca"))

localStorage.setItem("Marca2", JSON.stringify(marcaVolkswagen))
let volkswagenStorage = JSON.parse(localStorage.getItem("Marca2"))

localStorage.setItem("Marca3", JSON.stringify(marcaFord))
let fordStorage = JSON.parse(localStorage.getItem("Marca3"))

localStorage.setItem("Marca4", JSON.stringify(marcaChevrolet))
let chevroletStorage = JSON.parse(localStorage.getItem("Marca4"))

localStorage.setItem("Marca5", JSON.stringify(marcaRenault))
let renaultStorage = JSON.parse(localStorage.getItem("Marca5"))

localStorage.setItem("Marca6", JSON.stringify(marcaAudi))
let audiStorage = JSON.parse(localStorage.getItem("Marca6"))

/*HACEMOS UN ARRAY CON SOLO EL NOMBRE DE LAS MARCAS */
const arrayMarcas = [marcaToyota, marcaVolkswagen, marcaFord, marcaChevrolet, marcaRenault, marcaAudi]
const listaMarcas = []

for (nombreMarca of arrayMarcas) {
    listaMarcas.push(nombreMarca.brands)
}
console.log(listaMarcas.join(", "))

/*PRUEBA DE INCLUDES() 
const filtradoMarcas = listaMarcas.filter((searchBrands) => searchBrands.includes("T"))
console.log(filtradoMarcas)*/


/*MAP CON AUMENTO DE PRECIOS*/
const brandPrice = arrayMarcas.map((el) => el.costoBase*1.2) 
console.log(brandPrice)

/*MAP PARA VER LOS ID GENERADOS (PRUEBA) */
let idMarcas = arrayMarcas.map((prod) => prod.id)
console.log(idMarcas)


 
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



//PRECIO POR MARCAS

function precioSegunMarca(base, marca){
    precioParcial = multiplicacion(base, marca)
}

let brand = document.getElementById("brand");
    brand.innerHTML = `
        <option id="selectBrand" value="">- Seleccionar -</option>
        <option id="selectBrand" value="Toyota">${marcaToyota.brands}</option>
        <option id="selectBrand" value="Volkswagen">${marcaVolkswagen.brands}</option>
        <option id="selectBrand" value="Ford">${marcaFord.brands}</option>
        <option id="selectBrand" value="Chevrolet">${marcaChevrolet.brands}</option>
        <option id="selectBrand" value="Renault">${marcaRenault.brands}</option>
        <option id="selectBrand" value="Audi">${marcaAudi.brands}</option>          
        `
    
    brand.addEventListener('change', seleccioneMarca)
    
    //()=>{brand = opcionesASeleccionarMarca.value}

    
function seleccioneMarca (){
    //let brand = prompt ("Indique la marca de su auto:")
            if(brand.value == "Toyota"){
                 precioSegunMarca(seguroBase, brandPrice[0]) /*REEMPLAZO DE: "marcaToyota.costoBase" - PARA REFLEJAR EL AUMENTO DE COSTO CON EL MAP(*/
                }

            else if(brand.value == marcaVolkswagen.brands){
                 precioSegunMarca(seguroBase, marcaVolkswagen.costoBase)
                /*precioParcial = multiplicacion(seguroBase, marcasDeAuto.volkswagen)*/
                }

             else if(brand.value == marcaFord.brands){
                 precioSegunMarca(seguroBase, marcaFord.costoBase)
                }

            else if(brand.value == marcaChevrolet.brands){
                 precioSegunMarca(seguroBase, marcaChevrolet.costoBase)
                }

            else if(brand.value == marcaRenault.brands){
                 precioSegunMarca(seguroBase, marcaRenault.costoBase)
                }

            else if(brand.value == marcaAudi.brands){
                 precioSegunMarca(seguroBase, marcaAudi.costoBase)
                }

            else {
                alert("Indique una marca valida")
                console.log(precioParcial)}
            }         

           

                
/*CALCULO DE PRECIO DE ACUERDO AL AÑO DEL AUTO */
let precioParcial2 = 0

let year = document.getElementById("anio")
year.addEventListener('change', precioPorYear)

function precioPorYear(){

const fechaActual= new Date()
const añoActual = fechaActual.getFullYear() 
console.log(añoActual)

if(year.value != (" ")){
let diferencia = añoActual - year.value
let calculoDiferenciaPorAño = ((diferencia * precioParcial) * 3 )/ 100 /*CUANTO ES LO QUE SE AUMENTA (CALCULANDO EL 3% DE LA DIFERENCIA EN RELACION AL PRECIO PARCIAL)*/
return precioParcial2 = precioParcial + calculoDiferenciaPorAño
}

else{
    alert("Indique un año válido")

}
console.log(precioParcial2)
} 



/*AUMENTOS POR TIPO DE SEGURO
Responsabilidad Civil: Aumenta un 30%
Terceros completos aumenta un 50%
Todo Riesgo: Aumenta un 62%
*/

let precioTotal = 0

/*FUNCION CONSTRUCTORA DE LOS TIPOS DE SEGURO */
function Type(tipo, costoPorTipo, _nombre){
    this.tipo = tipo;
    this.costoPorTipo = costoPorTipo;
    this._nombre = _nombre
}

let respCivil = new Type("1", 0.3, "Responsabilidad Civil")
let tercerosCompletos = new Type("2", 0.5, "Terceros Completos")
let todoRiesgo = new Type("3", 0.8, "Todo Riesgo")

const productosSeguro = [respCivil, tercerosCompletos, todoRiesgo] 

let listaNombreProducto = []

for (const productoSeguro of productosSeguro){
    listaNombreProducto.push(productoSeguro._nombre)
}
console.log(listaNombreProducto)



let type = document.getElementById("typeS");
type.innerHTML = `
        <option id="selectType" value="">- Seleccionar -</option>
        <option id="selectType" value="Responsabilidad Civil">${respCivil._nombre}</option>
        <option id="selectType" value="Terceros Completos">${tercerosCompletos._nombre}</option>
        <option id="selectType" value="Todo Riesgo">${todoRiesgo._nombre}</option>`
        
type.addEventListener('change', precioPorTipo)

/*ASINCRNONIA: no siempre voy a tener esta respuesta instantaneamente */
//fetch('data.json')
//.then((response) => response.json()) /*ESTA LINEA VA SIEMPRE*/
//.then((data) => precioPorTipo(data))


let precioType = 0

function precioPorTipo(){
   // let type = prompt ("Indique el seguro que desea:\n" +  listaNombreProducto.join("\n"))
   
    if (type.value == respCivil._nombre){
        return precioParcial2 = precioParcial2 + (precioParcial2 * respCivil.costoPorTipo);
    }
    else if (type.value == tercerosCompletos._nombre){
        return precioParcial2 =  precioParcial2 + (precioParcial2 * tercerosCompletos.costoPorTipo);
    }
    else if (type.value == todoRiesgo._nombre){
        return precioParcial2 =  precioParcial2 + (precioParcial2 * todoRiesgo.costoPorTipo);
    }
    else {
        
        alert("Ingrese un tipo de seguro válido") 
    }
   

}


/*CALCULO DEL COSTO TOTAL DEL SEGURO*/

let boton = document.getElementById("botonCotizar")

/*boton.addEventListener("onmousemove", estiloBoton)
function estiloBoton(){
    boton.style.backgroundColor = "red";
}*/

boton.addEventListener("click", costoTotal)


function costoTotal (evento){
precioTotal = Math.round(precioType + precioParcial2 + precioParcial)
document.getElementById("costoDelSeguro")
costoDelSeguro.innerText = "El costo del seguro es:" + " " + "$" + precioTotal
evento.preventDefault()

  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Cotización Exitosa'
})

costoDelSeguro.innerHTML = `
<p id="resumenDatos">Datos Ingresados:</p>
<p>Nombre: ${nombre}</p>
<p>DNI: ${dni}</p>
<p>Año de Nacimiento: ${fechaNac}</p>
<p>Marca: ${brand.value}</p>
<p>Año del Auto:  ${year.value}</p>
<p>Tipo de Seguro: ${type.value}</p>
<br>
<p id="costoSeguro">El costo total es: $ ${precioTotal}</p>`;

let gracias = document.getElementById("gracias")
gracias.innerText = "Gracias" + " " + nombre + " " + "por tu visita!"
console.log(precioTotal)

/*BOTON PARA EMITIR EL SEGURO */
let emitirSeguro = document.getElementById("emitirSeguro")
emitirSeguro.innerHTML= `<button id="botonEmitir" type="submit" class="btn btn-raised btn-primary" >Emitir Seguro</button>`
emitirSeguro.addEventListener("click", contactoEmitir)

function contactoEmitir(){
    
    Swal.fire({
        title: '<strong>Deseas emitir tu seguro?</strong>',
        icon: 'info',
        html:
          'Contactate con nosotros, ' +
          '<a href="https://walink.co/8f0ec4">escribinos</a> ' +
          'y te responderemos a la brevedad con la informacion que necesitas',
        showCloseButton: true,
      
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> OK!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        
      })
     
} 
}

//let emitirSeguro = document.getElementById("botonCompanies")
//emitirSeguro.addEventListener("click", dataJson)



//function dataJson(){
    fetch('data.json')
    .then((response) => response.json())
    .then((data) => 
    data.forEach((companyList) => {
        companiesJson.innerHTML +=` 
           
<tr>
<td>${companyList.company}</td>
<td>${companyList.descripcion}</td>
<td>${companyList.type}</td>
</tr>
`

        }))
   




       /* companies.innerHTML = " "
        for(let valor of datos {
            const div = document.createElement('div')
            div.classList.add('box-container')
            div.innerHTML =` <thead>
            <tr>
              <th scope="col">Compañia:</th>
              <th scope="col">Descripción</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody id="jsonCompanies">
          <tr>
          <td>${segurosCompanie.company}</td>
          <td>${segurosCompanie.descripcion}</td>
          <td>Link</td>
        </tr>
          </tbody>`
        }
        )*/
    
    




/*function alertCompanies(){
  
   /* function cardsCompanies(){
        data.forEach((data) => {
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        //TITLE
        let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = data.company
        //DESCRIPCION
        let cardDescription = document.createElement('p')
        cardDescription.classList.add('card-text')
        cardDescription.innerText = data.descripcion
        //BOTON
        let cardButton = document.createElement('button')
        cardDescription.classList.add('btn', 'btn-primary')
        cardDescription.innerText = 'Pagina Web'
        cardButton.setAttribute('mark', data.type)
        
        cardBody.append(cardTitle)
        cardBody.append(cardDescription)
        cardBody.append(cardButton)
        
    })
    }}*/
    
    

 /*function render(lista){
   
        for(const prod of lista){
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

            //TITLE
        let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = `${prod.company}`
        //DESCRIPCION
        let cardDescription = document.createElement('p')
        cardDescription.classList.add('card-text')
        cardDescription.innerText = `${prod.descripcion}`
        //BOTON
        let cardButton = document.createElement('button')
        cardDescription.classList.add('btn', 'btn-primary')
        cardDescription.innerText = 'Pagina Web'
        cardButton.setAttribute('mark', prod.type)
        
        cardBody.append(cardTitle)
        cardBody.append(cardDescription)
        cardBody.append(cardButton)
        }
    }*/