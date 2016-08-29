import React from 'react';

import  {
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import NavHeight from '../util/NavHeight';
const height = NavHeight.getHeight();

class BarUtil {

    static getLeftButton(route, navigator) {
        return (<TouchableOpacity onPress={()=>{navigator.pop()}}>
                  <View style={{width:100,height: height,flexDirection:'row',alignItems:'center',}}>
                    <Icon name="chevron-left" size={30} color="#fff" style={{marginLeft:6}}/>
                  </View>
                </TouchableOpacity>);
    }

    static getTitle(name) {
        return (
          <View style={{height:height,flexDirection: 'row',alignItems:'center'}}>
            <Text style={{color: 'white', fontSize: 14,textAlign:'center',width:200, }}>
              {name}
            </Text>
          </View>
        )
    }
    static getRightButton(route, navigator) {
        return (<View style={{position:'relative',width:40,height:height,flexDirection:'row',alignItems:'center',}}>
             <Icon name="bell" size={30} color="#fff" />
             <View style={{position:'absolute',right:10,top:0,width:14,height:14,borderRadius:7,backgroundColor:'#ff9900',overflow:'hidden',alignItems:'center',flexDirection:'row',justifyContent:
             'center'}}>
                <Text style={{color:'white',fontSize:8,lineHeight:10,textAlign:'center'}}>10</Text>
             </View>
            </View>)
    }
    
}

export default BarUtil;