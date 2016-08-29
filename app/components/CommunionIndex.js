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
  Animated,
  Modal,
  InteractionManager,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../util/util';
import CommunionList from './CommunionList';
import ChooseTypeModal from './ChooseTypeModal';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
});

class CommunionIndex extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
  
        return(
            <View style={styles.container}>
              <ChooseTypeModal {...this.props}/>
              <CommunionList {...this.props}/>
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(CommunionIndex);