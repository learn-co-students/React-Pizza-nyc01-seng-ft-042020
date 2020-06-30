import React from "react"

const PizzaForm = (props) => {

  const { id, topping, size, handleChange, toggleVegetarian, updatePizza } = props
  let { vegetarian } = props

  function submitForm() {
    const pizzaObj = {
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    }

    const configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(pizzaObj)
    }

    fetch(`http://localhost:3000/pizzas/${id}`, configObj)
    .then(updatePizza(pizzaObj))
  }

  return(
      <div className="form-row">
        <div className="col-5">
        <input type="text" className="form-control" name="topping" placeholder="Pizza Topping"
          value={topping} onChange={handleChange} />
        </div>
        <div className="col">
          <select value={size} name="size" className="form-control" onChange={props.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
          <input className="form-check-input" type="radio" value="Vegetarian"
            checked={vegetarian ? true : false} onChange={toggleVegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="radio" value="Not Vegetarian"
            checked={vegetarian ? false : true} onChange={toggleVegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={submitForm}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
