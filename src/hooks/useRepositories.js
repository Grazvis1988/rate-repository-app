import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

/*
const Component = () => {
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});
};
*/

const useRepositories = () => {
	const [repositories, setRepositories] = useState();
	//const [loading, setLoading] = useState(false);
	const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});


/*
	const fetchRepositories = async () => {
		setLoading(loading);

		// Replace the IP address part with your own IP address!
		const response = await fetch('http://192.168.0.107:5000/api/repositories');
		const json = await response.json();

		setRepositories(json);

		setLoading(loading);
	};
*/

	useEffect(() => {
		if (data) {
			setRepositories(data.repositories);
		}
	},[data]);

	return { repositories, loading, refetch: refetch() };
};

export default useRepositories;
