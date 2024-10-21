



import { useEffect, useReducer, useRef } from "react";

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isActive: true };
    case "PAUSE":
      return { ...state, isActive: false };
    case "STOP":
      return { ...state, isActive: false, count: 0 };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const initialState = {
    count: 0,
    isActive: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (state.isActive) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: "INCREMENT" });
      }, 500);
    } else if (!state.isActive && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [state.isActive]);

  const startHandler = () => {
    dispatch({ type: "START" });
  };

  const pauseHandler = () => {
    dispatch({ type: "PAUSE" });
  };

  const stopHandler = () => {
    dispatch({ type: "STOP" });
  };

  return (
    <>
      <h3>Count: {state.count}</h3>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={stopHandler}>Stop</button>
    </>
  );
};

export default Counter;
