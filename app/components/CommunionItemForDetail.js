import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import Util from '../util/util';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  
    itemcontainer: {
      padding: 14,
      borderStyle: 'solid',
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: '#ccc',
      flexDirection: 'column',
    },
    topshow: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
    },
    rightpart: {
      width: 100,
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    leftpart: {
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    avartor: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden',
      marginRight: 8,
    },
    tagwrapper: {
       flexDirection: 'column',
      justifyContent: 'center',
    },
    uname: {
      fontSize: 13,
      marginBottom: 5,
    },
    time: {
      fontSize: 12,
      color: '#ccc',
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

class CommunionItemForDetail extends Component {

     componentWillMount() {
        const data = this.props.data;
        this.data = data;
        this.initcollectnum = data.collectnum;
        this.collectnum = data.collectnum;
        this.collect = false
        this.firstin = true;
        this.setState({ collectnum : this.collectnum});
        const userid = this.props.author.get('user').get('userid')||'';
        this.props.checkCommunionCollect({userid:userid,communionid:data.communionid});
    }
    toAddCommunionSub() {
      this.props.router.toAddCommunionSub({data:this.data});
    }
     constructor(props) {
      super(props);
      this.state = { collectnum : 0 , iscollect: false};
    }
    toCollect() {
        const userid = this.props.author.get('user').get('userid');
        if(typeof userid === 'undefined') {
          this.props.openLoginModal();
          return;
        }
       if(!this.collect) {
          this.collect = true;
          this.collectnum+=1;
          this.setState({ collectnum : this.collectnum, iscollect: true});
       }else {
          this.collect = false;
          this.collectnum -=1;
          this.setState({ collectnum : this.collectnum, iscollect: false});
       }
       
    }
    componentWillUnmount() {
       const userid = this.props.author.get('user').get('userid');
       if(typeof userid === 'undefined') {
  
          return;
       }
       if(this.initcollectnum > this.collectnum) { //取消收藏
        let params = {
            userid: userid,
            communionid: this.data.communionid
        };
        this.props.cancelCommunionCollect(params).then(data=> {
          this.props.updateFirstCommunionData({page:1,coursetype:'0'});
        });
        
      }
      if(this.initcollectnum < this.collectnum) { //添加收藏
        let params = {
            userid: userid,
            communionid: this.data.communionid
        };
        this.props.addCommunionCollect(params).then(data=>{
          this.props.updateFirstCommunionData({page:1,coursetype:'0'});
        });
        
      }
    }
    getCollectIconName() {
      let collecticon = 'heart-o';
      const hascollect = this.props.communion.get('hascollect');
      if(hascollect) { 
          if(this.firstin) {
              collecticon = 'heart';
              this.collect = true;
              this.firstin = false;
          } else {
              if(!this.collect){
                collecticon = 'heart-o';
              }else {
                collecticon = 'heart';
              }
              
          }
      } else {
          if(!this.collect){
             collecticon = 'heart-o';
          }else {
              collecticon = 'heart';
          }
      }
      return collecticon;
    }
    render() {
        let  data = this.props.data;
        let images = data.images ||'';
        let collecticon = this.getCollectIconName();
        let imglist = [];
        if(images !== '') {
            imglist = images.split(',');
        }
        let imgcomponents = [];
        for(let i=0;i<imglist.length;i++) {
            imgcomponents.push(<Image key={i} style={{width:40,height:40,marginRight:10}} source={{uri:imglist[i]}} />)
        } 
        const communionimg = imgcomponents.length ===0?null:<View style={styles.imgwrapper}>
                  {imgcomponents}
                </View>;
        return(
 
             <View style={styles.itemcontainer}>
                <View style={styles.topshow} >
                  <View style={styles.leftpart}>
                    <Image source={require('../../assets/p1.jpg')} style={styles.avartor} />
                    <View style={styles.tagwrapper}>
                      <Text style={styles.uname}>{data.username}</Text>
                      <Text style={styles.time}>{data.createtime}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.rightpart}>
                    <TouchableOpacity onPress={this.toAddCommunionSub.bind(this)}>
                        <Icon name="comment-o" size={20} color="#000"  />
                        <Text style={{marginRight: 20,}}>{data.componentnum}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toCollect.bind(this)}>
                          <Icon name={collecticon} size={20} color="#000"  />
                          <Text >{this.state.collectnum}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text>{data.content}</Text>
                </View>
                {communionimg}
             </View>
   
        )
    }
}


function mapStateToProps(state) {
  return {
    author: state.get('author'),
    communion: state.get('communion'),
  };
}

export default connect(mapStateToProps)(CommunionItemForDetail);