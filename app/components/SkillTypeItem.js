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
      height: 60,
      width: Util.size.width,
      paddingTop: 14,
      paddingBottom: 14,
      marginBottom: 20,
      backgroundColor: '#000',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf : 'center',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderColor: '#ccc',

    },
    
});

class SkillTypeItem extends Component {

    changeSkillType(data) {
        console.log(data);
        this.props.changSkillType(data);
        this.props.router.pop();
    }

    render() {
        const data = this.props.data;
        return(
            <TouchableOpacity onPress={this.changeSkillType.bind(this,data)} >
                 <View style={styles.itemcontainer}>
                    <Text style={{color:'white'}}>{data.skilltype}</Text>
                 </View>
             </TouchableOpacity>

        )
    }
}


function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(SkillTypeItem);