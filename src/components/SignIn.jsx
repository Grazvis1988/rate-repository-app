import React from 'react'

import  useSignIn  from '../hooks/useSignIn';
import { useNavigate } from "react-router-native";
import SignInContainer from './SignInContainer';


const SignIn = () => {
	const [ signIn ] = useSignIn();

	const navigate = useNavigate();

	const onSubmit = async (values) => {

		const { username, password } = values;

		try {
			if (values.username && values.password) {
				console.log(values);
				const { data } = await signIn({ username, password });
				console.log(data);
				navigate("/", { replace: true });
			}
		} catch (e) {
			console.log(e);
		}

	};

	return (
        <SignInContainer onSubmit={onSubmit} />
	)
};


export default SignIn;
