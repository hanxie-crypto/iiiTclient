import React from 'react';

import  {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import Router from './Router';
import NavHeight from '../util/NavHeight';
const height = NavHeight.getHeight();

class SkillBar {

    static navToAddSkill(route,navigator) {
        this.router = this.router|| new Router(route,navigator);
        this.router.toAddSkill();
    }
    static getLeftButton(route, navigator) {
        return null;
    }
    
    static getRightButton(route, navigator) {
        return (<View style={{position:'relative',flexDirection:'row',alignItems:'center',height:height}}>
                <TouchableOpacity
                        activeOpacity={1}
                        onPress = {this.navToAddSkill.bind(this,route,navigator)}>
                <Icon name="plus-circle" size={30} color="#fff" style={{marginRight: 10,}}/>
                </TouchableOpacity>
                <Icon name="bell" size={30} color="#fff" style={{marginRight: 10,}}/>
             <View style={{position:'absolute',right:10,top:0,width:14,height:14,borderRadius:7,backgroundColor:'#ff9900',overflow:'hidden',alignItems:'center',flexDirection:'row',justifyContent:
             'center'}}>
                <Text style={{color:'white',fontSize:8,lineHeight:10,textAlign:'center'}}>10</Text>
             </View>
            </View>)
    }
}

export default SkillBar;