import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import { useEffect, useState } from 'react';

const useSignIn = () => {
	const [result, setResult] = useState(undefined);

	const [Authenticate, results] = useMutation(LOGIN, { 
		onError: ( networkError, graphQLErrors) => {
			console.log('graphQLErrors', graphQLErrors);
			console.log('networkError', JSON.stringify(networkError, null, 2));
        }
	});

	useEffect(() => {
		if(results.data) {
			setResult(results.data);
		}
	}, [results]);

	const signIn = async ({ username, password }) => {
		// call the mutate function here with the right arguments

		const data = await Authenticate({ variables: { credentials: { username, password }}});

		return { ...data };
	};

  return [signIn, result];
};

export default useSignIn;