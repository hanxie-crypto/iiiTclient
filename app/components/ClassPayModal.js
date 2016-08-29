import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';



import Util from '../util/util';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paywrapper: {
    position: 'absolute',
    height: 200,
    width: Util.size.width,
    bottom: 50,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class classPayModal extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false,
            transparent: true,
            animated: true,
        }
    }
    
    openModal() {
      this.setState({
        visible: true
      })
    }
    closeModal() {
       this.setState({
        visible: false
      })
    }
    render() {
        const {visible,transparent,animated} = this.state;
        return (  
                 <Modal
                    animationType='slide'
                    transparent={transparent}
                    visible={visible}
                    onRequestClose={() => {this.closeModal()}} >
                    <View style={styles.paywrapper}>
                      <TouchableOpacity onPress={this.closeModal.bind(this)}>
                        <View style={{height:80,width:100,backgroundColor: 'black'}}>
                            <Text>关闭</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                 </Modal>
               
              )
    }
}



export default classPayModal;
