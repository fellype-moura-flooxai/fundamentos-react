import React from "react"
import ReactDOM from "react-dom"

import PrimeiroComppnente from "./componentes/PrimeiroComponente"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <PrimeiroComppnente />
    </div>
    , elemento)

// const jsx = <h1>Olá React</h1>
// ReactDOM.render(jsx, elemento)


// ReactDOM.render(
//     <ul>
//         <li>1) Pedro</li>
//         <li>2) Maria</li>
//         <li>3) Ana</li>
//     </ul>
// , elemento)

// const lista = document.createElement('ul')

// let item = document.createElement('li')
// let texto = document.createTextNode('1) Pedro')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('2) Maria')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('3) Ana')
// item.appendChild(texto)
// lista.appendChild(item)

// const elemento = document.getElementById('root')
// elemento.appendChild(lista)