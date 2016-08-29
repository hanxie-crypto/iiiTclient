import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  ActivityIndicatorIOS,
  ListView,
  InteractionManager,
} from 'react-native';

import { connect } from 'react-redux';
import Util from '../util/util';
import ListViewRefresh from './ListViewRefresh';
import FooterActive from './FooterActive';
import CommunionItemForDetail from './CommunionItemForDetail';
import CommunionItemSec from './CommunionItemSec';
import {is} from 'immutable';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 90,
      backgroundColor: 'white',
    },
    listcontainer: {
      flex: 1,
      marginTop: 5,
      flexDirection: 'column',
    },
    
});

class CommunionDetail extends Component {
    constructor(props: any) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.page = 1;

    }

    componentWillMount() {
      const userid = this.props.author.get('user').get('userid')|| '';

      const secondcommunionlistlength = this.props.communion.get('secondcommunionlist').size;
      const data = this.props.router.getData();
      this.data = data;
      this.communionid = data.communionid;
      InteractionManager.runAfterInteractions(() => {
        this.props.updateSecondCommunionData({page:this.page,communionid: this.communionid,userid:userid});
      });
    }
    componentWillUnmount() {
      this.props.cleanSecCommunionData();
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    renderRow(data) {

        return  <CommunionItemSec data={data} {...this.props} />
                
    }
    renderFooter() {
        return (
              <FooterActive/>
            )
    }
    getData() {
      this.page = 1;
      const userid = this.props.author.get('user').get('userid')|| '';
      this.props.updateSecondCommunionData({page:this.page,communionid:this.communionid,userid:userid});
    }
    onEndReached() {
      const total = this.props.communion.get('sectotal');
      const userid = this.props.author.get('user').get('userid')|| '';
      if(total>this.length){
         this.page +=1;
         this.props.fetchSecondCommunionData({page:this.page,communionid:this.communionid,userid:userid});
         return;
      }
    }
    render() {
        const data = this.data;
        const secondcommunionlist = this.props.communion.get('secondcommunionlist').toJS();
        this.length = secondcommunionlist.length;
        const sublist= (this.length === 0? null:<ListView 
                  style = {styles.listcontainer}
                  dataSource={this.ds.cloneWithRows(secondcommunionlist)}
                  scrollRenderAheadDistance={90}
                  onEndReachedThreshold = {90}
                  onEndReached = {this.onEndReached.bind(this)}
                  renderFooter={this.renderFooter.bind(this)}
                  refreshControl={
                    <ListViewRefresh onRefresh={this.getData.bind(this)}/>
                  }
                 renderRow={this.renderRow.bind(this)} /> );
        return(
            <View style={styles.container}>
                <CommunionItemForDetail data={data} {...this.props} />
                {sublist}
            </View>

        )
    }
}


function mapStateToProps(state) {
  return {
     communion: state.get('communion'),
     author: state.get('author'),
  };
}

export default connect(mapStateToProps)(CommunionDetail);