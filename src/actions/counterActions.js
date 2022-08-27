export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const add = (value) => {
  return {
    type: "ADD",
    payload: value,
  };
};

export const asyncInc = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};
