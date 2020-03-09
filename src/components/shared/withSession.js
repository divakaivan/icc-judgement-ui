import React from "react";

import {Query} from "react-apollo";
import {getCurrentUser} from "../../queries/queries";

const withSession = Component => props => (
    <Query query={getCurrentUser}>
        {({data, loading, refetch}) => {
            if (loading) return null;
            return (
                <Component {...props} refetch={refetch} session={data}/>
            )
        }}
    </Query>
);

export default withSession;