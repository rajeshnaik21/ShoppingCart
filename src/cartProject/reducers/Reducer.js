const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const initialState = {
  carts: cartItems ? cartItems.carts : [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const addItem = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (addItem >= 0) {
        state.carts[addItem].qty = 1;
      } else {
        const constItem = { ...action.payload, qty: 1 };
        localStorage.setItem(
          "cartItems",
          JSON.stringify({
            ...state,
            carts: [...state.carts, constItem],
          })
        );
        return {
          ...state,
          carts: [...state.carts, constItem],
        };
      }

      break;

    case "REMOVE_TO_CART":
      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          ...state,
          carts: state.carts.filter((item) => item.id !== action.payload.id),
        })
      );
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload.id),
      };

    // INCREMENT
    case "INCREMENT":
      const increment = state.carts.findIndex(
        (item) => item.id === action.payload
      );

      if (state.carts[increment].qty >= 1) {
        state.carts[increment].qty += 1;
        localStorage.setItem(
          "cartItems",
          JSON.stringify({
            ...state,
            carts: [...state.carts],
          })
        );
        return {
          ...state,
          carts: [...state.carts],
        };
      }

      break;
    // DECREMENT

    case "DECREMENT":
      const decrement = state.carts.findIndex(
        (item) => item.id === action.payload
      );

      if (state.carts[decrement].qty >= 1) {
        state.carts[decrement].qty -= 1;
        localStorage.setItem(
          "cartItems",
          JSON.stringify({
            ...state,
            carts: [...state.carts],
          })
        );
        return {
          ...state,
          carts: [...state.carts],
        };
      }

      break;
    default:
      return state;
  }
};
