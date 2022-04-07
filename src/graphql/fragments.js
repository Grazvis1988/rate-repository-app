
import { gql } from '@apollo/client';


export const RepositoryItems = gql`
	fragment CoreNodeFields on Repository {
		id
		fullName
		description
		language
		forksCount
		stargazersCount
		ratingAverage
		reviewCount
		ownerAvatarUrl
	}
`;
