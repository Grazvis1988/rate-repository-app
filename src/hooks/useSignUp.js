import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';
import { useEffect, useState } from 'react';

const useSignUp = () => {
	const [result, setResult] = useState();

	const [signUp , { data }] = useMutation(SIGN_UP, { 
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

	const SignUp = async ({ username, password }) => {

		const { data } = await signUp({ variables: { username, password }});

		return { data };
	};

  return [SignUp, result];
};

export default useSignUp;
