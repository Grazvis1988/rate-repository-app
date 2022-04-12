import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = ( id ) => {
	const [ repository, setRepository ] = useState();
  const [ reviews, setReviews ] = useState();

	const { data, loading, refetch } = useQuery(GET_REPOSITORY, {
    variables: { id },
		fetchPolicy: 'cache-and-network',
	});

	useEffect(() => {
		if (data) {
			setRepository(data.repository);
      setReviews(data.repository.reviews.edges.map(r => r.node))
		}
	},[data]);

	return { repository, loading, refetch, reviews };
};

export default useRepository;
