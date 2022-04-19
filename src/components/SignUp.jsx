import React from 'react'

import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';
import { useNavigate } from "react-router-native";


const SignUp = () => {
	const [ signUp ] = useSignUp();
  const [ signIn ] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {

		const  { username, password } = values;

		try {

      if ( values.username && values.password ) {
        await signUp({ username, password });
        await signIn({ username, password });
				navigate("/", { replace: true });
			}
		} catch (e) {
			console.log("Sign up failed", e.message);
		}

	};

	return (
        <SignUpContainer onSubmit={onSubmit} />
	)
};


export default SignUp;
