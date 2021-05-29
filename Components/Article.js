import React, { Component } from 'react';
import { View, Linking, TouchableHighlight } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

import defaultImage from '../assets/newsImage.jpg';
class Article extends Component {
	render() {
		const {
			title,
			description,
			publishedAt,
			source,
			urlToImage,
			url
		} = this.props.article;

		const time = moment(publishedAt || moment.now()).fromNow();

		return (
			<TouchableHighlight>
				<Card
					featuredTitle={title}
					featuredTitleStyle={{
						marginHorizontal: 5,
						textShadowColor: '#00000f',
						textShadowOffset: { width: 3, height: 3 },
						textShadowRadius: 3
					}}
					image={{
						uri: urlToImage
					}}
				>
					<Text style={{ marginBottom: 10 }}>
						{description || 'Read more...'}
					</Text>
					<Divider style={{ backgroundColor: '#dfe6e9' }} />
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							{source.name.toUpperCase()}
						</Text>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							{time}
						</Text>
					</View>
				</Card>
			</TouchableHighlight>
		);
	}
}

export default Article;
