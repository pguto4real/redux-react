import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter + action.amount,
      showCounter: !state.showCounter,
    };
  }
  return state;
};
const store = createStore(counterReducer);

// console.log(store.getState());
export default store;
// counterSubscriber = () => {
//   const latestState = store.getState();

//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);
// store.dispatch({ type: "decrement" });
// store.dispatch({ type: "increment" });
