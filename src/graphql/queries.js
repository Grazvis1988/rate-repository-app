import { gql } from '@apollo/client';
import { RepositoryItems } from './fragments';

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges {
				node {
					...CoreNodeFields
				}
			}
		}
	}
	${RepositoryItems}
`;

export const SignedInUser = gql`
	query { 
		me {
			id 
			username
		}
	}
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...CoreNodeFields
      url
      reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
  }
  ${RepositoryItems}
`
