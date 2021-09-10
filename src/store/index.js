import { createStore } from "redux";
import AddTacheReducer from "../reducer/listTodo";
const store = createStore(AddTacheReducer);

export default store;
