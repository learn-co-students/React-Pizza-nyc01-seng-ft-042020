import React, { Component } from 'react';
import Pizza from '../components/Pizza';

class PizzaList extends Component {

  render() {
    let arrayOfPizzas = this.props.pizzas.map((pizzaPOJO) => {
      return <Pizza 
        pizza={pizzaPOJO}
        key={pizzaPOJO.id}
      />
    });

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
          {
            arrayOfPizzas
          }
        </tbody>
      </table>
    );
  };
};

export default PizzaList;
