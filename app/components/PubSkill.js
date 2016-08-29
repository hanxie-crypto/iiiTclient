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

import Util from '../util/util';
import ImagePicker from './ImagePicker';
import SkillTagItem from './SkillTagItem';

const styles = StyleSheet.create({
      container: {
        height: Util.size.height,
        flexDirection: 'column',
        marginTop: 56,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ccc',

      },
      input: {
        marginTop: 10,
        height: 42,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 5,
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
         flexWrap: 'wrap',
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
      },
    
});

const SKILL_TITLE = 'SKILL_TITLE';
const SKILL_CONTENT = 'SKILL_CONTENT';
class PubSkill extends Component {
    constructor(props: any) {
        super(props);
        
    }
    componentWillMount() {
      this.props.cleanSkillImg();
    }
    addPic() {
       const addSkillImg = this.props.addSkillImg;
       ImagePicker
        .chooseAddPicType('upskillimg',{})
        .then(data => {addSkillImg(data.data)})
        .catch(err => {console.log(err)});
    }
    refreshSkillList() {
      this.props.updateSkillData({page:1,skilltypeid:'0'});
    }
    pubSkill() {
      const skilltypeid = this.props.skillinfo.get('nowskilltype').get('skilltypeid');
      if(!skilltypeid) {
          AlertIOS.alert('请选择技巧类型');
          return;
      }
      let title = this.refs[SKILL_TITLE].getText();
      let content = this.refs[SKILL_CONTENT].getText();
      let addskillimg = this.props.skillinfo.get('addskillimg').toJS();
      let templist =[];
      for(let i=0;i<addskillimg.length;i++) {
         templist.push(addskillimg[i].imgsrc);
      }
      templist = templist.join(',');
      let params = {
          title: title,
          content:content,
          skillimages: templist,
          skilltypeid: skilltypeid,
      }
      let navigator = this.props.router;
      this.props.addSkill(params)
        .then(data=> {
            navigator.pop();
            this.refreshSkillList();
        })
        .catch(err =>console.log(err))
    }
    toSkillType() {
       this.props.router.toSkillType();
    }
    render() {
      const addskillimg = this.props.skillinfo.get('addskillimg').toJS();
      let skillimgcomponents = [];
      for(let i=0;i<addskillimg.length;i++) {
        let img = <Image key={addskillimg[i].imgid}  source={{uri:addskillimg[i].imgsrc}} style={styles.img}/>;
        skillimgcomponents.push(img);

      }
      const nowskilltype = this.props.skillinfo.get('nowskilltype');
  
      return(
          <ScrollView style={styles.container}>
              <TouchableOpacity onPress={this.toSkillType.bind(this)}>
                  <View style={styles.tagitem}>
                      <Text>技巧类型</Text>
                      <View style={styles.textcontent}>
                          <Text>{nowskilltype.get('skilltype')}</Text>
                          <Icon name="chevron-right" size={20} color="#000"  style={{position:'absolute',right:10}}/>
                      </View>
                  </View>
              </TouchableOpacity>
                <SkillTagItem tag="标题" ref={SKILL_TITLE} maxLength={20} height={40}/>
                <SkillTagItem tag="介绍" ref={SKILL_CONTENT} maxLength={320} height={200}/>
              <View style={styles.showup}>
                  <TouchableOpacity onPress={this.addPic.bind(this)}>
                    <View style={styles.uptop}>
                       <Text>上传图片</Text>
                       <Icon name="plus-circle" size={20} color="#000"  />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.upbottom}>
                      {skillimgcomponents}
                  </View>
              </View>
              <TouchableOpacity onPress={this.pubSkill.bind(this)}>
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
     skillinfo : state.get('skillinfo'),
  };
}

export default connect(mapStateToProps)(PubSkill);