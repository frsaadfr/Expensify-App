import { createStore } from "redux";



const incremnetCount = ({ IncrementBy  = 1} = {}) => ({
    type: 'INCREMENT',
    IncrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})
const resetCount = () => ({
    type:'RESET',
    
})
const setCount = ({ count }) => ({
    type:'SET',
    count,
})

const CountReducer = (state = {count: 0}, action) => {
    switch(action.type){
        //INCREMENT
        case 'INCREMENT': 
        
        return {count: state.count + action.IncrementBy}
        
        //DECREMENT
        case 'DECREMENT':
        
        
        return {count: state.count - action.decrementBy}
        
        
        //RESET
        case 'RESET': return {count: 0}
        
        default : return action.state
        //SET
        case 'SET' : return {
            count: action.count
        }
    }
    
   
}
const store = createStore(CountReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})



// store.dispatch({
//     type: 'INCREMENT' , 
//     IncrementBy: 5

// });
store.dispatch(incremnetCount({ IncrementBy: 5 }))
store.dispatch(incremnetCount())


store.dispatch(resetCount())
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 1099}))


