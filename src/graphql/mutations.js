import { gql } from '@apollo/client';


export const LOGIN = gql`
	mutation Authenticate($credentials: AuthenticateInput){
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview (
    $repositoryName: String!,
    $ownerName: String!,
    $rating: Int!,
    $text: String
  ) {
    createReview (review: { 
      repositoryName: $repositoryName,
      ownerName: $ownerName,
      rating: $rating,
      text: $text
    }) {
      repositoryId
    }
  }
`

export const SIGN_UP = gql`
  mutation signUp ( $username: String!, $password: String! ) {
    createUser (user: { username: $username, password: $password}) {
      id
      username
    }
  }
`

