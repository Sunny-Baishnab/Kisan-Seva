import React, { Component } from 'react';
import { FlatList,View } from 'react-native';

import { getNews } from '../Components/FetchNews';
import Article from '../Components/Article';
import MyHeader from '../Components/MyHeader';

class News extends Component {
	state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getNews()
			.then(articles => {
				this.setState({ articles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
	};

	handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.fetchNews());
	};

	render() {
		console.log("atticle " , this.state.articles);
		return (
            <View style = {{flex:1}}>
                <MyHeader title='Quick News' navigation={this.props.navigation}/>
                <View style =  {{flex:1}}>
			<FlatList
				data={this.state.articles}
				renderItem={({ item }) => <Article article={item} />}
				keyExtractor={item => item.url}
				refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh}
			/>
            </View>
            </View>
		);
	}
}

export default News;
