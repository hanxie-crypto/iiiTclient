import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../util/util';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 100,
      marginBottom: 10,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',

    },

    leftpart: {
      width: 82,
      height: 82,
      borderRadius: 41,
      overflow: 'hidden',
      marginRight: 20,
    },
    rightpart: {
        width: Util.size.width -82,
        flexDirection: 'column',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    toptext: {
       fontSize: 20,
       color: 'black',
    },
    bottomtext: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    des: {
       fontSize: 12,
       color: '#ccc',
       marginRight: 60,
    },
    price: {
        fontSize: 30,
        color: '#ff9800',
        fontWeight : '300',
    }
  
});

class DiscoverClassItem extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
               <Image source={require('../../assets/p1.jpg')} style={styles.leftpart} />
               <View style={styles.rightpart}>
                    <Text style={styles.toptext}>dsadas</Text>
                    <View style={styles.bottomtext}>
                        <Text style={styles.des}>dsadas</Text>
                        <Text style={styles.price}>￥ 201</Text>
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

export default connect(mapStateToProps)(DiscoverClassItem);