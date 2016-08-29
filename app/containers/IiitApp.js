'use strict';
import React, {
    Component,
} from 'react';

import  {
  NetInfo,
  View,
  Text,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import * as allactions from '../actions';
import {is} from 'immutable';

class IiitApp extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const that = this;
    NetInfo.fetch().done((reach) => {
         if(reach === 'wifi') {
            that.props.dispatch(allactions.wifiState());//检测网络状态是否为wifi
         }
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
   }
  render() {
    const {dispatch} = this.props;
    return (
        <Navigation {...bindActionCreators(allactions,dispatch)} />
    );
  }
}




function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(IiitApp);

