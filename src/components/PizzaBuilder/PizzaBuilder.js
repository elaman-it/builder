import classes from "./PizzaBuilder.module.css";
import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

const PizzaBuilder = () => {
  const ingredients = {
    tomatoes: 10,
    salami: 20,
    olives: 10,
  };

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls />
    </div>
  );
}

export default PizzaBuilder;