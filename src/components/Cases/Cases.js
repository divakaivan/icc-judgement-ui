import React, {useParams} from "react";
import {Query} from "react-apollo";
import {getAllCases} from "../../queries/queries";
import LoadingSpinner from "../shared/LoadingSpinner";
import Case from "./Case";

const Cases = () => {

    return (
        <Query query={getAllCases}>
            {({data, loading, error}) => {
                if (loading) return <LoadingSpinner/>;
                if (error) alert(error.message);
                console.log(data);

                return (
                    <div className="container-fluid">
                        <div className="card-group">
                            {data.getAllCases.map(_case => (
                                <Case
                                    key={_case._id}
                                    image={_case.image}
                                    toxicVotes={_case.toxicVotes}
                                    nonToxicVotes={_case.nonToxicVotes}
                                    id={_case._id}
                                />
                            ))}
                        </div>
                    </div>
                )
            }}
        </Query>
    )
};

export default Cases;