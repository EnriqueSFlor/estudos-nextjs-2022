import { Component } from "react";

export default class Contador extends Component {

    state = {
        numero: 7,
        passo: this.props.pass ?? 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }


    render() {
        return (
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
                <input type="number" min={1} max={1000}
                    value={this.state.passo}
                    onChange={ev => this.setState({passo: +ev.target.value})}/>
                 
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}