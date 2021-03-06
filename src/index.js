import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './index.css';
import App from './components/App';
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import 'bootstrap/dist/css/bootstrap.min.css';

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import withSession from "./components/shared/withSession";
import NavBar from "./components/shared/Navbar";
import Cases from "./components/Cases/Cases";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/shared/Sidebar";

// this is essential for connecting our front and back
const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql',
    // this is for user auth
    fetchOptions: {
        credentials: 'include' // this allows to send the token from the local storage to the backend
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token
            }
        });
    },
    onError: ({networkError}) => {
        if (networkError) {
            console.log('Network error: ', networkError);
            if (networkError.statusCode === 401) {
                localStorage.setItem('token', '')
            }
        }
    }
});

const Root = ({refetch, session}) => (
    <Router>
        {/*<NavBar session={session}/>*/}
        <div style={{zIndex: 4}}>
            <Sidebar/>
        </div>
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12">
                    <Switch>
                        <Route path="/" exact render={() => <App session={session}/>}/>
                        <Route path="/cases" exact component={Cases}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path="/signin" render={() => <Signin refetch={refetch}/>}/>
                        <Route path="/signup" render={() => <Signup refetch={refetch}/>}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
);

const RootWithSession = withSession(Root);

// with the ApolloProvider wrapped around App. We can perform any query/mutation in any of our components
ReactDOM.render(<ApolloProvider client={client}><RootWithSession/></ApolloProvider>, document.getElementById('root'));

