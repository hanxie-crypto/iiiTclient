import React from 'react';

import  {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

import NavHeight from '../util/NavHeight';
const height = NavHeight.getHeight();

class SkillDetailBar {
    
    static getLeftButton(route, navigator) {
        return (<TouchableOpacity onPress={()=>{navigator.pop()}}>
                  <View style={{width:100,flexDirection:'row',alignItems:'center',height:height,}}>
                    <Icon name="chevron-left" size={30} color="#fff" style={{marginLeft:6}}/>
                  </View>
                </TouchableOpacity>);
    }

    static getRightButton(route, navigator) {

        return (<View style={{position:'relative',flexDirection: 'row',flexDirection:'row',alignItems:'center',height:44,}}>
              <Icon name="heart" size={30} color="#fff" style={{marginRight:5}}/>
              <Icon name="download" size={30} color="#fff" style={{marginRight:5}}/>
              <Icon name="share-alt-square" size={30} color="#fff" style={{marginRight:5}}/>
            </View>);
    }
   
}

export default SkillDetailBar;