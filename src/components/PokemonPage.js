import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons:[],
    searchTerm:''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(data => {
      this.setState({
        pokemons:data
      })
    })
  }

  handleSearch = (e) => {
    // console.log(e.target.value)
    this.setState({
      searchTerm:e.target.value
    })
  }

  handleAddPokemon = (pokemon) => {
    // console.log(pokemon)
    fetch('http://localhost:3000/pokemon', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(pokemon)
    })
    .then(res=> res.json())
    .then(data => {
      // console.log(data)
      this.setState({
        pokemons:[...this.state.pokemons, data]
      })
    })
  }


  render() {
    // console.log(this.state.pokemons)
    // console.log(this.state.searchTerm)
    let pokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleAddPokemon={this.handleAddPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
