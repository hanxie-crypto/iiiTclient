import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';
import {is} from 'immutable';
import { connect } from 'react-redux';
import Util from '../util/util';
import SkillItem from './SkillItem';
import ListViewRefresh from './ListViewRefresh';
import FooterActive from './FooterActive';
const styles = StyleSheet.create({
    listcontainer: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 20,
   },
    discusswrapper: {
      paddingLeft: 10,
      paddingRight: 10,
    },
});

class SkillList extends Component {
    constructor(props: any) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.page = 1;
    }

    

    componentWillMount() {
      const skilllistlength = this.props.skillinfo.get('skilllist').size;
      if(skilllistlength === 0) {
          this.props.updateSkillData({page:this.page,skilltypeid:'0'});
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    renderRow(rowData) {
        return  <SkillItem data={rowData} {...this.props}/>;
            
    }
    renderFooter() {
        return (
              <FooterActive/>
            )
    }
    
    getData() {
      this.page = 1;
      this.props.updateSkillData({page:this.page,skilltypeid:'0'});
    }
    onEndReached() {

      const total = this.props.skillinfo.get('total');
      if(total>this.length){
         this.page +=1;
         this.props.fetchSkillData({page:this.page,skilltypeid:'0'});
         return;
      }
    }
    
    render() {
        const skilllist = this.props.skillinfo.get('skilllist').toJS();
        this.length = skilllist.length;
        return (this.length === 0? null:<ListView 
                  style = {styles.listcontainer}
                  dataSource={this.ds.cloneWithRows(skilllist)}
                  scrollRenderAheadDistance={90}
                  onEndReachedThreshold = {90}
                  onEndReached = {this.onEndReached.bind(this)}
                  renderFooter={this.renderFooter.bind(this)}
                  refreshControl={
                    <ListViewRefresh onRefresh={this.getData.bind(this)}/>
                  }
                 renderRow={this.renderRow.bind(this)} /> )
    }

}


function mapStateToProps(state) {
  return {
      skillinfo: state.get('skillinfo'),
  };
}

export default connect(mapStateToProps)(SkillList);