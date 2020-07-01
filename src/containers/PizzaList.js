import React, { Component } from 'react';
import Pizza from '../components/Pizza'


class PizzaList extends Component {


  render() {
    let returnPizza = this.props.pizzas.map(pizzaObj => {
      return <Pizza pizza={pizzaObj} key={pizzaObj.id} handleEditPizza={this.props.handleEditPizza}/>
    })
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {returnPizza}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
