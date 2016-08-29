import  {
  StyleSheet,
  Component,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Text
} from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
  container: {
  flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'red'
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});



export default class LayoutAnimate extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    // 创建动画
    LayoutAnimation.spring();
  }
  _onPress(callback) {
    // 让视图的尺寸变化以动画形式展现
    LayoutAnimation.spring();
    callback();
  }

  render() {
    const { windowSize , animateIncrement} = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: windowSize.w, height: windowSize.h}]} />
        <TouchableOpacity onPress={this._onPress.bind(this,animateIncrement)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}