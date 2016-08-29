import React from 'react';

import  {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import NavHeight from '../util/NavHeight';
const height = NavHeight.getHeight();


class CommunionDetailBar {
    
    static getLeftButton(route, navigator) {
        return (<TouchableOpacity onPress={()=>{navigator.pop()}}>
                  <View  style={{width:100,flexDirection:'row',alignItems:'center',height:height}}>
                    <Icon name="chevron-left" size={30} color="#fff" style={{marginLeft:10}}/>
                  </View>
                </TouchableOpacity>);
    }

    static getRightButton(route, navigator) {

        return (<View style={{flexDirection:'row',alignItems:'center',height:height}}>
                  <Icon name="share-alt-square" size={30} color="#fff" style={{marginRight:10,}}/>
                </View>
              );
    }
   
}

export default CommunionDetailBar;