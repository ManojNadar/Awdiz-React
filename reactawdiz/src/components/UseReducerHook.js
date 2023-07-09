import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else if (action.type === "PAYLOAD") {
    return { count: state.count + action.payload };
  } else {
    return state;
  }
}

const UseReducerHook = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    return dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    return dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    return dispatch({ type: "RESET" });
  };
  const payload = () => {
    return dispatch({ type: "PAYLOAD", payload: 50 });
  };
  return (
    <>
      <h1>UseReducerHook</h1>

      <h1> {state.count}</h1>

      <button onClick={increment}>Increment</button>

      {state.count === 0 ? (
        <button disabled onClick={decrement}>
          Decrement
        </button>
      ) : (
        <button onClick={decrement}>Decrement</button>
      )}
      <button onClick={reset}>Reset</button>
      <button onClick={payload}>Add Payload</button>
    </>
  );
};

export default UseReducerHook;
