import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  AlertIOS,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from './ImagePicker';
import Util from '../util/util';



const styles = StyleSheet.create({
      container: {
        height: Util.size.height,
        flexDirection: 'column',
        marginTop: 56,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ccc',

      },
      titleinput: {
        marginTop: 10,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingLeft: 10,
      },
      input: {
        marginTop: 10,
        height: 152,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingLeft: 10,
      },
      showup: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
      },
      upbottom: {
         width: Util.size.width,
         flexDirection: 'row',
         justifyContent: 'flex-start',
         alignItems: 'center',
         padding: 10,
      },
      uptop: {
         padding: 10,
         width: Util.size.width,
         flexDirection: 'row',
         justifyContent: 'space-between',
         flexWrap: 'wrap',
      },
      img: {
        width: 80,
        height: 80,
        marginRight: 10,
        marginBottom: 10,
      },
      tagitem: {
        width: Util.size.width,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
      },
      pubbtn: {
        width: Util.size.width,
        height: 60,
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textcontent: {
        width: 60,
        flexDirection: 'row',
        alignItems: 'center',
      }
    
});
const COMMUNION_TITLE = 'COMMUNION_TITLE';
const COMMUNION_CONTENT = 'COMMUNION_CONTENT';
class PubCommunion extends Component {
    constructor(props: any) {
        super(props);
        this.title = '';
        this.content = '';
    }
    componentWillMount() {
      this.props.cleanCommunionImg();
    }
    refreshCommunionList() {
      this.props.updateFirstCommunionData({page:1,coursetype:'0'});
    }
    addPic() {
       const addCommunionImg = this.props.addCommunionImg;
       ImagePicker
        .chooseAddPicType('upcommunionimg',{})
        .then(data => {addCommunionImg(data.data)})
        .catch(err => {console.log(err)});
    }
    toCommunionType() {
      this.props.router.toCommunionType();
    }
    pubCommunion() {
      const userid = this.props.author.get('user').get('userid');
      if(typeof userid === 'undefined') {
        this.props.openLoginModal();
        return;
      }
      const communiontypeid = this.props.communion.get('nowcommuniontype').get('communiontypeid');
      if(!communiontypeid) {
          AlertIOS.alert('请选择技巧类型');
          return;
      }
      let title = this.title;
      let content = this.content;
      let addcommunionimg = this.props.communion.get('addcommunionimg').toJS();
      let templist =[];
      for(let i=0;i<addcommunionimg.length;i++) {
         templist.push(addcommunionimg[i].imgsrc);
      }
      templist = templist.join(',');
      let params = {
          title: title,
          content:content,
          images: templist,
          communiontypeid: communiontypeid,
          userid: 1,
      }
      let navigator = this.props.router;
      this.props.addCommunion(params)
        .then(data=> {
            navigator.pop();
            this.refreshCommunionList();
        })
        .catch(err =>console.log(err))
    }
    changeTitle(text) {
      this.title = text;
    }
    changeContent(text) {
      this.content = text;
    }
    render() {
      const addcommunionimg = this.props.communion.get('addcommunionimg').toJS();
      let communionimgcomponents = [];
      for(let i=0;i<addcommunionimg.length;i++) {
        let img = <Image key={addcommunionimg[i].imgid} source={{uri:addcommunionimg[i].imgsrc}} style={styles.img}/>;
        communionimgcomponents.push(img);

      }
        const nowcommuniontype = this.props.communion.get('nowcommuniontype');
        return(
          <ScrollView style={styles.container}>
              <TouchableOpacity onPress={this.toCommunionType.bind(this)}>
                 <View style={styles.tagitem}>
                    <Text>交流类型</Text>
                    <View style={styles.textcontent}>
                        <Text>{nowcommuniontype.get('communiontype')}</Text>
                        <Icon name="chevron-right" size={20} color="#000"  style={{position:'absolute',right:10}} />
                    </View>
                </View>
              </TouchableOpacity>
              <View style={{padding: 10}}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.titleinput}
                    placeholder="请输入标题"
                    ref= {COMMUNION_TITLE}
                    onChangeText = {this.changeTitle.bind(this)}
                />
                </View>
                <View style={{padding: 10}}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    multiline= {true}
                    placeholder="请输入内容"
                    ref={COMMUNION_CONTENT}
                    onChangeText = {this.changeContent.bind(this)}
                />
              </View>
             
              <View style={styles.showup}>
                  <TouchableOpacity onPress={this.addPic.bind(this)}>
                      <View style={styles.uptop}>
                         <Text>上传图片</Text>
                         <Icon name="plus-circle" size={20} color="#000"  />
                      </View>
                  </TouchableOpacity>
                  <View style={styles.upbottom}>
                     {communionimgcomponents}
                  </View>
              </View>
              <View style={styles.tagitem}>
                  <Text>标签</Text>
                  <View style={styles.textcontent}>
                      <Text>3岁</Text>
                      <Icon name="chevron-right" size={20} color="#000"  />
                  </View>
              </View>
              <TouchableOpacity onPress={this.pubCommunion.bind(this)}>
                <View style={styles.pubbtn}>
                    <Text style={{color:'white'}}>发布</Text>
                </View>
              </TouchableOpacity>
          </ScrollView>

        )
    }
}


function mapStateToProps(state) {
  return {
    communion: state.get('communion'),
    author: state.get('author'),
  };
}

export default connect(mapStateToProps)(PubCommunion);