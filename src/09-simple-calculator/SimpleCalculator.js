import { useReducer } from "react";
const initialState = {
  num1: 0,
  num2: 0,
  result: "no result yet",
};

function reducer(state, action) {
  if (action.type === "num1") {
    return { ...state, num1: action.payload };
  }
  if (action.type === "num2") {
    return { ...state, num2: action.payload };
  }
  if (action.type === "add") {
    return { ...state, result: state.num1 + state.num2 };
  }
  if (action.type === "sub") {
    return { ...state, result: state.num1 - state.num2 };
  }
  if (action.type === "clear") {
    return initialState;
  }
  return state;
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatchFunc] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              dispatchFunc({ type: "num1", payload: number });
            }}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              dispatchFunc({ type: "num2", payload: number });
            }}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button
          onClick={() => {
            dispatchFunc({ type: "add" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatchFunc({ type: "sub" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatchFunc({ type: "clear" });
          }}
        >
          c
        </button>
      </div>
      <div>
        <h2>Result: {state.result}</h2>
      </div>
    </div>
  );
}
