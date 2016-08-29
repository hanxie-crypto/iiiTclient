import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ClassList from './ClassList';

import Util from '../util/util';

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    paddingTop: 56,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

const contentHeight = Util.size.height;
class MineBoughtClass extends Component {
    constructor(props: any) {
        super(props);
    }
 
    render() {
        return (  <View style={styles.container}>
                    <ClassList {...this.props} />
                  </View>
                )
    }
}

function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineBoughtClass);
