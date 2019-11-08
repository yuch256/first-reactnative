import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	SafeAreaView,
} from 'react-native';
import { Row } from 'native-base';

export default class Control_2 extends Component {
	render() {
		return (
			<SafeAreaView style={styles.viewLayout}>
				<FlatList
					data={[
						{ key: 'Item1' },
						{ key: 'Item2' },
						{ key: 'Item3' },
						{ key: 'Item4' },
					]}
					renderItem={({ item }) =>
						<Text
							style={styles.flatListText}
							key={item.key}
							onPress={() => alert(item.key)}
						>{item.key}</Text>
					}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	viewLayout: {
		flex: 1,
		marginBottom: 10,
	},
	flatListText: {
		paddingLeft: 10,
		fontSize: 22,
		height: 44,
		lineHeight: 44,
		borderBottomWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#eee',
	},
})