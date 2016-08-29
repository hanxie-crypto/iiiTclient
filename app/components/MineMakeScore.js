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
      maincontainer: {
        backgroundColor: '#ccc',
        marginTop: 60,
        height: Util.size.height,
      },
      topcontainer: {
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: 'white',
          marginBottom: 10,
      },
      container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#ccc',
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          height: 60,
      },
      group: {
        flexDirection: 'column',
        marginBottom: 10,
      },
      avartorimg: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#2baf2b',
      },
      content: {
         flexDirection: 'row',
         alignItems: 'center',
         paddingRight: 30,
      },
      question: {
        color: '#000',
        fontSize: 12,
      },
      title: {
        fontSize: 12,
        textAlign: 'center',
      },
      btn: {
        width: 80,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        borderRadius: 5,
      }
});

class MineMakeScore extends Component {
    constructor(props: any) {
        super(props);
    }
    toMineScore() {
      const {router} = this.props;
      router.toMineScore();
    }
    render() {
        return(
            <View style={styles.maincontainer}>
     
                <View style={styles.topcontainer}>
                    <Text style={styles.question}>单月会员</Text>
                    <Text style={styles.question}>500</Text>
                    <View style={styles.btn}>
                      <Text style={styles.title}>购买</Text>
                    </View>
                </View>
       
              <View style={styles.group}>
                <View style={styles.container}>
                     <Text style={styles.question}>单月会员</Text>
                    <Text style={styles.question}>500</Text>
                    <View style={styles.btn}>
                      <Text style={styles.title}>购买</Text>
                    </View>
                </View>
                <View style={styles.container}>
                     <Text style={styles.question}>单月会员</Text>
                    <Text style={styles.question}>500</Text>
                    <View style={styles.btn}>
                      <Text style={styles.title}>购买</Text>
                    </View>
                </View>
                <View style={styles.container}>
                     <Text style={styles.question}>单月会员</Text>
                    <Text style={styles.question}>500</Text>
                    <View style={styles.btn}>
                      <Text style={styles.title}>购买</Text>
                    </View>
                </View>
              </View>
               <View style={styles.group}>
                <View style={styles.container}>
                     <Text style={styles.question}>单月会员</Text>
                    <Text style={styles.question}>500</Text>
                    <View style={styles.btn}>
                      <Text style={styles.title}>购买</Text>
                    </View>
                </View>
                <View style={styles.container}>
                   <Text style={styles.question}>单月会员</Text>
                    <Text style={styles.question}>500</Text>
                    <View style={styles.btn}>
                      <Text style={styles.title}>购买</Text>
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

export default connect(mapStateToProps)(MineMakeScore);