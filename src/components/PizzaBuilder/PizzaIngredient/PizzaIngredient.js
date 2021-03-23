import classes from "./PizzaIngredient.module.css";

import salamiBackground from "../../../images/salami.svg";
import tomatoBackground from "../../../images/tomato.svg";
import oliveBackground from "../../../images/olive.svg";

const PizzaIngredient = ({ type }) => {
  const types = {
    salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
    tomato: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
    olive: { backgroundImage: `url(${oliveBackground})`, width: "10px", height: "10px" },
  };

  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}

export default PizzaIngredient;