import React from 'react';
import './App.css';

import {Query} from "react-apollo";
import {getAllCases} from "../queries/queries";
import LoadingSpinner from "./shared/LoadingSpinner";


const App = () => {
    return (
        <div className="App">
            <h1>Home</h1>
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
        </div>
    );
};

export default App;
