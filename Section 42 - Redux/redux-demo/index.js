const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';



// An action is an object with a type property
// Action creator is a function that returns an action

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCK,
        quantity: qty,
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        quantity: qty,
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCK,
        quantity: qty,
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
//     anotherProperty: 0,
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 10,
}

// Reducer (prevState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCK:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity,
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.quantity,
            }
        case ICECREAM_RESTOCK:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.quantity,
            }
        default:
            return state;
    }
}

// Combines the 2 reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

// Creates the store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state ", store.getState())

// Registers listeners with subscribe
const unsubscribe = store.subscribe(() => {});
// const unsubscribe = store.subscribe(() => console.log("updated state ", store.getState()));

// Update the store with an action and reducer
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

// Unregistering of listeners
unsubscribe();