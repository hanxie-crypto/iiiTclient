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
        color: '#ccc',
        fontSize: 12,
      },
      title: {
        fontSize: 12,
        marginRight: 30,
      },
});

class MineVipInfo extends Component {
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
              <TouchableOpacity onPress={this.toMineScore.bind(this)}>
                <View style={styles.topcontainer}>
                    <Text style={styles.question}>会员等级</Text>
                    <View style={styles.content}>
                      <Text style={styles.title}>V1会员，381经验分</Text>
                      <Icon name="chevron-right" size={18} color="#000"  />
                    </View>
                </View>
              </TouchableOpacity>
              <View style={styles.group}>
                <View style={styles.container}>
                    <Image style={styles.avartorimg} source={require('../../assets/tagusual.jpg')} />
                    <View style={styles.content}>
                      <Text style={styles.title}>V1会员，381经验分</Text>
                      <Icon name="chevron-right" size={18} color="#000"  />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.question}>会员等级</Text>
                    <View style={styles.content}>
                      <Text style={styles.title}>V1会员，381经验分</Text>
                      <Icon name="chevron-right" size={18} color="#000"  />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.question}>会员等级</Text>
                    <View style={styles.content}>
                      <Text style={styles.title}>V1会员，381经验分</Text>
                      <Icon name="chevron-right" size={18} color="#000"  />
                    </View>
                </View>
              </View>
               <View style={styles.group}>
                <View style={styles.container}>
                    <Text style={styles.question}>会员等级</Text>
                    <View style={styles.content}>
                      <Text style={styles.title}>V1会员，381经验分</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.question}>会员等级</Text>
                    <View style={styles.content}>
                      <Text style={styles.title}>V1会员，381经验分</Text>
                      <Icon name="chevron-right" size={18} color="#000"  />
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

export default connect(mapStateToProps)(MineVipInfo);