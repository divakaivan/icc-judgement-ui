import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './index.css';
import App from './components/App';
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// this is essential for connecting our front and back
const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql'
});

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/"/>
        </Switch>
    </Router>
);

// with the ApolloProvider wrapped around App. We can perform any query/mutation in any of our components
ReactDOM.render(<ApolloProvider client={client}><Root/></ApolloProvider>, document.getElementById('root'));

