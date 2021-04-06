import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

import classes from "./PizzaBuilder.module.css";
import { useState } from "react";

const PizzaBuilder = () => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    greenOlive: .3,
    blackOlive: .3,
    redPepper: 2,
    yellowPepper: 1,
  };
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    greenOlive: 1,
    blackOlive: 1,
    redPepper: 1,
    yellowPepper: 1,
  });
  const [price, setPrice] = useState(150);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview
        ingredients={ingredients}
        price={price} />
      <PizzaControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default PizzaBuilder;