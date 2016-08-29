import React from 'react';

// Components
import ClassItem from '../components/classitem';


import sceneConfig from './sceneConfig';


var {
    Navigator
    } = React

var customFloatFromRight = sceneConfig.customFloatFromRight


class Router {
    constructor(navigator) {
        this.navigator = navigator
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }


    pop() {
        this.navigator.pop()
    }


    toClassItem(props) {
        this.push(props, {
            component: ClassItem,
            name: 'cuser',
            sceneConfig: customFloatFromRight
        })
    }

   
}

module.exports = Router

