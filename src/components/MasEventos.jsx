import React, { Component } from 'react'

export class MasEventos extends Component {

    handleClick(e,msg){
        console.log(msg)
    }
  render() {
    return (
      <div>
        <h2>Mas eventos</h2>
        <button onClick={(e)=>this.handleClick(e,"Hola Pasando parametro desde un evento")}>Saludar</button>
      </div>
    )
  }
}

export default MasEventos
