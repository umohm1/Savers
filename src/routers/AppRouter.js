import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AboutUs from '../components/AboutUs';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact />
        <Route path="/create" component={AddExpense} exact />
        <Route path="/edit/:id" component={EditExpense} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;





