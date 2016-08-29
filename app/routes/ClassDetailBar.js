import React from 'react';

import  {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

import NavHeight from '../util/NavHeight';
const height = NavHeight.getHeight();
class ClassDetailBar {
    
    static getLeftButton(route, navigator) {
        return (<TouchableOpacity onPress={()=>{navigator.pop()}}>
                  <View style={{width:100,height:height,flexDirection: 'row',alignItems:'center',}}>
                    <Icon name="chevron-left" size={20} color="#fff" style={{marginLeft:6}}/>
                  </View>
                </TouchableOpacity>);
    }

    static getRightButton(route, navigator) {

        return (<View style={{position:'relative',height:height,flexDirection: 'row',alignItems:'center',}}>
              <Icon name="heart" size={30} color="#fff" style={{marginRight:4}}/>
              <Icon name="download" size={30} color="#fff" style={{marginRight:4}}/>
              <Icon name="share-alt-square" size={30} color="#fff" style={{marginRight:4}}/>
            </View>);
    }
   
}

export default ClassDetailBar;