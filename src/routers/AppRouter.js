import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={AddExpense} exact />
        <Route path="/create" component={EditExpense} exact />
        <Route path="/edit" component={ExpenseDashboard} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;





