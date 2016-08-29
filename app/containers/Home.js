'use strict';


import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';

import { connect } from 'react-redux';
import * as RouteId from '../constants/RouteId'; 
import MainTabBar from '../components/MainTabBar';
import {is} from 'immutable';

class Home extends Component {
  
  constructor(props: any) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
  }
  render() {
    const allobj = Object.assign({},this.props,{selectedType:RouteId.HOME})
    return (
       <MainTabBar {...allobj} />
    );
  }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(Home);