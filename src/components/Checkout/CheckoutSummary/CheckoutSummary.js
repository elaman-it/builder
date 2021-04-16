import classes from "./CheckoutSummary.module.css";
import PizzaPreview from "../../PizzaBuilder/PizzaPreview/PizzaPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <PizzaPreview ingredients={{
          tomato: 5, 
          salami: 10,
          greenOlive: 50,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;