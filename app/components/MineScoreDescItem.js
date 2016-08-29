import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Util from '../util/util';



const styles = StyleSheet.create({
      container: {
         width: Util.size.width,
         backgroundColor: '#fff',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         padding: 10,
         borderWidth: 1,
         borderColor: '#ccc',
         borderTopWidth: 0,
         borderLeftWidth: 0,
         borderRightWidth: 0,
      },
      one: {
         height: 40,
         flexDirection: 'column',
         justifyContent: 'space-between',
         alignItems: 'center',
         paddingTop: 10,
         paddingBottom: 10,
      },
      onetexttop: {
        fontSize: 15,
        color: '#000',
      },
      onetextbottom: {
        fontSize: 12,
        color: '#ccc',
      },
      twotext: {
        fontSize: 15,
        color: '#000',
      },
      threetext: {
        fontSize: 12,
        color: '#ccc',
      },

});

class MineScoreDescItem extends Component {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return(
          <View style={styles.container}>
            <View style={styles.one}>
              <Text style={styles.onetexttop}>每日签到</Text>
              <Text style={styles.onetextbottom}>2016-05-09</Text>
            </View>
            <View style={styles.two}>
              <Text style={styles.twotext}>500</Text>
            </View>
            <View>
              <Text style={styles.threetext}>2016-08-09失效</Text>
            </View>
          </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineScoreDescItem);