import {createStore, combineReducers} from "redux";

import cartReducer from "./redux-cart/state/cartReducer";

const INITIAL_STATE = 0

function counterReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'INCREMENT': 
            return state + action.payload.value
        case 'DECREMENT': 
            return state - action.payload.value

        default:
            return state
    }
}   


const rootReducer = combineReducers({
    // stateName: function
    counter: counterReducer,
    items: cartReducer
})

const store = createStore(rootReducer)

export default store;