import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../util/util';


const styles = StyleSheet.create({
    dcontainer: {
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
    },
    tag: {
        width: 70,
        height: 24,
        padding: 10,
        backgroundColor: '#808080',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 10,

    },
    tagtext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
    },
    contentwrapper: {
         backgroundColor: '#78909c',
         width: (Util.size.width-20),
         height: 70,
         borderRadius: 5,
         flexDirection: 'row',
         justifyContent: 'space-between',
         padding: 10,
         borderRadius: 10,
         alignSelf: 'center',
    },
    iconwrapper: {
        width: 20,
        height: 20,
        overflow:'hidden',
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf:'center',

    }
});

class ClassAboutItem extends Component {



    render() {
        return(
            <View style={styles.dcontainer}>
                <View style={styles.tag}>
                    <Text style={styles.tagtext}>课程详情</Text>
                </View>
                <View style={styles.contentwrapper}>
                    <Text style={{color:'white',alignSelf:'center',}}>我-信息</Text>
                    <View style={styles.iconwrapper}>
                        <Icon name="angle-right" size={20} color="#000" style={{alignSelf:'center'}}/>
                    </View>
                    
                </View>
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(ClassAboutItem);