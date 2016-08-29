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
import ClassCommentItem from './ClassCommentItem';

const styles = StyleSheet.create({
  
    componentcontainer: {
        width: Util.size.width,
        position: 'relative',
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'flex-start',
    },
    tag: {
        width: 70,
        height: 24,
        padding: 10,
        backgroundColor: '#808080',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    tagtext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
    },
    content: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    avartor: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden',
    },
    desc: {
      width: Util.size.width-70,
      fontSize: 12,
      height: 40,
      lineHeight: 25,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#ccc',
      borderRadius: 4,
      color:'black',
      textAlign: 'center',
      textAlignVertical: 'center',
    }
});

class ClassCommentList extends Component {



    render() {
        return(
             <View style={styles.componentcontainer}>
              <View style={styles.tag}>
                <Text style={styles.tagtext}>课程交流</Text>
              </View>
              <View style={styles.content} >
                    <Image source={require('../../assets/p1.jpg')} style={styles.avartor} />
                 
                    <Text style={styles.desc}>感悟、吐槽都在这里说</Text>
                  
              </View>
              <ClassCommentItem/>
              <ClassCommentItem/>
              <ClassCommentItem/>
              <ClassCommentItem/>
              <ClassCommentItem/>
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(ClassCommentList);