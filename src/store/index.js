import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);

// console.log(store.getState());
 export default store
// counterSubscriber = () => {
//   const latestState = store.getState();

//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);
// store.dispatch({ type: "decrement" });
// store.dispatch({ type: "increment" });
