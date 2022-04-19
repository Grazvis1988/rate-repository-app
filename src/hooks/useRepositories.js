import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
	const [repositories, setRepositories] = useState();
	const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
    variables
	});


	useEffect(() => {
		if (data) {
			setRepositories(data.repositories);
		}
	},[data]);

	return { repositories, loading, refetch };
};

export default useRepositories;
