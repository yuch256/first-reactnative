import React, { Component } from 'react';
import {
	View,
	TextInput,
	Text,
	StyleSheet,
	TouchableOpacity,
	Button,
	Alert,
} from 'react-native';

export default class Control_1 extends Component {
	state = {
		usr: '',
		pwd: '',
		height: '',
		weight: '',
		gender: '',
	}
	render() {
		return (
			<View style={styles.viewLayout}>
				<View style={styles.rowList}>
					<View style={styles.textLayout}>
						<Text style={styles.text}>用户名：</Text>
					</View>
					<View style={styles.inputLayout}>
						<TextInput
							style={styles.textInput}
							value={this.state.usr}
							onChangeText={usr => this.setState({ usr })}
						/>
					</View>
				</View>
				<View style={styles.rowList}>
					<View style={styles.textLayout}>
						<Text style={styles.text}>密    码：</Text>
					</View>
					<View style={styles.inputLayout}>
						<TextInput
							style={styles.textInput}
							value={this.state.pwd}
							secureTextEntry={true}
							onChangeText={pwd => this.setState({ pwd })}
						/>
					</View>
				</View>
				<View style={styles.rowList}>
					<View style={styles.textLayout}>
						<Text style={styles.text}>身    高：</Text>
					</View>
					<View style={styles.inputLayout}>
						<TextInput
							style={styles.textInput}
							value={this.state.height}
							onChangeText={height => this.setState({ height })}
						/>
					</View>
				</View>
				<View style={styles.rowList}>
					<View style={styles.textLayout}>
						<Text style={styles.text}>体    重：</Text>
					</View>
					<View style={styles.inputLayout}>
						<TextInput
							style={styles.textInput}
							value={this.state.weight}
							onChangeText={weight => this.setState({ weight })}
						/>
					</View>
				</View>
				<View style={[styles.rowList, { justifyContent: 'space-between', marginBottom: 10 }]}>
					<View style={styles.radioRow}>
						<TouchableOpacity
							style={styles.radioWrap}
							onPress={() => this.setState({ gender: 'man' })}>
							<View
								style={[
									styles.radioButton,
									{ backgroundColor: this.state.gender === 'man' ? '#000' : '#fff' }
								]}
							></View>
						</TouchableOpacity>
						<Text style={styles.text}>男</Text>
					</View>
					<View style={styles.radioRow}>
						<TouchableOpacity
							style={styles.radioWrap}
							onPress={() => this.setState({ gender: 'woman' })}>
							<View
								style={[
									styles.radioButton,
									{ backgroundColor: this.state.gender === 'woman' ? '#000' : '#fff' }
								]}
							></View>
						</TouchableOpacity>
						<Text style={styles.text}>女</Text>
					</View>
				</View>
				<View style={[styles.rowList, { justifyContent: 'space-around' }]}>
					<Button
						title="计算"
						onPress={() => {
							if (this.state.weight && this.state.height && this.state.gender) {
								const value = (this.state.weight / this.state.height ** 2).toFixed(2)
								let result = null
								if (this.state.gender === 'man') {
									result = value < 19 ? '体重偏低' : value < 25 ? '健康体重' : value < 30 ? '超重' : value < 40 ? '严重超重' : '极度超重'
								} else if (this.state.gender === 'woman') {
									result = value < 18 ? '体重偏低' : value < 24 ? '健康体重' : value < 29 ? '超重' : value < 39 ? '严重超重' : '极度超重'
								}
								Alert.alert(
									`体重指数：${result}`,
									`体重 / 身高的平方：${value}  `,
									[{ text: 'OK' }],
									{ cancelable: false }
								)
							} else {
								Alert.alert(
									'警告！',
									'身高、体重和性别不能为空',
									[{ text: 'close' }],
									{ cancelable: false }
								)
							}
						}}
					/>
					<Button
						title="重置"
						onPress={() => this.setState({
							usr: '',
							pwd: '',
							height: '',
							weight: '',
							gender: '',
						})}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewLayout: {
		flex: 1,
		marginBottom: 10,
		paddingLeft: 25,
		paddingRight: 25,
	},
	rowList: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	textLayout: {
		flex: 2,
	},
	text: {
		fontSize: 30,
		color: '#333',
	},
	inputLayout: {
		flex: 3,
		justifyContent: 'center',
	},
	textInput: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#666',
		padding: 3,
		paddingLeft: 8,
	},
	radioRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
	},
	radioWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 10,
		width: 20,
		height: 20,
		marginRight: 8,
	},
	radioButton: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 10,
		width: 13,
		height: 13,
	},
})