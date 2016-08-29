'use strict';


import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  ListView,
  Modal,
  StatusBar,
  Platform,
} from 'react-native';


import { connect } from 'react-redux';



import * as RouteId from '../constants/RouteId'; 
import ClassRoom from './ClassRoom';
import CommunionIndex from './CommunionIndex';
import SkillIndex from './SkillIndex';
import DiscoverIndex from './DiscoverIndex';
import MineIndex from './MineIndex';
import TabBar from './TabBar';
import Login from './Login';
import Util from '../util/util';
import {is} from 'immutable';

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
import NavHeight from '../util/NavHeight';
let navheight = NavHeight.getHeight();
navheight = Platform.OS === 'ios'?(navheight+20):navheight;
const styles = StyleSheet.create({
  container: {
    marginTop: navheight,
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});

class MainTabBar extends Component {
  
  constructor(props: any) {
    super(props);
    
  }
  shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
  }
  _tabNav(type){
     if(this.selectedType === type) {
        return;
     }
     this.props.router.changeContainer(type);
  }
  _closeModal(state) {

  }
  render() {
    const {selectedType,...otherprops} = this.props;
    const bw = Util.size.width/5/2;
    this.selectedType = selectedType;
    return (
      <View style={{flex:1}}>

          <StatusBar
              hidden={false}
            />
           <Modal      animationType='slide'
                       transparent={false}
                       onRequestClose={() => {this._closeModal(false)}}
                       visible={this.props.author.get('isopenlogin')}>
                 <Login {...otherprops} />
           </Modal>
           <TabBar
            tintColor="white"
            barTintColor="darkslateblue">
             <TabBar.Item
              title="交流"
              style={{backgroundColor: '#f3f3f3'}}
              selectedStyle={{backgroundColor:'black',borderRadius: 5}}
              selected={this.selectedType == RouteId.COMMUNION}
              onPress={this._tabNav.bind(this,RouteId.COMMUNION)}>
              <View style={styles.container}>
                <CommunionIndex {...otherprops}/>
              </View>
            </TabBar.Item>
            <TabBar.Item
              title="技巧"
              style={{backgroundColor: '#f3f3f3'}}
              selectedStyle={{backgroundColor:'black',borderRadius: 5}}
              selected={this.selectedType == RouteId.SKILL}
              selectedIcon={require('../../assets/taghot.jpg')}
              icon={require('../../assets/tagusual.jpg')}
              onPress={this._tabNav.bind(this,RouteId.SKILL)}>
              <View style={styles.container}>
                  <SkillIndex {...otherprops}/>
              </View>
            </TabBar.Item>
             <TabBar.Item
              title = "课堂"
              selectedStyle={{borderStyle:'solid',borderWidth:1,borderColor:'red',borderRadius:bw,backgroundColor:'blue'}}
              style = {{borderStyle:'solid',borderWidth:1,borderColor:'red',borderRadius:bw,backgroundColor:'#f3f3f3'}}
              selectedIcon={{uri: base64Icon, scale: 3,}}
              icon={{uri: base64Icon, scale: 3}}
              selected={this.selectedType == RouteId.HOME}
              onPress={this._tabNav.bind(this,RouteId.HOME)}>
              <View style={styles.container}>
                <StatusBar hidden={false} barStyle="light-content"/>
                <ClassRoom {...otherprops}/>
              </View>
            </TabBar.Item>
             <TabBar.Item
              title="发现"
              style={{backgroundColor: '#f3f3f3'}}
              selectedStyle={{backgroundColor:'black',borderRadius: 5}}
              selected={this.selectedType == RouteId.DISCOVER}
              onPress={this._tabNav.bind(this,RouteId.DISCOVER)}>
              <View style={styles.container}>
                <DiscoverIndex {...otherprops}/>
              </View>
            </TabBar.Item>
            <TabBar.Item
              title="我的"
              style={{backgroundColor: '#f3f3f3'}}
              selectedStyle={{backgroundColor:'black',borderRadius: 5}}
              selected={this.selectedType == RouteId.MINE}
              onPress={this._tabNav.bind(this,RouteId.MINE)}>
              <View style={styles.container}>
                <MineIndex  {...otherprops}/>
              </View>
            </TabBar.Item>
          </TabBar>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
      author: state.get('author'),
  };
}

export default connect(mapStateToProps)(MainTabBar);