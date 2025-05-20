import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: 0
    }

    maisUm = () => {
        this.alterarNumero(1)
        // this.setState({ numero: this.state.numero + 1 })
        // this.state.numero = this.state.numero++
    }

    menosUm = () => {
        this.alterarNumero(-1)
    }

    alterarNumero = (diferenca) => {
        this.setState({ 
            numero: this.state.numero + diferenca 
        })
    }

    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm} >Inc</button>
                <button onClick={this.menosUm} >Dec</button>
                <button onClick={() => this.alterarNumero(10)}>
                    Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}>
                    Dec10</button>
            </div>
        )
    }
}


// soluçao 1 Bind
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// soluçao 2 funçao arrow (onClick)
//  <button onClick={() => this.maisUm()} >Inc</button>

// soluçao 3 funçao arrow
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }