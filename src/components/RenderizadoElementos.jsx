import React, { Component } from 'react'
import data from "../helpers/data.json"

function ElementoLista(props){
    return(
        <li>
            {props.el.name}
        </li>
    )
}

export class RenderizadoElementos extends Component {

    constructor(props){
        super(props)
        this.state={
            seasons:["Primavera","Verano","Otoño","Invierno"]
        }
    }
  render() {
    console.log(data)
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
            {this.state.seasons.map((el, i)=>(<li key={i}>{el}</li>))}
        </ol>
        <h3>Frameworks FrontEnd</h3>
        <ul>
            {
                data.Frameworks.map((el,i)=> (
                <ElementoLista key={i} el={el}></ElementoLista>))
            }
        </ul>
      </div>
    )
  }
}

export default RenderizadoElementos
