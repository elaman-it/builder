import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";
import classes from "./PizzaPreview.module.css";

const PizzaPreview = () => {
  return (
    <div className={classes.PizzaPreview}>
      <div className={classes.sauce}>
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="salami" />
        <PizzaIngredient type="olive" />
        <PizzaIngredient type="mushroom" />
      </div>
    </div>
  );
}

export default PizzaPreview;