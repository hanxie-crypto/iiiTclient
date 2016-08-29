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


class Communion extends Component {
  
  constructor(props: any) {
    super(props);
  }
  render() {
    const allobj = Object.assign({},this.props,{selectedType:RouteId.COMMUNION})
    return (
       <MainTabBar {...allobj} />
    );
  }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(Communion);