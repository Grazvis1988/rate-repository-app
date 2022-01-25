import { gql } from '@apollo/client';
import { RepositoryList } from './fragments';

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
	${RepositoryList}
`;
