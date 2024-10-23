import { useReducer, useState } from "react";
import { STYCalcu } from "./mystyle";
import { State, Action } from "./type";

export default function Calculator() {
  const [first, setFirst] = useState(""); 
  const [second, setSecond] = useState(""); 

  const initialState: State = { result: "" }; // please refer to type.tsx to check for type

  function reducer(state: State, action: Action): State {
    const num1 = parseFloat(action.first || "0");
    const num2 = parseFloat(action.second || "0");
  
    if (action.type === "clear") {
      return { result: "" };
    }
  
    if (isNaN(num1) || isNaN(num2)) {
      return { result: "Invalid Input" };
    }
  
    switch (action.type) {
      case "add":
        return { result: num1 + num2 };
      case "subtract":
        return { result: num1 - num2 };
      case "multiply":
        return { result: num1 * num2 };
      case "divide":
        return { result: num2 !== 0 ? num1 / num2 : "Cannot divide by zero" };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClear = () => {
    setFirst("");
    setSecond("");
    dispatch({ type: "clear" });
  };

  return (
    <STYCalcu>
      <label>1st number:</label>
      <input
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        type="number"
      />
      <br />
      <label>2nd number:</label>
      <input
        value={second}
        onChange={(e) => setSecond(e.target.value)}
        type="number"
      />
      <br />
      <button onClick={() => dispatch({ type: "add", first, second })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "subtract", first, second })}>
        Subtract
      </button>
      <button onClick={() => dispatch({ type: "multiply", first, second })}>
        Multiply
      </button>
      <button onClick={() => dispatch({ type: "divide", first, second })}>
        Divide
      </button>
      <button onClick={handleClear}>Clear</button>

      <h3
        style={{
          color:
            typeof state.result === "number"
              ? state.result >= 0
                ? "white"
                : "red"
              : "white",
        }}
      >
        Result: {state.result}
      </h3>
    </STYCalcu>
  );
}
