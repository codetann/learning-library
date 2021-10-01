import { useReducer, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

// Types
interface Action {
  type: string;
  payload?: string;
}

interface State {
  rValue: boolean;
}

// Reducer
const initialState = {
  rValue: true,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { rValue: true };
    case "two":
      return { rValue: false };
    default:
      return state;
  }
}

export const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const [state, dispatch] = useReducer(reducer, initialState);

  useClickOutside(ref, () => {
    console.log("click outside");
  });

  // event handlers
  function handleActionOne() {
    dispatch({ type: "one" });
  }
  function handleActionTwo() {
    dispatch({ type: "two" });
  }

  return (
    <div ref={ref}>
      <h1>{state?.rValue ? "one" : "two"}</h1>
      <button onClick={handleActionOne}>Action One</button>
      <button onClick={handleActionTwo}>Action Two</button>
    </div>
  );
};
