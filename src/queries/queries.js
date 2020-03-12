import {gql} from "apollo-boost";

/* CASE QUERIES */
export const getAllCases = gql`
query {
    getAllCases {
        _id
        image
        toxicVotes
        nonToxicVotes
    }
}
`;


/* CASE MUTATIONS */




/* USER QUERIES */

export const getCurrentUser = gql`
query {
    getCurrentUser {
        summonerName
        joinDate
        email
    }
}
`;

/* USER MUTATIONS */
export const signupUser = gql`
mutation($summonerName: String!, $email: String!, $password: String!) {
  signupUser(summonerName: $summonerName, email: $email, password:$password) {
    token
  }
}
`;

export const signinUser = gql`
mutation($summonerName: String!, $password: String!) {
  signinUser(summonerName: $summonerName, password: $password) {
    token
  }
}
`;
