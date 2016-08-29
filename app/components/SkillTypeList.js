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
import SkillTypeItem from './SkillTypeItem';
import ListViewRefresh from './ListViewRefresh';
import FooterActive from './FooterActive';
const styles = StyleSheet.create({
    listcontainer: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 20,
      marginTop: 62,
      backgroundColor: '#fff',
   },
    discusswrapper: {
      paddingLeft: 10,
      paddingRight: 10,
    },
});

class SkillTypeList extends Component {
    constructor(props: any) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.scrolllength = 0;
    }

    

    componentWillMount() {
      const skilltypelistlength = this.props.skillinfo.get('skilltypelist').size;
      if(this.scrolllength !== skilltypelistlength || skilltypelistlength === 0) {
          this.scrolllength = skilltypelistlength;
          this.props.updateSkillTypeData();
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    renderRow(rowData) {
        return  <SkillTypeItem data={rowData} {...this.props}/>;
            
    }
    
    
    getData() {
      this.props.updateSkillTypeData();
    }
   
    render() {
        const skilltypelist = this.props.skillinfo.get('skilltypelist').toJS();
        this.length = skilltypelist.length;
        return (this.length === 0? null:<ListView 
                  style = {styles.listcontainer}
                  dataSource={this.ds.cloneWithRows(skilltypelist)}
                  scrollRenderAheadDistance={90}
                  onEndReachedThreshold = {90}
                 
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

export default connect(mapStateToProps)(SkillTypeList);