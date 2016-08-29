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
import ClassAboutItem from './ClassAboutItem';

const styles = StyleSheet.create({
    aboutcontainer: {
      position: 'relative',
      flexDirection: 'column',
      borderStyle: 'solid',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: '#ccc',
    },
    arrowtagwrapper: {
        position:'absolute',
        top: -10,
        zIndex: 999,
        flexDirection: 'row',
        width: Util.size.width,
        justifyContent: 'center',
    },
    arrowcontent: {
        width: 100,
        zIndex: 999,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    arrowtag: {
        textAlign: 'center',

    }
    
});

class ClassAboutList extends Component {



    render() {
        return(
            <View style={styles.aboutcontainer}>
              <View style={styles.arrowtagwrapper}> 
                <View style={styles.arrowcontent}>
                    <Icon name="angle-double-down" size={20} color="#000" style={styles.arrowtag} />
                    <Text style={{fontSize:12,marginTop:3}}>更多</Text>
                </View>
              </View>
              <ClassAboutItem />
              <ClassAboutItem />
              <ClassAboutItem />
              <ClassAboutItem />
              <ClassAboutItem />
              <ClassAboutItem />
              <ClassAboutItem />
              <ClassAboutItem />
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(ClassAboutList);