import React from "react";
import {Query} from "react-apollo";
import {getAllCases} from "../../queries/queries";
import LoadingSpinner from "../shared/LoadingSpinner";

const Cases = () => (
    <Query query={getAllCases}>
        {({data, loading, error}) => {
            if (loading) return <LoadingSpinner/>;
            if (error) alert(error.message);
            console.log(data);
            return (
                <p>Cases</p>
            )
        }}
    </Query>
);

export default Cases;