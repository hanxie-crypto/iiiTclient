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

const styles = StyleSheet.create({
  
    container: {

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Util.size.width,
      backgroundColor: '#fff',
      padding: 14,
      marginBottom: 10,
    },
    avartor: {
        width: 82,
        height: 82,
        marginRight: 10,
    },
    rightpart: {
       width: Util.size.width-112,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'flex-start',
    },
    righttext: {
      fontSize: 12,
      color:'#000',
    },
    rightpartbottom: {
      width: Util.size.width-112,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    timetext: {
      fontSize: 10,
      color: '#000',
    },
    tagcontent: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    score: {
      fontSize: 17,
      color: '#000',
    },
    tip: {
      fontSize: 12,
      color: '#ccc',
    }
    
});

class ProductItem extends Component {



    render() {
        return(
             <View style={styles.container}>
                <Image source={require('../../assets/p1.jpg')} style={styles.avartor} />
                <View style={styles.rightpart}>
                  <Text style={styles.righttext}>SDASD</Text>
                  <View style={styles.rightpartbottom}>
                    <Text style={styles.timetext}>6月1日</Text>
                    <View style={styles.tagcontent}>
                      <Text style={styles.score}>500分</Text>
                      <Text style={styles.tip}>可抵扣￥10</Text>
                    </View>
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

export default connect(mapStateToProps)(ProductItem);