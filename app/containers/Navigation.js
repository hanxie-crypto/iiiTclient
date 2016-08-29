'use strict';


import React, {
    Component,
} from 'react';

import  {
  Navigator,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Router from '../routes/Router';
import routeNavigationBarMapper from '../routes/routeNavigationBarMapper';
import * as RouteId from '../constants/RouteId';   
import {is} from 'immutable';
import Storage from '../util/Storage';
const NAVIGATION = 'navigation';
class Navigation extends Component {
    constructor(props) {
        super(props)
        this.initialRoute = {
            name: 'iiiT',
            index: 0,
            component: Home,
            id: RouteId.HOME,
        }
    }
    componentWillMount() { //检测用户数据
        const that = this;
        /*Storage.getItem('user').then(data=>{
          console.log(data);
          if(data) {
              that.props.getUser(data);
          }
        })*/
        that.props.logOutSuccess();
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    navComplete(event) {
        /*let commentid = event.target.currentRoute.id;
        if(commentid === 'CLASSDETAIL') {
           this.props.loadTureNav();
        }else {
           this.props.loadFalseNav();
        }*/
    }
    componentDidMount() {
       //this.refs[NAVIGATION].navigationContext.addListener('didfocus', this.navComplete.bind(this))
    }
    renderScene(route, navigator) {
        if (route.component) {
            if(!this.router) { //修改成单例
              this.router = new Router(route,navigator);
            }
            
            const allobj = Object.assign({},this.props,{router: this.router});
            return React.createElement(route.component,{...allobj});
        }
    }


    configureScene(route) {
        return Navigator.SceneConfigs.FloatFromRight
    }


    render() {
        return (
            <Navigator
                ref = {NAVIGATION}
                initialRoute={this.initialRoute}
                configureScene={this.configureScene.bind(this)}
                renderScene={this.renderScene.bind(this)}
                navigationBar={<Navigator.NavigationBar style={{backgroundColor:'blue',}}
                routeMapper={routeNavigationBarMapper} />}
            />
        )
    }
}




function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(Navigation);

