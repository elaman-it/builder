import classes from "./PizzaIngredient.module.css";

const PizzaIngredient = ({ type }) => {
  return (
    <div className={classes.PizzaIngredient}>{type}</div>
  );
}

export default PizzaIngredient;