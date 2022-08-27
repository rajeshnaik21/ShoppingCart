export const ADD_TO_CART = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

//remove cart

export const REMOVE_TO_CART = (id) => {
  return {
    type: "REMOVE_TO_CART",
    payload: id,
  };
};

// decrement item

export const INCREMENT = (qty) => {
  return {
    type: "INCREMENT",
    payload: qty,
  };
};
// decrement item

export const DECREMENT = (qty) => {
  return {
    type: "DECREMENT",
    payload: qty,
  };
};
