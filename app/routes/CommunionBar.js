import React from 'react';

import  {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

import NavHeight from '../util/NavHeight';
const height = NavHeight.getHeight();

const styles = StyleSheet.create({
   inputwrapper: {
     width:220,
     height:35, 
     borderColor: 'gray', 
     borderWidth: 1,
     borderRadius: 4,
     marginLeft:10,
     alignSelf:'center',
   },
   input: {
     width:220,
     height:35,  
     paddingLeft: 40,
     color: 'white',
     fontSize: 12,
   },
   searchcontainer: {
    position: 'relative',
    height: height,
    flexDirection:'row',
    alignItems:'center',
   },
   searchicon: {
    position: 'absolute',
    left: 17,
    top: 13,
   }
});
import Router from './Router';


class CommunionBar {
    
    static navToAddQuestion(route,navigator) {
        this.router = this.router|| new Router(route,navigator);
        this.router.toAddQuestion();
        return;
    }

    static getLeftButton(route, navigator) {
        return (
                  <View style={styles.searchcontainer}>
                    <Icon name="search" size={20} color="#fff" style={styles.searchicon}/>
                    <View style={styles.inputwrapper}>
                      <TextInput 
                        style={styles.input} 
                        underlineColorAndroid='transparent'
                        placeholder="输入想要查找的问题" 
                        placeholderTextColor='white'/>
                    </View>
                  </View>
              );
    }

    static getRightButton(route, navigator) {

        return (<View style={{position:'relative',height:height,marginTop:0,flexDirection: 'row',alignItems:'center'}}>
                  <Icon name="question-circle" size={30} color="#fff" style={{marginRight:4}}/>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress = {this.navToAddQuestion.bind(this,route,navigator)}>
                      <Icon name="plus-circle" size={30} color="#fff" style={{marginRight:4}}/>
                    </TouchableOpacity>
                </View>);
    }
   
}

export default CommunionBar;