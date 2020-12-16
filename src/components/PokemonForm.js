import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state={
    name:'',
    hp:'',
    sprites:{
      front:'',
      back:''
    }
  }

  handleName = (e) =>  this.setState({name:e.target.value})
  handleHp = (e) =>  this.setState({hp:e.target.value})
  handleFront = (e) =>  this.setState({sprites:{...this.state.sprites, front:e.target.value}})
  handleBack = (e) =>  this.setState({sprites:{...this.state.sprites, back:e.target.value}})
  //needs to use the spread operator to keep the current sprites values
  // handleFront = (e) =>  this.setState({sprites:{front:e.target.value}})
  // handleBack = (e) =>  this.setState({sprites:{back:e.target.value}})

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddPokemon(this.state)
    this.setState({
      name:'',
      hp:'',
      sprites:{
        front:'',
        back:''
      }
    })
    // you can use e.target.reset() but make sure to remove the value property off the input tag
    // e.target.reset()
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid value={this.state.name} label="Name" placeholder="Name" name="name" onChange={(e)=> this.handleName(e)}/>
            <Form.Input fluid value={this.state.hp} label="hp" placeholder="hp" name="hp" onChange={(e)=> this.handleHp(e)}/>
            <Form.Input fluid value={this.state.sprites.front} label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e)=> this.handleFront(e)}/>
            <Form.Input fluid value={this.state.sprites.back} label="Back Image URL" placeholder="url" name="backUrl" onChange={(e)=> this.handleBack(e)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
