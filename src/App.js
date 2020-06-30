import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    id: 0,
    pizzas: [],
    topping: "",
    size: "",
    vegetarian: true
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(json => this.setState({
        pizzas: json
      }))
  }

  handleClick = (topping, size, vegetarian, id) => {
    this.setState({
        topping: topping, 
        size: size,
        vegetarian: vegetarian,
        id: id
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  toggleVegetarian = () => {
    this.setState((prevState) => {return {vegetarian: !prevState.vegetarian}})
  }

  updatePizza = (pizzaObj) => {
    this.setState((prevState) => {return {pizzas: prevState.pizzas.map(pizza => { if (pizza.id === pizzaObj.id) { return pizzaObj } else {return pizza} })}
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm id={this.state.id} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian}
          handleChange={this.handleChange} toggleVegetarian={this.toggleVegetarian} updatePizza={this.updatePizza} />
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
