/* import { createStore } from "redux"; */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./counter";
import authReducer from "./auth";

/* 
A configurStore jobban manageli az esetet
amikor több reducert kell kezelni, ennek
adhatunk át object-et, ami tartalmazza az
összes reducerünket
*/
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});


/* 
const counterStore = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }
    if (action.type === 'increase') {
        return {
            ...state,
            counter: state.counter + action.payload,
        }
    }
    if (action.type === 'toggle') {
        return {
            ...state,
            showCounter: !state.showCounter,
        }
    }

    return state;
}
export const store = createStore(counterStore);
 */
