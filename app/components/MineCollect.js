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
} from 'react-native';

import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ClassList from './ClassList';
import SkillList from './SkillList';
import ClassCommentList from './ClassCommentList';
import Util from '../util/util';

const styles = StyleSheet.create({
  emptyPage: {
    paddingTop: 56,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  emptyPageText: {
    margin: 10,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

const contentHeight = Util.size.height;
class MineCollect extends Component {
    constructor(props: any) {
        super(props);
    }
 
    render() {
       
  
        return (  <View style={styles.emptyPage}>
                    <ScrollView style={{paddingBottom: 10,height: contentHeight}}>
                      <ScrollableTabView style={{height: contentHeight}}>
                        <ScrollView tabLabel="课程" style={{paddingBottom: 10,}} >
                          <ClassList {...this.props} />
                        </ScrollView>
                        <View tabLabel="技巧" style={{flex:1,}}>
                          <SkillList />
                        </View>
                        <View tabLabel="问题" style={{flex:1,}}>
                          <ClassCommentList />
                        </View>
                      </ScrollableTabView>
                    </ScrollView>
                  </View>
                )
    }
}

function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineCollect);
