
import React, {
    Component,
    
} from 'react';

import  {
   ActivityIndicator,
   View,
} from 'react-native';


import { connect } from 'react-redux';

import {is} from 'immutable';



class FooterActive extends Component {
    constructor(props: any) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    render() {
        const bottomLoading = this.props.loading.get('bottomLoading');
        const result = bottomLoading === true? <ActivityIndicator
                  hidesWhenStopped={false}
                  size="large"
                  animating={true}
                  />:null;
        return (result);
    }
}

function mapStateToProps(state) {
  return {
    loading: state.get('loading'),
  };
}

export default connect(mapStateToProps)(FooterActive);