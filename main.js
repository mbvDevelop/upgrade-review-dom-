// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ul = document.createElement("ul")
for (country of countries ) {
    let li = document.createElement("li")
    let text = document.createTextNode(country)
    li.appendChild(text)
    ul.appendChild(li)
}
document.querySelector("body").appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let toDelete = document.querySelector(".fn-remove-me")
document.querySelector("body").removeChild(toDelete)

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let ul = document.createElement("ul")
for (car of cars ) {
    let li = document.createElement("li")
    let text = document.createTextNode(car)
    li.appendChild(text)
    ul.appendChild(li)
}
document.querySelector('[data-function="printHere"').appendChild(ul)

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
let rows = []
for (country of countries) {
    let div = document.createElement("div")
    let title = document.createElement("h4")
    let img = document.createElement("img")
    title.innerHTML = country.title
    img.src = country.imgUrl
    div.appendChild(title)
    div.appendChild(img)
    rows.push(div)
    document.querySelector("html").appendChild(div)


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.
    let button = document.createElement("button")
    button.innerHTML = "Delete"
    button.addEventListener("click", function() {
        document.querySelector("html").removeChild(div)
    })
    div.appendChild(button)

}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

let button = document.createElement("button")
button.innerHTML = "Delete"
document.querySelector("html").appendChild(button)
let deleteLast = function () {
    try {
    document.querySelector("html").removeChild(rows[rows.length - 1])
    rows.splice(-1)
    } catch {
        console.log("No more rows to clear")
    }
}
button.addEventListener("click", deleteLast)
