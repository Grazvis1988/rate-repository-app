import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import { useEffect, useState } from 'react';

import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';


const useSignIn = () => {
	const client = useApolloClient();

	const authStorage = useAuthStorage();

	const [result, setResult] = useState(undefined);

	const [Authenticate, { data }] = useMutation(LOGIN, { 
		onError: ( networkError, graphQLErrors) => {
			console.log('graphQLErrors', graphQLErrors);
			console.log('networkError', JSON.stringify(networkError, null, 2));
        }
	});

	useEffect(() => {
		if(data) {
			setResult(data);
		}
	}, [data]);

	const signIn = async ({ username, password }) => {
		// call the mutate function here with the right arguments

		const { data } = await Authenticate({ variables: { credentials: { username, password }}});
		await authStorage.setAccessToken(data.authenticate.accessToken);

		await client.resetStore();

		return { data };
	};

  return [signIn, result];
};

export default useSignIn;
