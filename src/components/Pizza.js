import React from "react"

const Pizza = (props) => {
  let { topping, size, vegetarian } = props.pizza
  

  let handleEditPizza = (event) => {
    props.handleEditPizza(props.pizza.id)
  }

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleEditPizza}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
