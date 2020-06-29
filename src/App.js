import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    pizza: { 
      size: '',
      topping: '',
      vegetarian: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  choosePizza = id => {
    let chosenPizza = this.state.pizzas.find(pizza => pizza.id === id)
    let { size, topping, vegetarian } = chosenPizza
    this.setState({ id, size, topping, vegetarian: vegetarian ? 'Vegetarian' : 'Not Vegetarian'} )
  }

  handleFormChange = e => {
    this.setState({ pizza: {...this.state.pizza, [e.target.name]: e.target.value }})
  }


  handlePizzaPatch = () => {
    let { id, topping, vegetarian, size } = this.state;
    let fetchOptions = {
      method: id ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        size, 
        topping,
        vegetarian: vegetarian === 'Vegetarian'
      })
    }

    if (id) {
      fetch(`http://localhost:3000/pizzas/${id}`,fetchOptions)
      .then(res => res.json())
      .then(newPizza => {
        let newPizzas = this.state.pizzas.map( pizza => {
          if(pizza.id === newPizza.id ){
            return newPizza
          } else {
            return pizza
          }
        })
        this.setState({ pizzas: newPizzas, id: null, topping: '', size: '', vegetarian: '' })
      })
    } else {
      fetch(`http://localhost:3000/pizzas`, fetchOptions)
      .then(res => res.json())
      .then(newPizza => {
        this.setState({ pizzas: [...this.state.pizzas, newPizza], id: null, topping: '', size: '', vegetarian: '' })
      })
    }
  }

  render() {
    let { pizzas, id, topping, size, vegetarian } = this.state;
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          handlePizzaPatch={this.handlePizzaPatch}
          handleFormChange={this.handleFormChange}
          pizza={this.state.pizza}/>
        <PizzaList 
          pizzas={pizzas} 
          choosePizza={this.choosePizza}/>
      </Fragment>
    );
  }
}

export default App;
