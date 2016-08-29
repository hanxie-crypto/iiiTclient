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

import Util from '../util/util';
import Icon from 'react-native-vector-icons/FontAwesome';
import ClassPayModal from './ClassPayModal';
const styles = StyleSheet.create({
    paycontainer: {
      width: Util.size.width,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    leftcontainer: {
        width: 100,
        height: 50,
        borderStyle: 'solid',
        borderWidth: 0,
        borderRightWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    rightcontainer: {
        width: Util.size.width-100,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    payinner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
});

class PayComponent extends Component {


    openPayModal() {
        this.refs.paymodal.openModal();
    }
    render() {
        return(
             <View style={{flex:1,height:Util.size.height}}>
                <ClassPayModal visible={false} ref="paymodal"/>
                <TouchableOpacity onPress={this.openPayModal.bind(this)}>
                  <View style={styles.paycontainer}>
                      <View style={styles.leftcontainer}>
                          <View style={styles.payinner}>
                              <Icon name="jpy" size={20} color="#fff" style={{marginRight:5}}/>
                              <Text style={{fontSize: 20}}>10</Text>
                          </View>
                           <Icon name="angle-up" size={20} color="#fff" />
                      </View>
                      <View style={styles.rightcontainer}>
                          <Text style={{textAlign:'center',fontSize: 20}}>购买</Text>
                      </View>
                  </View>
                </TouchableOpacity>
             </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(PayComponent);