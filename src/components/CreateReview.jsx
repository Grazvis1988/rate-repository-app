import React from 'react'

import  useReviewCreation from '../hooks/useReviewCreation';
//import { useNavigate } from "react-router-native";
import ReviewContainer from './ReviewContainer';


const CreateReview = () => {
	const [ createReview ] = useReviewCreation();

	const onSubmit = async (values) => {

		const  { repositoryName, ownerName, rating, text } = values;

		try {

			if (values.repositoryName && values.ownerName && values.rating) {
				await createReview({ repositoryName, ownerName, rating: Number(rating), text });
			}
		} catch (e) {
			console.log("Some kind of error is being printed: ", e.message);
		}

	};

	return (
        <ReviewContainer onSubmit={onSubmit} />
	)
};


export default CreateReview;
