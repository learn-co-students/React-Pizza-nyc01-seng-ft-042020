import React from "react"

const Pizza = (props) => {

  const { topping, size, vegetarian, id } = props.pizza

  function handleClick() {
    props.handleClick(topping, size, vegetarian, id)
  }

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
