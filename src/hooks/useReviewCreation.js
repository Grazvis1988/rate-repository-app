import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useEffect, useState } from 'react';

const useReviewCreation = () => {
	const [result, setResult] = useState(undefined);

	const [CreateReview , { data }] = useMutation(CREATE_REVIEW, { 
		onError: ( networkError, graphQLErrors) => {
			console.log('graphQLErrors', graphQLErrors);
			console.log('networkError', JSON.stringify(networkError, null, 2));
        },
	});

	useEffect(() => {
		if(data) {
			setResult(data);
		}
	}, [data]);

	const createReview = async ({ repositoryName, ownerName, rating, text }) => {

		const { data } = await CreateReview({ variables: { repositoryName, ownerName, rating, text }});

		return { data };
	};

  return [createReview, result];
};

export default useReviewCreation;
