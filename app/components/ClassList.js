import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import {is} from 'immutable';


import ClassItem from './ClassItem';
import ListViewRefresh from './ListViewRefresh';
import FooterActive from './FooterActive';
const styles = StyleSheet.create({
   listcontainer: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 20,
   },
   updateLoading: {
      
   }
});
class classList extends Component {
    constructor(props: any) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.page = 1;

    }

    componentWillMount() {
      const classlistlength = this.props.classinfo.get('classlist').size;
      if(classlistlength === 0) {
          this.props.updateClassData({page:this.page,coursetype:'0'});
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    renderRow(rowData) {
        return <ClassItem data={rowData} {...this.props}/>;
    }
    renderFooter() {
        return (
              <FooterActive/>
            )
    }
    onScroll(e) {
        //this.props.beginLoading('update');
        if (e.nativeEvent.contentOffset.y < -90) {
            //this.props.fetchClassData('update');
        }else {
            //this.props.endLoading();
        }
    }
    getData() {
      this.page = 1;
      this.props.updateClassData({page:this.page,coursetype:'0'});
    }
    onEndReached() {
      const total = this.props.classinfo.get('total');
      if(total>this.length){
         this.page +=1;
         this.props.fetchClassData({page:this.page,coursetype:'0'});
         return;
      }
    }
    
    render() {
       
        const classlist = this.props.classinfo.get('classlist').toJS();
        this.length = classlist.length;
        return (this.length === 0? null:<ListView 
                  style = {styles.listcontainer}
                  dataSource={this.ds.cloneWithRows(classlist)}
                  scrollRenderAheadDistance={90}
                  onEndReachedThreshold = {90}
                  onEndReached = {this.onEndReached.bind(this)}
                  renderFooter={this.renderFooter.bind(this)}
                  renderRow={this.renderRow.bind(this)} 
                  refreshControl={
                    <ListViewRefresh onRefresh={this.getData.bind(this)}/>
                  }
                 /> )
    }
}
function mapStateToProps(state) {
  return {
     classinfo: state.get('classinfo'),
  };
}

export default connect(mapStateToProps)(classList);