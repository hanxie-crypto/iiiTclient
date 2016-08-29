import React, {
    Component,
} from 'react';
import  {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,} 
from 'react-native';

import { connect } from 'react-redux';
import Util from '../util/util';
import Icon from 'react-native-vector-icons/FontAwesome';
import Storage from '../util/Storage';
import * as RouteId from '../constants/RouteId';
const styles = StyleSheet.create({

    logincontainer: {
        backgroundColor: '#fff',
        width: Util.size.width,
        height: Util.size.height-50,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 40,
    },
    inputwrapper: {
      width: Util.size.width,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    inputview: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom: 20,
        alignSelf: 'center',
        
    },
    input: {
        height: 40,
        width: Util.size.width-40,
        paddingLeft: 10,
    },
    tips: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: Util.size.width,
        height: 80,
        paddingLeft: 30,
        paddingRight: 30,
    },
    vcodewrapper: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom: 20,
        alignSelf: 'center',
        width: Util.size.width-40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    vcode: {
        width: Util.size.width-120,
        paddingLeft: 10,
    },
    vcodebtn: {
        width: 80,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipunit: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
    },
    loginbtn: {
        width:  Util.size.width-80,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

class Login extends Component {
    constructor(props: any) {
        super(props);
        this.useraccount= '';
        this.password = '';
        this.vcode = '';
        this.systemvcode = '';
    }
    sendVcode() {
        const that = this;
        if(this.useraccount === '') {
          Alert.alert('请输入手机号');
          return;
        }
        this.props.sendVcode({useraccount:this.useraccount})
        .then(data=>{
           data = JSON.parse(data);
           that.systemvcode = data.validatecode;
        })
        .catch(err => console.log(err))
    }
    changeUserAccount(text) {
      this.useraccount = text;
    }
    changePwd(text) {
      this.password = text;
    }
    changeVcode(text) {
      this.vcode = text;
    }
    loginSuccessCallBack(routeid,data) {
      const allactions = this.props;
      switch(routeid) {
        case RouteId.COMMUNIONDETAIL:
            const params = {
                communionid: data.communionid,
                userid: data.userid,
                page: 1,
            }
            allactions.updateSecondCommunionData(params);
            allactions.checkCommunionCollect(params);
        break;
        default:
        break;
      }
    }
    goLogin() {
        const that = this;
        if(this.systemvcode !== this.vcode) {
          Alert.alert('请输入正确的验证码');
          return;
        }
        const params = {
            useraccount : this.useraccount,
            userpwd: this.password,
            vcode: this.vcode,
        }
        this.props.login(params).then(_data => {
                let resultdata = JSON.parse(_data);
                console.log(resultdata);
                if (resultdata.status === true) {
                    let routesList = that.props.router.getNavigator().getCurrentRoutes();
                    let nowRoute = routesList[routesList.length - 1];
                    let userdata = resultdata.data
                    Storage.setItem('user', userdata);
                    let routdata = {};
                    if(nowRoute.props) {
                        routdata = nowRoute.props.data||{};
                    }
                    const data = Object.assign({},routdata,{userid:userdata.userid})
                    that.loginSuccessCallBack(nowRoute.id,data);
                    that.props.loginSuccess(userdata);
                  }else {
                    Alert.alert('账号密码错误') ;
                  }
            }).catch(err => {
                console.log(err);
            });
    }
    render() {

      return (
         <View style={styles.logincontainer}>
            <Image style={styles.logo}/>
            <View style={styles.inputwrapper}>
                <View  style={styles.inputview}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder="请输入账号"
                        style={styles.input} onChangeText={this.changeUserAccount.bind(this)}/>
                </View>
                <View  style={styles.inputview}>
                    <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="请输入密码"
                    style={styles.input} onChangeText={this.changePwd.bind(this)} secureTextEntry={true}/>
                </View>
                <View  style={styles.vcodewrapper} >
                  <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.vcode} placeholder="验证码" onChangeText={this.changeVcode.bind(this)}/>
                  <TouchableOpacity onPress={this.sendVcode.bind(this)}>
                      <View style={styles.vcodebtn}>
                          <Text>发送验证码</Text>
                      </View>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tips}>
                <View style={styles.tipunit}>
                    <Icon name="arrow-circle-right" size={20} color="#000"  />
                    <Text>快速注册</Text>
                </View>
                <View style={styles.tipunit}>
                    <Icon name="question-circle" size={20} color="#000" style={styles.bottomarrow} />
                    <Text>忘记密码</Text>
                </View>
            </View>
            <TouchableOpacity onPress={this.goLogin.bind(this)}>
                <View style={styles.loginbtn}>
                    <Text style={{color: 'white',textAlign:'center',}}>登录</Text>
                </View>
            </TouchableOpacity>
        </View>   
      ) 
    }




}

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(Login);