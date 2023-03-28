import React, { Component } from 'react'

function Pokemon(props){
    return(
        <>
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
        </>
    )
}

export class ApisAjax extends Component {
    state={
        pokemons:[]
    };
    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
        .then(data=>data.json())
        .then(json =>{
            console.log(json)
            json.results.forEach(el=>{
                fetch(el.url).then((res)=>res.json()).then(data=>{console.log(data)
                let pokemon={
                    id:data.id,
                    name:data.name,
                    avatar:data.sprites.front_default
                }

                let pokemons=[...this.state.pokemons, pokemon]
                this.setState({pokemons})
                })
            })
        })
    }
  render() {
    return (
      <div>
        <h2>Apis en class components</h2>
        {this.state.pokemons.map(el => <Pokemon 
        key={el.id}
        name={el.name}
        avatar={el.avatar}></Pokemon>)}
      </div>
    )
  }
}

export default ApisAjax
