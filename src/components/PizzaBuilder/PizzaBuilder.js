import classes from "./PizzaBuilder.module.css";
import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

const PizzaBuilder = () => {
  const ingredients = {
    tomato: 10,
    salami: 20,
    greenOlive: 10,
    blackOlive: 10,
    redPepper: 10,
    yellowPepper: 5,
  };

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls />
    </div>
  );
}

export default PizzaBuilder;