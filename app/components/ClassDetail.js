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
  Modal,
  InteractionManager,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {is} from 'immutable';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Util from '../util/util';
import ClassDetailTab from './ClassDetailTab';
import ClassAboutList from './ClassAboutList';
import ClassCommentList from './ClassCommentList';
import ClassVideo from './ClassVideo';
import PayComponent from './PayComponent'
import NavHeight from '../util/NavHeight';
let navheight = NavHeight.getHeight();
navheight = Platform.OS === 'ios'?(navheight+20):navheight;
const styles = StyleSheet.create({
  emptyPage: {
    flex: 1,
    paddingTop: navheight,
    flexDirection: 'column',
    backgroundColor: 'white',
    position: 'relative'
  },
  emptyPageText: {
    margin: 10,
  },
  wrapper: {
    height: 160,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paywrapper: {
    position: 'absolute',
    height: 300,
    width: Util.size.width,
    bottom: 0,
    backgroundColor: 'blue',
  }
});

const contentHeight = Util.size.height - 160;
class ClassDetail extends Component {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
        const that = this;
        InteractionManager.runAfterInteractions(() => {
              this.props.loadTureNav();
        });
    }
    componentWillUnmount() {
        this.props.loadFalseNav();
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    
    renderImg(data) {
      return <Image source={require('../../assets/p1.jpg')} style={{width: Util.size.width,height:160}} />;
    }
    renderVideo(data) {
      if(this.props.netinfo.get('iswifi') === true) {
        return  <ClassVideo autostart={true} videourl={data.videourl}/>;
      }else {
        return  <ClassVideo autostart={false} videourl={data.videourl}/>;
      }
      
    }
    renderPay(data) {
      return <View style={{position:'absolute',bottom:0,flex: 1,height:50,width:Util.size.width}}>
                          <PayComponent/>
                      </View>;
    }



    renderInner(data) {
        const navture = this.props.navui.get('navture');
        if(navture===true) {
          return <ScrollView >
                      <ClassDetailTab />
                      <ClassAboutList/>
                      <ClassCommentList/>
                  </ScrollView>
        }
        else {
          return  <ActivityIndicator
                    hidesWhenStopped={false}
                    size="large"
                    animating={true}
                    style={{marginTop: 60}}
                    />
        }
    }
    render() {
        const data = this.props.router.getData();
        const navture = this.props.navui.get('navture');
        const rendeInner = (navture === true)?this.renderVideo(data):this.renderImg(data);
        const renderPay = (navture === true)?this.renderPay(data):null;
        return (  <View style={styles.emptyPage}>
                      <View style={styles.wrapper}>
                          {rendeInner}
                      </View>
                      <View style={{height:50,overflow:'hidden'}}>
                        <ScrollableTabView style={{height: 0}}>
                          <View tabLabel="详情" style={{height:0}}>
                          </View>
                          <View tabLabel="相关" style={{height:0}}>
                          </View>
                          <View tabLabel="交流" style={{height:0}}>
                          </View>
                        </ScrollableTabView>
                      </View>
                      <View style={{flex: 1}}>
                        {this.renderInner()}
                      </View>
                      {renderPay}
                      
                  </View>
                )
    }
}

function mapStateToProps(state) {
  return {
      navui: state.get('navui'),
      netinfo: state.get('netinfo'),
  };
}

export default connect(mapStateToProps)(ClassDetail);
