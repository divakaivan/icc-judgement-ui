import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {Mutation} from "react-apollo";
import {signupUser} from "../../queries/queries";
import LoadingSpinner from "../shared/LoadingSpinner";
import Error from "../shared/Error";

const initalState = {
    summonerName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
};

const Signup = props => {
    const [userInput, setUserInput] = useState(
        {
            summonerName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    );

    const [error, setError] = useState(undefined);

    const handleChange = event => {
        const {name, value} = event.target;
        setUserInput(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(async ({data}) => {
            localStorage.setItem('token', data.signupUser.token);
            await props.refetch();
            clearState();
            props.history.push('/')
        }).catch(error=>setError(error))
    };

    const clearState = () => {
        setUserInput({...initalState})
    };

    const {summonerName, email, password, passwordConfirmation} = userInput;
    const validForm = !summonerName || !email || !password || password !== passwordConfirmation
    return (
        <div className="App">
            <h2 className="App">Sign up</h2>
            <Mutation mutation={signupUser} variables={{summonerName, email, password}}>
                {(signupUser, {data, loading})=>{
                    if (loading) return <LoadingSpinner/>;
                    return (
                            <form className="form" onSubmit={event => handleSubmit(event, signupUser)}>
                                <input type="text" value={summonerName} onChange={handleChange} name="summonerName" placeholder="Enter summoner name"/>
                                <input type="email" value={email} onChange={handleChange} name="email" placeholder="Enter your email"/>
                                <input type="password" value={password} onChange={handleChange} name="password" placeholder="Enter a password"/>
                                <input type="password" value={passwordConfirmation} onChange={handleChange} name="passwordConfirmation" placeholder="Confirm password"/>
                                <button disabled={loading || validForm} type="submit" className="button-primary">Sign up</button>
                                {error && <Error error={error}/>}
                            </form>
                    )
                }}
            </Mutation>
        </div>
    )
};

export default withRouter(Signup);