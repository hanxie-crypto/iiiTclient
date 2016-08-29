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
  
    itemcontainer: {
      height: 120,
      width: Util.size.width-20,
      padding: 14,
      marginBottom: 20,
      backgroundColor: '#78909c',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      alignSelf : 'center',
      borderRadius: 10,

    },
    leftpart: {
       flexDirection: 'column',
       justifyContent: 'space-between',
    },
    rightpart: {
      flexDirection: 'row',
      justifyContent: 'flex-end',

    },
    lefttitle: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    },
    leftcontent: {
        fontSize: 12,
        color: '#ccc',
    },
    tag: {
        position: 'absolute',
        top: -4,
        right: 10,
        paddingTop: 6,
        width: 32,
        height: 32,
    },
    tagfont: {
        fontSize: 10,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
    },
});

class SkillItem extends Component {

    goDetail(data) {
       const {router} = this.props;
       router.toSkillDetail({data:data});
    }
   

    render() {
        const data = this.props.data;
        return(
            <TouchableOpacity onPress={this.goDetail.bind(this,data)}>
             <View style={styles.itemcontainer}>
                <Image style={styles.tag} source={require('../../assets/tagusual.jpg')} >
                     <Text style={styles.tagfont}>付费</Text>
                </Image>
                <View style={styles.leftpart}>
                    <Text style={styles.lefttitle}>{data.title}</Text>
                    <Text style={styles.leftcontent}>{data.content}</Text>
                </View>
                <View style={styles.rightpart}>
                    <Icon name="thumbs-up" size={20} color="#000"  />
                    <Text style={{marginRight: 20,}}>{data.prisenum}</Text>
                    <Icon name="comment-o" size={20} color="#000"  />
                    <Text>{data.collectnum}</Text>
                </View>
             </View>
             </TouchableOpacity>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(SkillItem);