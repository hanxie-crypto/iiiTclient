
import React, {
    Component,
} from 'react';

import  {
   RefreshControl,
   Platform,
} from 'react-native';


import { connect } from 'react-redux';

import {is} from 'immutable';



class ListViewRefresh extends Component {
    constructor(props: any) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    render() {
        const isRefreshLoading = this.props.loading.get('topLoading');
        const {onRefresh,...otherFunc} = this.props;
        return ( 
                Platform.OS ==='ios'?
                  <RefreshControl
                    enabled={true}
                    progressViewOffset={40}
                    refreshing={isRefreshLoading}
                    onRefresh={this.props.onRefresh}
                  />:<RefreshControl
                    enabled={true}
                    progressViewOffset={40}
                    refreshing={isRefreshLoading}
                    onRefresh={onRefresh}
                    {...otherFunc}
                    >{this.props.children}</RefreshControl>
                )
    }
}

function mapStateToProps(state) {
  return {
    loading: state.get('loading'),
  };
}

export default connect(mapStateToProps)(ListViewRefresh);