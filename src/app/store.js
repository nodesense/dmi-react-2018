import {createStore} from "redux";

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

const store = createStore(counterReducer)

export default store;