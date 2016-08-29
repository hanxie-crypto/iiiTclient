'use strict';


import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    WebView
} from 'react-native';
import React from 'react';
import Util from '../util/util';
let HEADER = '#3b5998';
let BGWASH = 'rgba(255,255,255,0.8)';
let DISABLED_WASH = 'rgba(255,255,255,0.25)';

let TEXT_INPUT_REF = 'urlInput';
let WEBVIEW_REF = 'webview';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: HEADER,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8,
    height: 40,
    width: Util.size.width,
  },
  webView: {
    flex: 1,
    backgroundColor:'red',
    height: Util.size.height-62,
    width: Util.size.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressBarTextInput: {
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14,
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  disabledButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DISABLED_WASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  goButton: {
    height: 24,
    padding: 3,
    marginLeft: 8,
    alignItems: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    alignSelf: 'stretch',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22,
  },
  statusBarText: {
    color: 'white',
    fontSize: 13,
  },
  spinner: {
    width: 20,
    marginRight: 6,
  },
});
export default class WebViewExample extends React.Component {

  constructor(props: any) {
    super(props);
  }


  render() {
    const {url,status,scalesPageToFit,backButtonEnabled,forwardButtonEnabled } = this.props.state.webview;
    this.inputText = url;
    return (
      <View style={[styles.container]}>
        <View style={[styles.addressBarRow]}>
          <TouchableOpacity
            onPress={this.goBack}
            style={backButtonEnabled ? styles.navButton : styles.disabledButton}>
            <Text>
               左边
            </Text>
          </TouchableOpacity>
         
          <TextInput
            ref={TEXT_INPUT_REF}
            autoCapitalize="none"
            defaultValue={url}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            onChangeText={this.handleTextInputChange.bind(this)}
            clearButtonMode="while-editing"
            style={styles.addressBarTextInput}
          />
          <TouchableOpacity onPress={this.pressGoButton.bind(this)}>
            <View style={styles.goButton}>
              <Text>
                 前往
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          ref={WEBVIEW_REF}
          url = {url}
          style={styles.webView}
          scrollEnabled = {true}
          renderError = {this.renderError.bind(this)}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          scalesPageToFit={true}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{status}</Text>
        </View>
      </View>
    );
  }
  renderError(err) {
   console.log(err);
  }
  goBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  goForward() {
    this.props.goForward();
  }

  reload() {
    this.refs[WEBVIEW_REF].reload();
  }
  handleTextInputChange(text) {
    if (!/^[a-zA-Z-_]+:/.test(text)) {
      text = 'http://' + text;
    }
    this.inputText = text;
  }
  onShouldStartLoadWithRequest(event) {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  }

  onNavigationStateChange(navState) {
    //this.props.getWebView(navState)
  }

  onSubmitEditing(event) {
    //this.pressGoButton();
  }

  pressGoButton() {
   var url = this.inputText.toLowerCase();
    if (url === this.props.state.webview.url) {
      this.reload();
    } else {
      this.props.goWebView(url);
    }
    this.refs[TEXT_INPUT_REF].blur();
  }

}


