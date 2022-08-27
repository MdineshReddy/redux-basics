import * as counterActions from "./counterActions";
import * as loginActions from "./loginActions";

const actions = { ...counterActions, ...loginActions };

export default actions;
