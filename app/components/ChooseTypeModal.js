import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  TouchableOpacity,
  Animated,
  Modal,
  InteractionManager,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../util/util';


const styles = StyleSheet.create({
    topcontainer: {
      flexDirection: 'row',
      height: 60,
      justifyContent: 'space-between',
      borderWidth: 0,
      borderStyle: 'solid',
      borderBottomWidth: 1 ,
    },
    selectstyle: {
      height: 60,
      width: Util.size.width/3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomarrow: {
      position: 'absolute',
      top: 20,
      right: 10,
    },
    chooseitem: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
    }
});

class ChooseTypeModal extends Component {
    constructor(props: any) {
        super(props);
    }

    goDetail() {
       const {router} = this.props;
       router.toDisscussDetail({});
    }
    openChooseType(num) {
        const heightAnim = this.props.modal.get('heightAnim');
        this.props.openDisCusModal();
        Animated.timing(         
            heightAnim,   
            {toValue: (40*num+10),
             duration: 300,},     
        ).start();  

    }
    closeChooseType() {
       
        console.log(arguments.length);
        const heightAnim = this.props.modal.get('heightAnim');
        
        InteractionManager.runAfterInteractions(() => {
             this.props.closeDisCusModal();
        });
        Animated.timing(          // Uses easing functions
            heightAnim,    // The value to drive
            {toValue: 0,
             duration: 100,},           // Configuration
        ).start();   
    }
    _closeModal(state) {

    }
    
    render() {
        const heightAnim = this.props.modal.get('heightAnim');
        const showchoosetype = this.props.modal.get('showchoosetype');
        return(
              <View style={styles.topcontainer}>
                <Modal animationType='none'
                       transparent={true}
                       onRequestClose={() => {this._closeModal(false)}}
                       visible={showchoosetype}>
                  <TouchableOpacity onPress={this.closeChooseType.bind(this)} activeOpacity={1}>
                  <View style={{backgroundColor: 'rgba(0,0,0,0.5)',width:Util.size.width,height:Util.size.height,marginTop:122}} ref="parent">
                    <Animated.View style={{width: Util.size.width,height: heightAnim,top:0,backgroundColor:'#fff',flexDirection: 'column',overflow:'hidden'}}>
                        <View style={[{width:Util.size.width,height:40,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,backgroundColor:'red',},styles.chooseitem]} ref="line" key="1">
                            <Text style={{textAlign:'center'}}>好好学习</Text>
                        </View>
                        <View style={[{width:Util.size.width,height:40,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,backgroundColor:'red',},styles.chooseitem]} ref="line" key="2">
                            <Text style={{textAlign:'center'}}>好好学习</Text>
                        </View>
                         <View style={[{width:Util.size.width,height:40,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,backgroundColor:'red',},styles.chooseitem]} ref="line" key="3">
                            <Text style={{textAlign:'center'}}>好好学习</Text>
                        </View>
                         <View style={[{width:Util.size.width,height:40,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,backgroundColor:'red',},styles.chooseitem]} ref="line" key="4">
                            <Text style={{textAlign:'center'}}>好好学习</Text>
                        </View>
                         <View style={[{width:Util.size.width,height:40,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,backgroundColor:'red',},styles.chooseitem]} ref="line" key="5">
                            <Text style={{textAlign:'center'}}>好好学习</Text>
                        </View>
                    </Animated.View>
                  </View>
                  </TouchableOpacity>
                </Modal>
                <TouchableOpacity onPress={this.openChooseType.bind(this,5)}>
                  <View style={styles.selectstyle}>
                    <Icon name="angle-down" size={20} color="#000" style={styles.bottomarrow} />
                    <Text>最新</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.openChooseType.bind(this,4)}>
                  <View style={styles.selectstyle}>
                    <Icon name="angle-down" size={20} color="#000" style={styles.bottomarrow} />
                    <Text>全年龄</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.openChooseType.bind(this,3)}>
                  <View style={styles.selectstyle}>
                    <Icon name="angle-down" size={20} color="#000" style={styles.bottomarrow} />
                    <Text>全部</Text>
                  </View>
                </TouchableOpacity>
            </View>
        )
    }
}


function mapStateToProps(state) {
  return {
    modal: state.get('modal'),
  };
}

export default connect(mapStateToProps)(ChooseTypeModal);