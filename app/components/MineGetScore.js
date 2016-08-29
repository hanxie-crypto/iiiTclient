import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';


import Util from '../util/util';
import ProductItem from './ProductItem';


const styles = StyleSheet.create({
      container: {
         marginTop: 60,
         backgroundColor: '#ccc',
         height: Util.size.height,
         flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'center',
         paddingTop: 10,
         paddingBottom: 10,
      },
});

class MineGetScore extends Component {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return(
          <View style={styles.container}>
              <ScrollView>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
              </ScrollView>
          </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineGetScore);