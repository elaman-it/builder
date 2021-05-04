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

const builderReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_INGREDIENT":
      newState.ingredients[action.ingredient]++;
      break;
    case "REMOVE_INGREDIENT":
      newState.ingredients[action.ingredient]--;
      break;
  
    default:
      break;
  }

  return newState;
}

export default builderReducer;