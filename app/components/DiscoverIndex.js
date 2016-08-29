import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Util from '../util/util';
import DiscoverClassList from './DiscoverClassList';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 156,
    },
    wrapper: {
        
    },
    slide: {
      height: 160,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    navwrapper: {
      height: 200,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
    },
    navitem: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navimg: {
        width: 40,
        height: 40,
        marginBottom: 10,
    },
    navtext: {
        textAlign: 'center',
        fontSize: 20,
    },
    bannerpicwrapper: {
         height: 300,
         flexDirection: 'row',
         justifyContent: 'space-between',
         marginBottom: 10,
    },
    leftbw: {
      width:70,
      height: 300,
    },
    rightbw: {
      flexDirection: 'column',
      width: Util.size.width-80,
      height: 300,
      justifyContent: 'space-between',
    },
    lpic: {
       width: 70,
       height: 300,
    },
    rpic: {
       width: Util.size.width-80,
       height: 140,
    },
    othertipwrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: 10,
    },
    othertip: {
      width: Util.size.width/2-15,
      height: Util.size.width/2-15,
      marginBottom: 10,
    }
});

class DiscoverIndex extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <ScrollView style={styles.container}>
               
                <Swiper style={styles.wrapper} showsButtons={false} height={160} >
                  <Image source={require('../../assets/p1.jpg')} style={styles.slide} />
                  <Image source={require('../../assets/p2.jpg')} style={styles.slide} />
                  <Image source={require('../../assets/p3.jpg')} style={styles.slide} />
                </Swiper>
                
                <View style={styles.navwrapper}>
                    <View style={styles.navitem}>
                        <Image source={require('../../assets/p1.jpg')} style={styles.navimg} />
                        <Text style={styles.navtext}>讲座</Text>
                    </View>
                    <View style={styles.navitem}>
                        <Image source={require('../../assets/p1.jpg')} style={styles.navimg} />
                        <Text style={styles.navtext}>讲座</Text>
                    </View>
                    <View style={styles.navitem}>
                        <Image source={require('../../assets/p1.jpg')} style={styles.navimg} />
                        <Text style={styles.navtext}>讲座</Text>
                    </View>
                    <View style={styles.navitem}>
                        <Image source={require('../../assets/p1.jpg')} style={styles.navimg} />
                        <Text style={styles.navtext}>讲座</Text>
                    </View>
                </View>
                <View style={styles.bannerpicwrapper}>
                  <View style={styles.leftbw}>
                      <Image source={require('../../assets/p1.jpg')} style={styles.lpic}/>
                  </View>
                  <View style={styles.rightbw}>
                      <Image source={require('../../assets/p2.jpg')} style={styles.rpic} />
                      <Image source={require('../../assets/p3.jpg')} style={styles.rpic} />
                  </View>
                </View>
                <DiscoverClassList />
                <View style={styles.othertipwrapper}>
                     <Image source={require('../../assets/p2.jpg')} style={styles.othertip} />
                      <Image source={require('../../assets/p2.jpg')} style={styles.othertip} />
                      <Image source={require('../../assets/p2.jpg')} style={styles.othertip} />
                      <Image source={require('../../assets/p2.jpg')} style={styles.othertip} />
                </View>
            </ScrollView>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(DiscoverIndex);