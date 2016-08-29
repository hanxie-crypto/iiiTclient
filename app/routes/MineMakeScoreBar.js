import React from 'react';

import  {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Router from './Router';
import NavHeight from '../util/NavHeight';
const height = NavHeight.getHeight();

class MineMakeScoreBar {

  
   
    static getRightButton(route, navigator) {

        return (<View style={{position:'relative',height:height,marginTop:0,flexDirection: 'row',alignItems:'center'}}>
                    <TouchableOpacity
                        activeOpacity={1}>
                      <Icon name="question-circle" size={30} color="#fff" style={{marginRight:10}}/>
                    </TouchableOpacity>
                </View>);
    }
    
}

export default MineMakeScoreBar;