import React from 'react'
import { format } from 'date-fns'
import RepositoryItem from './RepositoryItem'
import { Pressable, View, StyleSheet, FlatList } from 'react-native'
import useRepository from '../hooks/useRepository'
import * as Linking from 'expo-linking';
import { useParams } from 'react-router-native';
import theme from '../theme';
import Text from './Text.jsx'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: 40,
    width: '90%',
    borderRadius: 4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: theme.colors.whiteText,
    fontSize: 18,
    fontWeight: theme.fontWeights.bold
  },
  info: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  reviewContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  separator: {
    height: 8,
  },
  reviewRatingContainer: {
    padding: 10,
  },
  reviewRating: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: theme.colors.primary,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
  },
  reviewInfo: {
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    flex: 1,
  }
})

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return (
    <>
      <View style={styles.info}>
          <RepositoryItem item={repository} />
          <Pressable style={styles.button} onPress={() => Linking.openURL(repository.url)}>
              <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
      </View>
      <ItemSeparator />
    </>
  )
}


const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), 'dd.MM.yyyy')

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewRatingContainer}>
        <Text color='primary' 
        fontWeight='bold'
        style={styles.reviewRating}
      >{review.rating}</Text>
      </View>
      <View style={styles.reviewInfo}>
        <Text fontWeight='bold'>{review.user.username}</Text>
        <Text color='textSecondary'>{date}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}


const SingleRepositoryItem = () => {
  const { id } = useParams();

  const variables = {
    id,
    first: 8,
  }
  const { repository, reviews, fetchMore } = useRepository(variables)


  if (!repository) {
    return <Text>Loading...</Text>
  }
  return (
    <FlatList
      data={reviews}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
			ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default SingleRepositoryItem;
