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
import MineList from './MineList';
import SkillList from './SkillList';
import MineAnswerItem from './MineAnswerItem';
import MineAskItem from './MineAskItem';
const styles = StyleSheet.create({
     
      container: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: Util.size.height,
          backgroundColor: '#ccc',
          marginTop: 60,
          marginBottom: 10,
      },
      topcontainer: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 192,
          backgroundColor: '#fff',
          marginBottom: 10,

      },
      resultcontiner: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      avartorimg: {
        width: 82,
        height: 82,
        borderRadius: 41,
      },
      top: {
        width: Util.size.width,
        height: 40,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
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

class MinePubPage extends Component {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return(
          <View style={styles.container}>
              <View style={styles.topcontainer}>
                    <Image style={styles.avartorimg} source={require('../../assets/tagusual.jpg')} />
                    <Text>下午好，宝宝妈</Text>
                    <Text>V1会员/4381人关注</Text>
                    <View style={styles.top}>
                      <View style={styles.tag}>
                          <Text style={styles.tagtext}>提问</Text>
                          <Text style={styles.departicon}>|</Text>
                      </View>
                      <View style={styles.tag}>
                          <Text style={styles.tagtext}>回答</Text>
                          <Text style={styles.departicon}>|</Text>
                      </View>
                      <View style={styles.tag}>
                          <Text style={styles.tagtext}>技巧</Text>
                      </View>
                    </View>
              </View>
              <View style={styles.resultcontiner}>
                  
                    <View>
                        <MineAnswerItem/>
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

export default connect(mapStateToProps)(MinePubPage);