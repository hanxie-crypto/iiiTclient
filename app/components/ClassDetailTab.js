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

const styles = StyleSheet.create({
    tabcontainer: {
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
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    contentword: {
        fontSize: 12,
        marginBottom: 2,

    },
});
class ClassDetailTab extends Component {



    render() {
        return(
            <View style={styles.tabcontainer}>
              <View style={styles.tag}>
                <Text style={styles.tagtext}>课程详情</Text>
              </View>
              <View style={styles.content} >
                    <Text style={styles.contentword}>专家指出，生存教育的根本在于培养独立性，包括独立意识和独立能力，重点培养自理生活能力。独立性的培养必须从小抓起。</Text>
                    <Text style={styles.contentword}>1、在思想上要认识到孩子独立性需要从小开始培养。</Text>
                    <Text style={styles.contentword}>2、了解孩子的发展过程是培养孩子独立性的前提。</Text>
              </View>
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(ClassDetailTab);