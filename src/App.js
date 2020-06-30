import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state ={
    pizzaList: [],
    pizzaForm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then((pizzas) => {
      this.setState({
        pizzaList: pizzas
      })
    })
  }

  renderToForm = () => {
    
  }

  render() {
    let {pizzaList} = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList
          pizzas={pizzaList}
        />
      </Fragment>
    );
  }
}

export default App;
