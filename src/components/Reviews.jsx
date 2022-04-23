import React from 'react'; 
import { ReviewItem as OriginaItem, ItemSeparator } from './SingleRepositoryItem';
import { FlatList, Pressable, View, StyleSheet, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
import useUser from '../hooks/useUser';
import useReviewDeletion from '../hooks/useReviewDeletion';
import Text from './Text';

const ReviewItem = ({ review, name, id, refetch }) => {
  const navigate = useNavigate();
  const deleteReview = useReviewDeletion();

  const showAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteReview(id)
              await refetch()
              Alert.alert("Review deleted...")
            } catch (e) {
              Alert.alert("Failed to delete review")
              console.log("Error while deleting review: ", e.message)
            }
          },
          style: "destructive",
        },
            
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );


  const styles = StyleSheet.create({
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 8, 
      backgroundColor: 'white',

    },
    buttonText: {
      borderRadius: 5,
      padding: 6,
      textAlign: 'center',
    },
    button: {
      width: "44%",
    }
  })

  return (
    <View>
      <OriginaItem review={review} name={name}/>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} 
          onPress={() => navigate(`/repositories/${review.repositoryId}`)}
        >
        <Text 
          style={styles.buttonText}
          color='whiteText'
          backGround='primary'
          fontWeight='bold'
          fontSize='subheading'
        >View repository</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={showAlert}
        >
        <Text 
          style={styles.buttonText}
          color='whiteText'
          backGround='danger'
          fontWeight='bold'
          fontSize='subheading'
        >Delete review</Text>
        </Pressable>
      </View>
    </View>
  )
}


const Reviews = () => {

  const variables = {
    first: 8,
    includeReviews: true,
  }

  const { reviews, fetchMore, refetch } = useUser(variables)

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
          id={item.id}
          refetch={refetch}
        />
      }
      keyExtractor={item => item.id}
			ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default Reviews;
