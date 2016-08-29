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
import ChooseTypeModal from './ChooseTypeModal';
import Util from '../util/util';
import SkillList from './SkillList';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
});

class SkillIndex extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
              <ChooseTypeModal {...this.props}/>
              <SkillList {...this.props}/>
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(SkillIndex);