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

class MineScoreBar {

   
    static toMineScoreDescList(route,navigator) {
      this.router = this.router || new Router(route,navigator);
      this.router.toMineScoreDescList();
    }
   
    static getRightButton(route, navigator) {
        return (
          <TouchableOpacity onPress={this.toMineScoreDescList.bind(this,route,navigator)}>
            <Text style={{color: 'white', fontSize: 14,textAlign:'right',width:100, marginTop: 5,paddingRight: 20}}>
            明细
            </Text></TouchableOpacity>)
    }
    
}

export default MineScoreBar;