import classes from "./PizzaBuilder.module.css";
import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

const PizzaBuilder = () => {
  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview />
      <PizzaControls />
    </div>
  );
}

export default PizzaBuilder;