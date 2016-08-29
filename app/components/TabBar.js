/**
 *  TabBar
 *  这部分出自react-native-xtabbar 有改动
 */
'use strict'
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import TabBarItem from './TabBarItem';

export default class TabBar extends Component {
    static Item = TabBarItem;

    static defaultProps = {
        defaultPage: 0,
        navFontSize: 14,
        navTextColor: 'black',
        navTextColorSelected: '#FF9100',
    };

    static propTypes = {
        defaultPage: React.PropTypes.number,
        navFontSize: React.PropTypes.number,
        navTextColor: React.PropTypes.string,
        navTextColorSelected: React.PropTypes.string,
        onItemSelected: React.PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.visibles = [];
    }

    render() {
        let children = this.props.children;
        if (!children.length) {
            throw new Error("at least two child component are needed.");
        }

        // 底部tab按钮组
        let navs = [];

        const contentViews = children.map(
            (child,i) => {
                const style = child.props.selected === true? child.props.selectedStyle: child.props.style;
                const imgSrc = child.props.selected === true ? child.props.selectedIcon : child.props.icon;
                const color = child.props.selected === true ? this.props.navTextColorSelected : this.props.navTextColor;
                let stylenow = {
                             flex: 1,
                             paddingTop: 10,
                             paddingBottom: 10,
                             alignItems: 'center',
                    };
                if(child.props.style){
                    stylenow = Object.assign({},style,stylenow);
                }

                
                navs[i] = (
                    <TouchableOpacity
                        activeOpacity={1}
                        key={i}
                        underlayColor={'transparent'}
                        style={stylenow}
                        onPress={() => {
                            if (child.props.onPress) {
                                child.props.onPress();
                            }

                            //this.update(i);
                        }}>
                        <View style={styles.center}>
                            <Image style={styles.navImage} resizeMode='cover' source={imgSrc}/>
                            <Text style={[styles.navText,{color: color,fontSize: this.props.navFontSize}]}>
                                {child.props.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
                this.visibles[i] = child.props.selected;
                if (!this.visibles[i]) {
                    return null;
                } else {
                    const style = this.selectedIndex === i ? styles.base : [styles.base,styles.gone];
                    return (
                        <View
                            key={'view_' + i}
                            style={styles.base}>
                            {child}
                        </View>
                    );
                }
            }
        );

        return (
            <View style={[styles.container,this.props.style]}>
                <View style={styles.content}>
                    {contentViews}
                </View>
                <View style={styles.nav}>
                    {navs}
                </View>
            </View>
        );
    }

    componentDidMount() {
        let page = this.props.defaultPage;

        if (page >= this.props.children.length || page < 0){
            page = 0;
        }

        //this.update(page);
    }

    update(index) {
        this.visibles[index] = true;
        this.setState({
            selectedIndex: index,
        });

        if (this.props.onItemSelected) {
            this.props.onItemSelected(index);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        overflow: 'hidden',
    },
    content: {
        flex: 1
    },
    base: {
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    gone: {
        top: Dimensions.get('window').height,
        bottom: -Dimensions.get('window').height,
    },
    nav: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        backgroundColor: '#f3f3f3',
    },
    navItem: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navImage: {
        width: 24,
        height: 24,
        marginBottom: 3,
    },
    navText: {
        marginTop: 3,
    },
});
