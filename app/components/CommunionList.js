import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {is} from 'immutable';


import CommunionItem from './CommunionItem';
import ListViewRefresh from './ListViewRefresh';
import FooterActive from './FooterActive';
const styles = StyleSheet.create({
   listcontainer: {
      flex: 1,
      flexDirection: 'column',
   },
   updateLoading: {
      
   }
});
class CommunionList extends Component {
    constructor(props: any) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.page = 1;

    }

    componentWillMount() {
      const firstcommunionlistlength = this.props.communion.get('firstcommunionlist').size;
      if(firstcommunionlistlength === 0) {
          this.props.updateFirstCommunionData({page:this.page,coursetype:'0'});
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    goDetail(data) {
       const {router} = this.props;
       router.toCommunionDetail({data:data});
    }
    renderRow(data) {
        return  <TouchableOpacity onPress={this.goDetail.bind(this,data)}>
                  <CommunionItem data={data} />
                </TouchableOpacity>;
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
      this.props.updateFirstCommunionData({page:this.page,coursetype:'0'});
    }
    onEndReached() {
      const total = this.props.communion.get('total');
      if(total>this.length){
         this.page +=1;
         this.props.fetchFirstCommunionData({page:this.page,coursetype:'0'});
         return;
      }
    }
    render() {
       
        const firstcommunionlist = this.props.communion.get('firstcommunionlist').toJS();
        this.length = firstcommunionlist.length;
        return (this.length === 0? null:<ListView 
                  style = {styles.listcontainer}
                  dataSource={this.ds.cloneWithRows(firstcommunionlist)}
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
     communion: state.get('communion'),
  };
}

export default connect(mapStateToProps)(CommunionList);