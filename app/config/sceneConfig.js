import React from 'react';
import Dimensions from 'Dimensions';

import {
    Navigator
    } from 'react-native';

const { width, height } = Dimensions.get('window');


const baseConfig = Navigator.SceneConfigs.FloatFromRight;
const popGestureConfig = Object.assign({}, baseConfig.gestures.pop, {
    edgeHitWidth: width / 3
});


const fullPopGestureConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom.gestures.pop, {
    edgeHitWidth: width
})


exports.customFloatFromRight = Object.assign({}, baseConfig, {
    gestures: {
        pop: popGestureConfig
    }
})


exports.customFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom, {
    gestures: {
        pop: fullPopGestureConfig
    }
})
