import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then(fetchedPizzas => {
      this.setState({
        pizzas: fetchedPizzas
      })
    })
  }

  returnPizzas = () => {
    
    return this.state.pizzas
  }

  handleEditPizza = (pizzaId) => {
    let editedPizza = this.state.pizzas.find(pizza => pizza.id === pizzaId)
    this.setState({
      editPizza: editedPizza
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEditPizzaSubmit = (editedPizza) => {
    let foundPizza = this.state.pizzas.find(pizza => pizza.id === editedPizza.id)
    foundPizza.topping = editedPizza.topping
    foundPizza.size = editedPizza.size
    foundPizza.vegetarian = editedPizza.vegetarian
    console.log(foundPizza)
    let changedArray = this.state.pizzas.map((pizza) => {
      if (pizza.id !== this.state.id){
        return pizza
      } else {
        return foundPizza
      }
    })
    this.setState({
      pizzas: changedArray
    })
  }

  handleVegetarian = (event) => {
    console.log(event.target.value)
    this.setState({
      editPizza: {
        ...this.state.editPizza,
        vegetarian: !this.state.editPizza.vegetarian
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        editPizza = {this.state.editPizza} 
        handleChange={this.handleChange}
        handleEditPizzaSubmit={this.handleEditPizzaSubmit} 
        handleVegetarian={this.handleVegetarian}/>
        <PizzaList pizzas = {this.returnPizzas()} handleEditPizza = {this.handleEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
