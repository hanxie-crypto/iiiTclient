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
import CommunionTypeItem from './CommunionTypeItem';
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

class CommunionTypeList extends Component {
    constructor(props: any) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.scrolllength = 0;
    }

    

    componentWillMount() {
      const communiontypelistlength = this.props.communion.get('communiontypelist').size;
      if(this.scrolllength !== communiontypelistlength || communiontypelistlength === 0) {
          this.scrolllength = communiontypelistlength;
          this.props.updateCommunionTypeData();
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
    }
    renderRow(rowData) {
        return  <CommunionTypeItem data={rowData} {...this.props}/>;
            
    }
    
    
    getData() {
      this.props.updateCommunionTypeData();
    }
   
    render() {
        const communiontypelist = this.props.communion.get('communiontypelist').toJS();
        this.length = communiontypelist.length;
        return (this.length === 0? null:<ListView 
                  style = {styles.listcontainer}
                  dataSource={this.ds.cloneWithRows(communiontypelist)}
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
      communion: state.get('communion'),
  };
}

export default connect(mapStateToProps)(CommunionTypeList);