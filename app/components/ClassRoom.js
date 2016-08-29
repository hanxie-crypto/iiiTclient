
import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text
} from 'react-native';


import { connect } from 'react-redux';

import ClassList from './ClassList';
import {is} from 'immutable';

const styles = StyleSheet.create({
});

class classRoom extends Component {
    constructor(props: any) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    render() {
        return ( 
                    <ClassList  {...this.props} />
                )
    }
}

function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(classRoom);