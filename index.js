const { createStore } = require('redux');

const defaulState = { value: 0 };

const reducer = (state = defaulState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
};

const store = createStore(reducer);

const myState = store.getState();
//console.log(myState.value);
console.log("sau khi dispatch" + "" + store.getState().value);
store.dispatch({type : 'UP'})

console.log("truoc khi dispatch" + store.getState().value);



/*
    UP, DOWN
    Lam sao de tiep can gia tri cua state
    Lam sao thay doi duoc gia tri cua state
*/