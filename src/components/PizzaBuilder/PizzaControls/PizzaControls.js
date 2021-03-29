import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";

const PizzaControls = ({ addIngredient, removeIngredient }) => {
  const results = [];
  const ingredients = [
    "tomato",
    "salami",
    "greenOlive",
    "blackOlive",
    "redPepper",
    "yellowPepper",
  ];
  for (const ingredient in ingredients) {
    results.push(<PizzaControl
        key={ingredients[ingredient]}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredients[ingredient]} />)
  }

  return (
    <div className={classes.PizzaControls}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default PizzaControls;