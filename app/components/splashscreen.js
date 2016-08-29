
'use strict';

import  {
    StyleSheet,
    Image,
    Component,
    View,
    Animated,
    Dimensions,
    Text
} from 'react-native';
import React from 'react';
import Util from '../util/util';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    cover: {
        flex: 1,
        width: 200,
        height: 1,
    },
    logo: {
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30,
        height: 54,
        backgroundColor: 'transparent',
    },
    text: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10,
        backgroundColor: 'transparent',
    }
});

export default class SplashScreen extends React.Component {
	  constructor(props: any) {
        super(props);
        
    }
    componentDidMount() {
        const {cover,bounceValue} = this.props.state.splashscreen;
        Animated.timing(
            bounceValue,
            {
                toValue: 1.2,
                duration: 5000,
            }
        ).start();
    }
    render() {
        let img, text;
        const {cover,bounceValue} = this.props.state.splashscreen;
        console.log(cover);
        if (cover) {
            img = {uri: cover.img};
            text = cover.text;
        } else {
            img = '';
            text = '';
        }

        return(
            <View style={styles.container}>
                <Animated.Image
                    source={img}
                    style={{
                    flex: 1,
                        width: Util.size.width,
                        height: 1,
                        transform: [
                            {scale: bounceValue},
                        ]
                    }} />
                <Text style={styles.text}>
                    {text}
                </Text>
                <Image style={styles.logo} source={{uri: 'http://static.yohobuy.com/newheader/img/logo_e.png'}} />
            </View>
        );
    }
}