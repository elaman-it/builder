import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/types";

const initialState = {
  ingredients: {
    tomato: 10,
    salami: 10,
    redPepper: 10,
    yellowPepper: 10,
    greenOlive: 10,
    blackOlive: 10,
  },
  price: 200,
};
const prices = {
  tomato: 3.5,
  salami: 4,
  greenOlive: .3,
  blackOlive: .3,
  redPepper: 2,
  yellowPepper: 1,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
  
    default:
      break;
  }

  return newState;
}

export default builder;