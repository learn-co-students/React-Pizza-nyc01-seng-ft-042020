import React, {Component} from "react"

class PizzaForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.editPizza)
    fetch(`http://localhost:3000/pizzas/${this.props.editPizza.id}`, {
      method: "PATCH",
      headers: {
        "content-type":"application/json",
        "accept":"application/json"
      },
      body: JSON.stringify(
        {topping: this.props.editPizza.topping,
        size: this.props.editPizza.size,
        vegetarian: this.props.editPizza.vegetarian}
      )
      })
      .then(r => r.json())
      .then(editedPizza => {
        console.log(editedPizza)
        this.props.handleEditPizzaSubmit(editedPizza)
      })
    }

  render() { 
    let { topping, size, vegetarian} = this.props.editPizza
    return ( 
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={topping} onChange={this.props.handleChange}/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={this.props.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="isVegetarian" checked={vegetarian ? true : false} onChange={this.props.handleVegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="isVegetarian" checked={vegetarian ? false : true} onChange={this.props.handleVegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>

     )
  }
}

export default PizzaForm
