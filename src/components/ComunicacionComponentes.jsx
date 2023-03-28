import React, { Component } from 'react'

export class ComunicacionComponentes extends Component {
    state={
        contador:0
    };

    incrementarContador=(e)=>{
        this.setState({
            contador:this.state.contador +1
        })
    }

  render() {
    return (
      <div>
        <h2>Comunicacion entre componentes</h2>
        <h3>{this.state.contador}</h3>
        <Hijo myContador={this.incrementarContador} msg="Hola, soy el mensaje"></Hijo>
        <Hijo myContador={this.incrementarContador} msg="Hola, soy el mensaje 2"></Hijo>
      </div>
    )
  }
}

function Hijo(props){
    return(
        <>
        <h3>{props.msg}</h3>
        <button onClick={props.myContador}>Aumentar contador del padre</button>
        </>
    ) 
}

export default ComunicacionComponentes
