import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import { connect } from 'react-redux';

import Util from '../util/util';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  
    itemcontainer: {
      padding: 14,
      borderStyle: 'solid',
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: '#ccc',
      flexDirection: 'column',
    },
    topshow: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
    },
    rightpart: {
      width: 100,
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    leftpart: {
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    avartor: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden',
      marginRight: 8,
    },
    tagwrapper: {
       flexDirection: 'column',
      justifyContent: 'center',
    },
    uname: {
      fontSize: 13,
      marginBottom: 5,
    },
    time: {
      fontSize: 12,
      color: '#ccc',
    },
    imgwrapper: {
      width: Util.size.width,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      flexWrap: 'wrap',
   },
});

class CommunionItem extends Component {


   
    render() {
        let  data = this.props.data;
        let images = data.images ||'';
        let imglist = [];
        if(images !== '') {
            imglist = images.split(',');
        }
        let imgcomponents = [];
        for(let i=0;i<imglist.length;i++) {
            imgcomponents.push(<Image key={i} style={{width:40,height:40,marginRight:10}} source={{uri:imglist[i]}} />)
        } 
        const communionimg = imgcomponents.length ===0?null:<View style={styles.imgwrapper}>
                  {imgcomponents}
                </View>;
        return(
 
             <View style={styles.itemcontainer}>
                <View style={styles.topshow} >
                  <View style={styles.leftpart}>
                    <Image source={require('../../assets/p1.jpg')} style={styles.avartor} />
                    <View style={styles.tagwrapper}>
                      <Text style={styles.uname}>{data.username}</Text>
                      <Text style={styles.time}>{data.createtime}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.rightpart}>
                   
                    <Icon name="comment-o" size={20} color="#000"  />
                    <Text style={{marginRight: 20,}}>{data.componentnum}</Text>
                    <Icon name="heart" size={20} color="#000"  />
                    <Text >{data.collectnum}</Text>
                  </View>
                </View>
                <View>
                  <Text>{data.content}</Text>
                </View>
                {communionimg}
             </View>
   
        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(CommunionItem);