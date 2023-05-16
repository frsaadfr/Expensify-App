import React from 'react';

import {BrowserRouter, Route,Switch,Link, NavLink} from 'react-router-dom'
import AddExpensePage from './../components/AddExpense'
import ExpenseDashBoardPage from './../components/Dashboard'
import EditExpensePage from './../components/EditExpense'
import Header from './../components/Header'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'








const AppRouter = () => (<BrowserRouter>
    <div>
        <Header />
            <Switch>
    
                <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/Help" component={HelpPage} />
                <Route component={NotFoundPage} />

            </Switch>
        </div>
    </BrowserRouter>
    
    );
    export default AppRouter;

