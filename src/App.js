import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import actions from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
      <button onClick={() => dispatch(actions.add(5))}>+5</button>
      <button onClick={() => dispatch(actions.asyncInc())}>Async Inc</button>

      <p>{login ? "Logged in" : "Logged Out"}</p>
      <button onClick={() => dispatch(actions.login())}>Login</button>
      <button onClick={() => dispatch(actions.logout())}>Logout</button>
    </div>
  );
};

export default App;
