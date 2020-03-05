import {gql} from "apollo-boost";

export const getAllCases = gql`
query {
    getAllCases {
        image
        toxicVotes
        nonToxicVotes
    }
}
`;