import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Util from '../util/util';



const styles = StyleSheet.create({
      
      inputdesc: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
      },
      tabcontainer: {
        width: Util.size.width,
        position: 'relative',
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'flex-start',
      },
      tag: {
        width: 70,
        height: 24,
        padding: 10,
        backgroundColor: '#808080',
        flexDirection: 'column',
        justifyContent: 'center',

      },
      tagtext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
      },
      content: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',

      },
      contentword: {
        fontSize: 12,
        marginBottom: 2,

      },
    
});

class SkillTagItem extends Component {
    constructor(props: any) {
        super(props);
        this.text = '';
    }
    getText() {
      return this.text;
    }
    changeText(text) {
      this.text = text;
    }
    render() {
        return(
              <View style={styles.tabcontainer}>
                <View style={styles.tag}>
                  <Text style={styles.tagtext}>{this.props.tag}</Text>
                </View>
                <View style={styles.content} >
                  <TextInput
                    underlineColorAndroid='transparent'
                    style={[styles.inputdesc,{height:this.props.height}]} maxLength={this.props.maxLength} onChangeText={this.changeText.bind(this)} multiline={true}/>
                </View>
              </View>
        )
    }
}



export default SkillTagItem;