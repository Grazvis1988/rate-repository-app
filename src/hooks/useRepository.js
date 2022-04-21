import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (variables) => {
  const [ reviews, setReviews ] = useState([]);

	const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    variables,
		fetchPolicy: 'cache-and-network',
	});

	useEffect(() => {
		if (data) {
      setReviews(data.repository.reviews.edges.map(r => r.node))
		}
	},[data]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      },
    });
  };

  return { 
    repository: data?.repository, 
    fetchMore: handleFetchMore,
    loading, 
    reviews,
    ...result
  };
};

export default useRepository;
