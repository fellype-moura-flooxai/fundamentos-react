import React from "react"
import ReactDOM from "react-dom"

// import PrimeiroComponente from "./componentes/PrimeiroComponente"
// import CompA, {  CompB as B } from "./componentes/DoisComponentes"
// import Multi from "./componentes/MultiElementos"
// import FamiliaMoura from "./componentes/FamiliaMoura"
import Familia from "./componentes/Familia"
import Membro from "./componentes/Membro"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Lucia" />
        </Familia>
        {/* <FamiliaMoura /> */}
        {/* <Multi /> */}
        {/* <CompA valor='Ola eu sou componente A' />
        <B valor='Ola eu sou componente B' /> */}
        {/* <PrimeiroComponente valor="Olá React" /> */}
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