import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	item: {
		padding: 20,
		marginVertical: 8,
    width: '100%',
		fontSize: 20,
		backgroundColor: '#FFFFFF'
	},
	avatar: {
		width: 45,
		height: 45,
		marginRight: 10,
		borderRadius: 4, 
	},
	topSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		maxWidth: 300,
		marginBottom: 5
	},
	description: {
		flexGrow: 2,
		justifyContent: 'space-around'
	}, 
	radius: {
		borderRadius: 4
	},
	infoSection: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	languageSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	languageItem: {
		borderRadius: 4,
		padding: 5,
	},
	bottomMargin: {
		marginBottom: 3
	}
});

const Info = ({ label, count }) => {
    let formatedCount = count
	if ( count >= 1000 && count < 1000000) {
        formatedCount = `${Math.round(count / 100) / 10}k`;
	} else if ( count > 1000000 ) {
        formatedCount = `${Math.round(count / 100000) / 10}M`;
	}
	return (
		<View testID={label}>
			<Text fontWeight='bold'>{formatedCount}</Text>
			<Text color='textSecondary'>{label}</Text>
		</View>
	);
};


const RepositoryItem = ({ item }) => (
	<View testID="repositoryItem" style={styles.item}>
		<View testID="InfoSection"style={styles.topSection}> 
			<Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl}} />
			<View style={styles.description}>
				<Text style={styles.bottomMargin} fontWeight='bold'>{item.fullName}</Text>
				<Text style={styles.bottomMargin} color='textSecondary'>{item.description}</Text>
				<View testID="languageInfo" style={styles.languageSection}>
					<Text backGround='primary' color='whiteText' style={styles.languageItem}>{item.language}</Text>
				</View>
			</View>
		</View>
		<View testID="CountsSection" style={styles.infoSection}>
			<Info label='Stars' count={item.stargazersCount}/>
			<Info label='Forks' count={item.forksCount}/>
			<Info label='Reviews' count={item.reviewCount}/>
			<Info label='Rating' count={item.ratingAverage}/>
		</View>
	</View>
);

export default RepositoryItem;
