import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import Alert from './components/Alert';
import Success from './components/Success'
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
      <Provider store={store}>
        <Router>
          <Fragment>
          <Alert />
          <Route exact path="/" component={Form} />
          <Switch>
          <Route exact path="/success" component={Success} />
        </Switch>
          </Fragment>
        </Router>
      </Provider>
  );
}
export default App;
