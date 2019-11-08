import React, { Component } from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import Dropdown from '../Dropdown'

export default class Control_3 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			province: '省份',
			city: '城市',
			cityData: '',
			area: '区',
			areaData: '',
		}
	}
	handlePressValue = (key, type) => {
		type === '省份' ? this.setState({ province: key, cityData: allCity[key] }) :
			type === '城市' ? this.setState({ city: key, areaData: allArea[key] }) :
				type === '区' ? this.setState({ area: key }) : null
	}
	render() {
		return (
			<View style={styles.viewLayout}>
				<View style={styles.dropdownRow}>
					<Dropdown
						type='省份'
						value={this.state.province}
						data={allProvince}
						handlePressValue={this.handlePressValue}
					/>
					<Dropdown
						type='城市'
						value={this.state.city}
						data={this.state.cityData}
						handlePressValue={this.handlePressValue}
					/>
					<Dropdown
						type='区'
						value={this.state.area}
						data={this.state.areaData}
						handlePressValue={this.handlePressValue}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewLayout: {
		flex: 1,
		marginBottom: 150,
	},
	dropdownRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

const allProvince = [
	{ key: '河北' },
	{ key: '浙江' },
	{ key: '内蒙古' },
]

const allCity = {
	'河北': [
		{ key: '石家庄' },
		{ key: '唐山' },
		{ key: '秦皇岛' },
		{ key: '邯郸' },
	], '浙江': [
		{ key: '杭州' },
		{ key: '宁波' },
		{ key: '温州' },
		{ key: '嘉兴' },
	], '内蒙古': [
		{ key: '呼和浩特' },
		{ key: '包头' },
		{ key: '乌海' },
		{ key: '赤峰' },
	]
}

const allArea = {
	//河北
	'石家庄': [
		{ key: '长安区' },
		{ key: '桥东区' },
		{ key: '桥西区' },
		{ key: '新华区' },
		{ key: '井陉矿区' },
	], '唐山': [
		{ key: '路南区' },
		{ key: '路北区' },
		{ key: '古冶区' },
		{ key: '开平区' },
		{ key: '丰南区' },
	], '秦皇岛': [
		{ key: '海港区' },
		{ key: '山海关区' },
		{ key: '北戴河区' },
		{ key: '青龙满族自治区' },
		{ key: '昌黎区' },
	], '邯郸': [
		{ key: '邯山区' },
		{ key: '丛台区' },
		{ key: '复兴区' },
		{ key: '峰峰矿区' },
		{ key: '邯郸县' },
	],
	//浙江
	'杭州': [
		{ key: '上城区' },
		{ key: '下城区' },
		{ key: '江干区' },
		{ key: '拱墅区' },
		{ key: '西湖区' },
	], '宁波': [
		{ key: '海曙区' },
		{ key: '江东区' },
		{ key: '江北区' },
		{ key: '北仑区' },
		{ key: '镇海区' },
	], '温州': [
		{ key: '鹿城区' },
		{ key: '龙湾区' },
		{ key: '瓯海区' },
		{ key: '洞头区' },
		{ key: '永嘉县' },
	], '嘉兴': [
		{ key: '南湖区' },
		{ key: '秀洲区' },
		{ key: '嘉善县' },
		{ key: '海盐县' },
		{ key: '海宁县' },
	],
	//内蒙古
	'呼和浩特': [
		{ key: '新城区' },
		{ key: '回民区' },
		{ key: '玉泉区' },
		{ key: '赛罕区' },
		{ key: '土默特左旗' },
	], '包头': [
		{ key: '东河区' },
		{ key: '昆都仑区' },
		{ key: '青山区' },
		{ key: '石拐区' },
		{ key: '白云鄂博矿区' },
	], '乌海': [
		{ key: '海勃湾区' },
		{ key: '海南区' },
		{ key: '乌达区' },
		{ key: '其他区' },
	], '赤峰': [
		{ key: '红山区' },
		{ key: '元宝山区' },
		{ key: '松山区' },
		{ key: '阿鲁科尔沁旗' },
		{ key: '巴林左旗' },
	],
}