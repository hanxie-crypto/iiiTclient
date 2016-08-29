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
import ClassDetailTab from './ClassDetailTab';
import ClassAboutList from './ClassAboutList';
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
  },
  tabcontainer: {
    width: Util.size.width,
    position: 'relative',
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
  },
  tag: {
    width: 70,
    height: 24,
    padding: 10,
    backgroundColor: '#808080',
    flexDirection: 'column',
    justifyContent: 'center',

    },
  tagtext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
  content: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  contentword: {
    fontSize: 12,
    marginBottom: 2,
   },
  imgwrapper: {
      width: Util.size.width,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      flexWrap: 'wrap',
   },
});

const contentHeight = Util.size.height;
class SkillDetail extends Component {
    constructor(props: any) {
        super(props);
    }
 
    render() {
   
        const data = this.props.router.getData();
        const skillimages = data.skillimages ||'';
        const imglist = skillimages.split(',');
        const imgcomponents = [];
        for(let i=0;i<imglist.length;i++) {
            imgcomponents.push(<Image key={i} style={{width:40,height:40}} source={{uri:imglist[i]}} />)
        } 
        return (  <View style={styles.emptyPage}>
                    <ScrollView style={{paddingBottom: 10,height: contentHeight}}>
                        <View style={styles.tabcontainer}>
                             <View style={styles.tag}>
                                <Text style={styles.tagtext}>技巧标题</Text>
                              </View>
                              <View style={styles.content} >
                                <Text style={styles.contentword}>{data.title}</Text>
                              </View>
                            </View>
                            <View style={styles.tabcontainer}>
                            <View style={styles.tag}>
                                <Text style={styles.tagtext}>技巧内容</Text>
                            </View>
                            <View style={styles.content} >
                                <Text style={styles.contentword}>{data.content}</Text>
                            </View>
                            <View style={styles.imgwrapper}>
                                {imgcomponents}
                            </View>
                        </View>
                    </ScrollView>
                  </View>
                )
    }
}

function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(SkillDetail);
