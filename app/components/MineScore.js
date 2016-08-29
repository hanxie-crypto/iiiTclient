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
import Icon from 'react-native-vector-icons/FontAwesome';

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
      top: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 120,
      },
      toptext: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: Util.size.width,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 10,
      },
      bottom: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: Util.size.width,
          padding: 10,
      },
      getscorebtn: {
         width: Util.size.width/2-30,
         height: 40,
         backgroundColor: 'black',
         borderRadius: 5,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
      },
      scortext: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      }
});

class MineScore extends Component {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
       this.router = this.props.router;
    }
    toMineGetScore() {
      this.router.toMineGetScore();
    }
    toMineMakeScore() {
      this.router.toMineMakeScore();
    }
    render() {
        return(
          <View style={styles.container}>
              <View style={styles.top}>
                  <View style={styles.toptext}>
                      <Text>当前可用积分: 6543</Text>
                      <Icon name="question-circle" size={30} color="#fff"  />
                  </View>
                  <View style={styles.bottom}>
                      <TouchableOpacity onPress={this.toMineGetScore.bind(this)}>
                        <View style={styles.getscorebtn}>
                          <Text style={styles.scortext}>兑换经验分</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.toMineMakeScore.bind(this)}>
                        <View style={styles.getscorebtn}>
                          <Text style={styles.scortext}>赚取经验分</Text>
                        </View>
                      </TouchableOpacity>
                  </View>
              </View>
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

export default connect(mapStateToProps)(MineScore);