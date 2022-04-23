import { useQuery } from '@apollo/client';
import {useEffect, useState} from 'react';
import { SignedInUser } from '../graphql/queries';

const useUser = (variables) => {
  const [ reviews, setReviews ] = useState([]);

	const { data, fetchMore, loading, refetch, ...result } = useQuery(SignedInUser, {
		fetchPolicy: 'cache-and-network',
    variables,
	});

  useEffect(() => {
    if (data && data.me && data.me.reviews && data.me.reviews.edges) {
      setReviews(data.me.reviews.edges.map(r => r.node))
    }
    console.log('Some kind of data', data)
  }, [data])


  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables
      },
    });
  };

  return {
    user: data ? data.me : undefined, 
    reviews,
    fetchMore: handleFetchMore,
    refetch,
    ...result
  };
};

export default useUser;
