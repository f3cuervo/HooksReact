import React, { Component } from "react";

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar() {
        this.setState({
            contador: this.state.contador + 1,
        });
    }
    restar() {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de clase</h2>
                <h3>{this.state.contador}</h3>
                <div>
                    <button onClick={this.sumar}>+1</button>
                    <button onClick={this.restar}>-1</button>
                </div>
            </div>
        );
    }
}

export class EventosES7 extends Component {
    state = {
        contador: 0,
    };

    sumar = () => {
        this.setState({
            contador: this.state.contador + 1,
        });
    };
    restar = () => {
        this.setState({
            contador: this.state.contador - 1,
        });
    };

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <div>
                    <button onClick={this.sumar}>+1</button>
                    <button onClick={this.restar}>-1</button>
                </div>
            </div>
        );
    }
}
