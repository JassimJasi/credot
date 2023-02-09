import { createStore } from "redux";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SINGLE_PRODUCT":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "CLEAR_DATA":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
