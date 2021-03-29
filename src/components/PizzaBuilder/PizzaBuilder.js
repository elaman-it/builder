import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

import classes from "./PizzaBuilder.module.css";
import { useState } from "react";

const PizzaBuilder = () => {
  const [ingredients, setIngredients] = useState([
    "tomato",
    "salami",
    "tomato",
    "salami"
  ]);

  function addIngredient(type) {
    const newIngredients = [ ...ingredients ];
    newIngredients.push(type);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = [ ...ingredients ];
    const index = newIngredients.lastIndexOf(type);
    if (index !== -1) {
      newIngredients.splice(index, 1);
    }
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default PizzaBuilder;