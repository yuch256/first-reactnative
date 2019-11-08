import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ProgressBarAndroid,
  Slider,
} from 'react-native';

export default class Dialog_3 extends Component {
  state = {
    SmallProgressBarAnimating: true,
    HorProgressBarProgress: 0.3,
    ifSliderOnValueChange: false,
    SliderValue: 50,
  }
  handleOnChangeSlider = (value) => {
    this.setState({
      ifSliderOnValueChange: true,
      SliderValue: value,
    })
  }
  render() {
    return (
      <View style={styles.viewLayout}>
        <Text style={styles.text}>Widget.ProgressBar.Small</Text>
        <ProgressBarAndroid
          styleAttr='Small'
          animating={this.state.SmallProgressBarAnimating}
          color='red'
        />
        <Text style={styles.text}>Widget.ProgressBar.Large</Text>
        {/* <ActivityIndicator size={60} animating={true} color="#00ff00" /> */}
        <ProgressBarAndroid color='black' styleAttr='Large' />
        <Text style={styles.text}>Widget.ProgressBar.Inverse</Text>
        <ProgressBarAndroid styleAttr='Inverse' />
        <Text style={styles.text}>Widget.ProgressBar.Horizontal</Text>
        <ProgressBarAndroid
          animating={true}
          color='red'
          indeterminate={false}
          progress={this.state.HorProgressBarProgress}
          styleAttr='Horizontal'
        />
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Button
              title='+'
              onPress={() => {
                HorProgressBarProgress = this.state.HorProgressBarProgress
                this.setState({ HorProgressBarProgress: HorProgressBarProgress < 1 ? HorProgressBarProgress + 0.1 : 1 })
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='-'
              onPress={() => {
                HorProgressBarProgress = this.state.HorProgressBarProgress
                this.setState({ HorProgressBarProgress: HorProgressBarProgress > 0 ? HorProgressBarProgress - 0.1 : 0 })
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='VisiPb'
              onPress={() => this.setState({ SmallProgressBarAnimating: !this.state.SmallProgressBarAnimating })}
            />
          </View>
        </View>
        <View style={styles.sliderView}>
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={this.state.SliderValue}
            step={1}
            onValueChange={this.handleOnChangeSlider}
            onSlidingComplete={() => this.setState({ ifSliderOnValueChange: false })}
          />
          <Text style={styles.text}>{this.state.ifSliderOnValueChange ? `当前位置${this.state.SliderValue}` : '拖动滑块设置'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewLayout: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginRight: 10,
  },
  sliderView: {
    marginBottom: 10,
  }
})