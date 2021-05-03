import PizzaPreview from "../PizzaBuilder/PizzaPreview/PizzaPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";


const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  return (
    <div className={classes.Checkout}>
      <PizzaPreview ingredients={{
        tomato: 5, 
        salami: 10,
        greenOlive: 50,
      }} price={150} />
      <CheckoutForm />
    </div>
  );
}
 
export default Checkout;