import React from 'react'; 
import { ReviewItem, ItemSeparator } from './SingleRepositoryItem';
import { Text, FlatList } from 'react-native'
import useUser from '../hooks/useUser';

const Reviews = () => {

  const variables = {
    first: 8,
    includeReviews: true,
  }

  const { reviews, fetchMore } = useUser(variables)

  if (!reviews) {
    return <Text>Loading...</Text>
  }

  return (
    <FlatList
      data={reviews}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => 
        <ReviewItem 
          review={item} 
          name={`${item.repository.ownerName}/${item.repository.name}`}
        />
      }
      keyExtractor={item => item.id}
			ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default Reviews;
