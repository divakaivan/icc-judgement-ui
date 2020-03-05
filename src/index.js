import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// this is essential for connecting our front and back
const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql'
});

// with the ApolloProvider wrapped around App. We can perform any query/mutation in any of our components
ReactDOM.render(<ApolloProvider client={client}><App/></ApolloProvider>, document.getElementById('root'));

