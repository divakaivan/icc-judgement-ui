import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {Mutation} from "react-apollo";
import {signinUser} from "../../queries/queries";
import LoadingSpinner from "../shared/LoadingSpinner";
import Error from "../shared/Error";

const initalState = {
    summonerName: '',
    password: ''
};

const Signin = props => {
    const [userInput, setUserInput] = useState(
        {
            summonerName: '',
            password: ''
        }
    );

    const [error, setError] = useState(undefined);

    const handleChange = event => {
        const {name, value} = event.target;
        setUserInput(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event, signinUser) => {
        event.preventDefault();
        signinUser().then( async ({data}) => {
            localStorage.setItem('token', data.signinUser.token);
            await props.refetch();
            clearState();
            props.history.push('/');
        }).catch(error=>setError(error))
    };

    const clearState = () => {
        setUserInput({...initalState})
    };

    const {summonerName, password} = userInput;
    const validForm = !summonerName || !password ;
    return (
        <div className="App">
            <h2 className="App">Sign in</h2>
            <Mutation mutation={signinUser} variables={{summonerName, password}}>
                {(signinUser, {data, loading})=>{
                    if (loading) return <LoadingSpinner/>;
                    return (
                        <form className="form" onSubmit={event => handleSubmit(event, signinUser)}>
                            <input type="text" value={summonerName} onChange={handleChange} name="summonerName" placeholder="Enter summoner name"/>
                            <input type="password" value={password} onChange={handleChange} name="password" placeholder="Enter a password"/>
                            <button disabled={loading || validForm} type="submit" className="button-primary">Sign up</button>
                            {error && <Error error={error}/>}
                        </form>
                    )
                }}
            </Mutation>
        </div>
    )
};

export default withRouter(Signin);