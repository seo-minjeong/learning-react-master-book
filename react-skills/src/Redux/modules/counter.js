import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/INCREASE";

export const increse = createAction(INCREASE);
export const decrese = createAction(DECREASE);

const initialState = {
  number: 0,
};

const counter = handleActions({
  [INCREASE]: (state, action) => ({ number: state.number + 1 }),
  [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  initialState,
});

export default counter;
