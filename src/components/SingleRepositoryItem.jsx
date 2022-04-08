import React from 'react'
import RepositoryItem from './RepositoryItem'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import useRepository from '../hooks/useRepository'
import * as Linking from 'expo-linking';
import { useParams } from 'react-router-native';
import theme from '../theme';

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
    }
})


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
  const { repository } = useRepository(id)


  if (!repository) {
    return <Text>Loading...</Text>
  }
  return (
      <View style={{ alignItems: 'center' }}>
          <RepositoryItem item={repository} />
          <Pressable style={styles.button} onPress={() => Linking.openURL(url)}>
              <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
      </View>
  )
}

export default SingleRepositoryItem;
