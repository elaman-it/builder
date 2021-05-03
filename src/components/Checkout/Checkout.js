import PizzaPreview from "../PizzaBuilder/PizzaPreview/PizzaPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";


const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: {
        tomato: 10,
        salami: 10,
        redPepper: 10,
        yellowPepper: 10,
        greenOlive: 10,
        blackOlive: 10,
      },
      price: 100,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <PizzaPreview ingredients={{
        tomato: 5, 
        salami: 10,
        greenOlive: 50,
      }} price={150} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default Checkout;