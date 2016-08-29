import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Util from '../util/util';
import MineItem from './MineItem';


const styles = StyleSheet.create({
     
      container: {
          flex: 1,
      },

});

class MineList extends Component {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
      this.router = this.props.router;
    }
    toMinePubPage() {
       this.router.toMinePubPage();
    }
    toMineCollect() {
      this.router.toMineCollect();
    }
    toMineBoughtClass() {
      this.router.toMineBoughtClass();
    }
    toMineInfo() {
      this.router.toMineInfo();
    }
    render() {
        return(
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={this.toMinePubPage.bind(this)}>
                  <MineItem lab="我的提问"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMinePubPage.bind(this)}>
                  <MineItem lab="我的回答"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMinePubPage.bind(this)}>
                  <MineItem lab="我发布的技巧"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMineCollect.bind(this)}>
                  <MineItem lab="我的收藏/我的关注"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMineBoughtClass.bind(this)}>
                  <MineItem lab="我购买的课程"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMineInfo.bind(this)}>
                 <MineItem lab="我的消息"/>
                </TouchableOpacity>
            </ScrollView>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineList);