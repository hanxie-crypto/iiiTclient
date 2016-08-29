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
import MineScoreDescItem from './MineScoreDescItem';


const styles = StyleSheet.create({
      container: {
         marginTop: 60,
         backgroundColor: '#ccc',
         height: Util.size.height,
         flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'center',
         paddingTop: 10,
         paddingBottom: 10,
      },
      top: {
        width: Util.size.width,
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      tag: {
        position:'relative',
        width: Util.size.width/3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
      },
      departicon: {
        position: 'absolute',
        top: 10,
        right: 0,
      },
      tagtext: {
        fontSize: 12,
        color: '#000',
      }
});

class MineScoreDescList extends Component {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return(
          <View style={styles.container}>
            <View style={styles.top}>
              <View style={styles.tag}>
                <Text style={styles.tagtext}>全部</Text>
                <Text style={styles.departicon}>|</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagtext}>获得</Text>
                <Text style={styles.departicon}>|</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagtext}>消耗</Text>
              </View>
            </View>
            <ScrollView>
                <MineScoreDescItem/>
                <MineScoreDescItem/>
                <MineScoreDescItem/>
                <MineScoreDescItem/>
            </ScrollView>
          </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineScoreDescList);