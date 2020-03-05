import {gql} from "apollo-boost";

/* CASE QUERIES */
export const getAllCases = gql`
query {
    getAllCases {
        image
        toxicVotes
        nonToxicVotes
    }
}
`;


/* CASE MUTATIONS */




/* USER QUERIES */



/* USER MUTATIONS */
export const signupUser = gql`
mutation($summonerName: String!, $email: String!, $password: String!) {
  signupUser(summonerName: $summonerName, email: $email, password:$password) {
    token
  }
}
`;

