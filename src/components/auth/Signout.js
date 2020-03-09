import React from "react";
import {Button} from "react-bootstrap";

import {withRouter} from "react-router-dom";
import {ApolloConsumer} from "react-apollo";

const handleSignout = (client, history) => {
    localStorage.setItem('token', '');
    client.resetStore();
    history.push('/');
};

const Signout = ({history}) => (

    <ApolloConsumer>
        {client => {

            return (
                <Button variant="outline-primary" onClick={() => handleSignout(client, history)}>Sign out</Button>
            )
        }}
    </ApolloConsumer>
);

export default withRouter(Signout);