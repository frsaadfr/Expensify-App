
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import ConfigureStore from './store/ConfigureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = ConfigureStore();

store.dispatch(addExpense({ description: 'waterbill', amount: 4500}))
store.dispatch(addExpense({ description: 'gas bill'}))
store.dispatch(setTextFilter(('water')))




const state  = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log( visibleExpenses)
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

