import React, {
    Component,
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';


import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
   itemcontainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 12,
      paddingBottom: 12,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      borderTopColor: '#ccc',
   },
   title: {
      fontSize: 15,
      color: 'black',
   },
   tip: {
      fontSize: 14,
      color: '#ccc',
   },
   rightcontainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 10,
   },
   thumbnail: {
      width: 82,
      height: 82,
   },
   tagline: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
   },
   hottag: {
      position: 'absolute',
      top: -4,
      right: 10,
      paddingTop: 6,
      width: 32,
      height: 32,
   },
   paytag: {
      position: 'absolute',
      top: -4,
      right: 40,
      paddingTop: 6,
      width: 32,
      height: 32,
   },
   tagfont: {
     fontSize: 10,
     textAlign: 'center',
     color: 'white',
     backgroundColor: 'transparent',

   }
});


class classItem extends Component {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
      this.router = this.props.router;
    }
    _onPressButton(data) {
        this.router.toClssDetail({data:data});
    }
    render() {
        const {data} = this.props;
        const paytext = data.needpay ===1?'付费':'免费';
        return ( <TouchableOpacity onPress={this._onPressButton.bind(this,data)} activeOpacity={0.5}>
                    <View style={styles.itemcontainer} id={data.courseid}>
                        <Image style={styles.thumbnail}
                            source={{uri: data.courseshowimg}}
                        />
                        <View style={styles.rightcontainer}>
                            <View style={{marginBottom: 5}}><Text style={styles.title}>{data.coursetitle}</Text></View>
                            <View style={{marginBottom: 5}}><Text style={styles.tip}>第{data.courseid}章</Text></View>
                            <View style={styles.tagline}>
                               <Icon name="eye" size={25} color="#900" style={{marginRight:10}}/>
                               <Text style={{marginRight:20,marginTop:5}}>{data.watchnum}</Text>
                               <Icon name="heart" size={25} color="#900" style={{marginRight:10}}/>
                               <Text style={{marginRight:20,marginTop:5}}>{data.collectnum}</Text>
                            </View>
                        </View>
                        <Image style={styles.hottag} source={require('../../assets/taghot.jpg')} >
                            <Text style={styles.tagfont}>hot</Text>
                        </Image>

                        <Image style={styles.paytag} source={require('../../assets/tagusual.jpg')} >
                            <Text style={styles.tagfont}>{paytext}</Text>
                        </Image>
                    </View>
                 </TouchableOpacity>
                )
    }
}

function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(classItem);
