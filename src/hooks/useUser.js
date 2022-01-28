import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SignedInUser } from '../graphql/queries';

const useUser = () => {
	const [ user, setUser ] = useState(null);

	const { data } = useQuery(SignedInUser, {
		fetchPolicy: 'cache-and-network',
	});

	useEffect(() => {
		if (data) {
			setUser(data.me);
		} else {
			setUser(null);
		}
	}, [data]);
	return [ user, setUser ];
};

export default useUser;
