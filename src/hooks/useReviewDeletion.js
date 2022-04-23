import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations'

const useReviewDeletion = () => {
  const [reviewDeletion] = useMutation(DELETE_REVIEW, {
    onError: ( networkError, graphQLErrors ) => {
			console.log('graphQLErrors', graphQLErrors);
			console.log('networkError', JSON.stringify(networkError, null, 2));
    }
  })

  const deleteReview = async (id) => {
    const { data } = await reviewDeletion({ variables: { id } })
    return data
  }

  return deleteReview
}

export default useReviewDeletion;
