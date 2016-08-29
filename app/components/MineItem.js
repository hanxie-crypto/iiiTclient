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



const styles = StyleSheet.create({
     
      container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          marginBottom: 10,
          backgroundColor: 'white',
      },
      content: {
         flexDirection: 'row',
         alignItems: 'center',
         paddingRight: 30,
      },
      question: {
        color: '#ccc',
        fontSize: 12,
      },
      title: {
        fontSize: 12,
        marginRight: 30,
      },
});

class MineItem extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
               <Text style={styles.question}>{this.props.lab}</Text>
               <View style={styles.content}>
                    <Text style={styles.title}>下午好，宝宝吗</Text>
                    <Icon name="chevron-right" size={18} color="#000"  />
               </View>
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineItem);