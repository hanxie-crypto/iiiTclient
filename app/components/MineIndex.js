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


const styles = StyleSheet.create({
      minecontainer: {
          flexDirection: 'column',
          backgroundColor: '#ccc',
      },
      container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
          padding: 10,
          backgroundColor: '#2baf2b',
      },
      avartor: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 82,
        height: 82,
        borderRadius: 41,
        backgroundColor: 'white',
        overflow: 'hidden',
        marginLeft: 10,
        alignSelf: 'center',
      },
      avartorimg: {
        width: 82,
        height: 82,
        borderRadius: 41,
      },
      content: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',

      },
      title: {
          fontSize: 20,
          marginBottom: 20,
      },
      vipinfo: {
        flexDirection: 'row',
      },
      rightarrow: {
        
      },
    
});

class MineIndex extends Component {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
      const userid = this.props.author.get('user').get('userid')
       if(typeof userid === 'undefined') {
          this.props.openLoginModal();
          return;
       }
    }
    goMineVipInfo() {
        const {router} = this.props;
        router.toMineVipInfo({});
    }
    render() {
        const user = this.props.author.get('user');
        const username = user.get('username');
        const useraccount = user.get('useraccount');
        return(
          <View style={styles.minecontainer}>
            <TouchableOpacity onPress={this.goMineVipInfo.bind(this)} activeOpacity={1}>
              <View style={styles.container}>
               <View style={styles.avartor}>
                  <Image style={styles.avartorimg} source={require('../../assets/tagusual.jpg')} />
               </View>
               
               <View style={styles.content}>
                    <Text style={styles.title}>下午好，{username===null?useraccount:username}</Text>
                    <View style={styles.vipinfo}>
                        <Text>V1会员</Text>
                        <Text>|</Text>
                        <Text>6453积分</Text>
                    </View>
               </View>
                <Icon name="chevron-right" size={30} color="#fff"  style={styles.rightarrow}/>
            </View>
            </TouchableOpacity>
            <MineList {...this.props}/>
          </View>

        )
    }
}


function mapStateToProps(state) {
  return {
    author: state.get('author'),
  };
}

export default connect(mapStateToProps)(MineIndex);