import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import Util from '../util/util';
import DiscoverClassItem from './DiscoverClassItem';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
    },
  
});

class DiscoverClassList extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <DiscoverClassItem />
                <DiscoverClassItem />
                <DiscoverClassItem />
                <DiscoverClassItem />
                <DiscoverClassItem />
            </ScrollView>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(DiscoverClassList);