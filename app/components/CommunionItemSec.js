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
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: '#ccc',
      borderTopColor: '#ccc',
      flexDirection: 'column',
      marginBottom: 10,
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

class CommunionItemSec extends Component {

    constructor(props) {
      super(props);
      this.state = { praisenum : 0 };
      this.firstin = true;
    }

    componentWillMount() {
      const data = this.props.data;
      this.initpraisenum = data.praisenum;
      this.praisenum = data.praisenum;
      this.praise = false; 
     
      this.setState({ praisenum : this.praisenum});
    }
    componentWillUnmount() {
      const userid = this.props.author.get('user').get('userid')
       if(typeof userid === 'undefined') {
          return;
       }
      if(this.initpraisenum > this.praisenum) { //取消赞
        let params = {
            userid: userid,
            communionid: this.props.data.communionid
        };
        this.props.cancelCommunionPraise(params);
      }
      if(this.initpraisenum < this.praisenum) { //添加赞
        let params = {
            userid: userid,
            communionid: this.props.data.communionid
        };
        this.props.addCommunionPraise(params);
      }
    }
    toPraise() {
       const userid = this.props.author.get('user').get('userid')
       if(typeof userid === 'undefined') {
          this.props.openLoginModal();
          return;
       }
       if(!this.praise) {
          this.praise = true;
          this.praisenum+=1;
          this.setState({ praisenum : this.praisenum});
       }else {
          this.praise = false;
          this.praisenum -=1;
          this.setState({ praisenum : this.praisenum});
       }
       
    }
    getPrasieIconName(_praiseuserid) {
      let praiseicon = 'thumbs-o-up';
      const userid = this.props.author.get('user').get('userid');
      if(_praiseuserid === userid) { 
          if(this.firstin) { //如果对比发现点过赞，并且没有主动
              praiseicon = 'thumbs-up';
              this.praise = true;
              this.firstin = false;
          } else {
              if(!this.praise){
                praiseicon = 'thumbs-o-up';
              }else {
                praiseicon = 'thumbs-up';
              }
              
          }
      } else {
          if(!this.praise){
             praiseicon = 'thumbs-o-up';
          }else {
              praiseicon = 'thumbs-up';
          }
      }
      return praiseicon;
    }
    render() {
        const data = this.props.data;
        let praiseiconname = this.getPrasieIconName(data.praiseuserid);
        let images = data.images ||'';
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
                  <TouchableOpacity onPress={this.toPraise.bind(this)}>
                         <View style={styles.rightpart}>
                            <Icon name={praiseiconname} size={20} color="#000"  />
                            <Text>{this.state.praisenum}</Text>
                         </View>
                   </TouchableOpacity>
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
  };
}

export default connect(mapStateToProps)(CommunionItemSec);