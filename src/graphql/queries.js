import { gql } from '@apollo/client';
import { RepositoryItems } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $after: String,
    $first: Int,
  ){
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      after: $after,
      first: $first,
    ) {
			edges {
				node {
					...CoreNodeFields
				}
        cursor
			}
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
		}
	}
	${RepositoryItems}
`;

export const SignedInUser = gql`
	query  getCurrentUser( $includeReviews: Boolean = false, $first: Int, $after: String ){ 
		me {
			id 
			username
      reviews (first: $first, after: $after) {
        edges @include(if: $includeReviews) {
          node {
            id
            text
            rating
            createdAt
            repository {
              ownerName
              name
            }
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
		}
	}
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...CoreNodeFields
      url
      reviews (first: $first, after: $after){
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${RepositoryItems}
`
