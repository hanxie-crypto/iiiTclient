import Drawer from 'react-native-drawer'

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import UserWebView from './webview';

export default class Application extends React.Component {  
  constructor(props: any) {
    super(props);
  }
  closeControlPanel(){
    this.refs.drawer.close()
  };
  openControlPanel(){
    console.log('ss');
    this.refs.drawer.open()
  };
  render () {
    var ControlPanel = <View><Text>你好</Text></View>;
    return (
      <Drawer
        ref="drawer"
        content={ControlPanel}
        openDrawerOffset={100}
        styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}}
        tweenHandler={Drawer.tweenPresets.parallax}
        >
        <View>
            <TouchableOpacity onPress={this.openControlPanel.bind(this)}>
              <View style={{ height: 24,width:24,left:0,top:0}}>
                <Text>
                   左边
                </Text>
              </View>
            </TouchableOpacity>
            <UserWebView state={this.props.state} goWebView={this.props.goWebView} />
        </View>
      </Drawer>
    )
  }
}