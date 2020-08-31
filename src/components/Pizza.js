import React from "react";

const Pizza = (props) => {
  let {topping, size, vegetarian, id} = props.pizza;

  function handleClick(evt){
    console.log(evt.target)
  };

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true ? "Yes" : "No"}</td>
      <td><button 
            type="button" 
            className="btn btn-primary"
            onClick={handleClick}
            >
              Edit Pizza
          </button>
      </td>
    </tr>
  );
};

export default Pizza;
