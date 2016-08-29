'use strict';

import BarUtil from './BarUtil';
import HomeBar from './HomeBar';
import ClassDetailBar from './ClassDetailBar';
import CommunionBar from './CommunionBar';
import CommunionDetailBar from './CommunionDetailBar';
import SkillDetailBar from './SkillDetailBar';
import SkillBar from './SkillBar';
import MineScoreBar from './MineScoreBar';
import MineMakeScoreBar from './MineMakeScoreBar';
import * as RouteId from '../constants/RouteId'; 

module.exports = {
    LeftButton(route, navigator, index, nextState) {
            switch (route.id) {
                case RouteId.HOME:
                    return HomeBar.getLeftButton(route, navigator);
                case RouteId.COMMUNION:
                    return CommunionBar.getLeftButton(route,navigator);
                case RouteId.SKILLDETAIL: 
                    return SkillDetailBar.getLeftButton(route,navigator);
                case RouteId.DISCOVER:
                    return null;
                case RouteId.MINE:
                    return null;
                case RouteId.SKILL:
                    return null;
                default:
                    return BarUtil.getLeftButton(route,navigator);
            }
        },
    RightButton(route, navigator, index, nextState) {
            switch (route.id) {
                case RouteId.HOME:
                    return HomeBar.getRightButton(route, navigator);
                case RouteId.CLASSDETAIL:
                    return ClassDetailBar.getRightButton(route, navigator);
                case RouteId.COMMUNION:
                    return CommunionBar.getRightButton(route,navigator);
                case RouteId.COMMUNIONDETAIL:
                    return CommunionDetailBar.getRightButton(route,navigator);
                case RouteId.SKILLDETAIL: 
                    return SkillDetailBar.getRightButton(route,navigator);
                case RouteId.SKILL: 
                    return SkillBar.getRightButton(route,navigator);
                case RouteId.MINEVIPINFO: 
                    return BarUtil.getRightButton(route,navigator);
                case RouteId.MINESCORE: 
                    return MineScoreBar.getRightButton(route,navigator);
                case RouteId.MINEMAKESCORE: 
                    return MineMakeScoreBar.getRightButton(route,navigator);
                default:
                    return null;
            }
        },
    Title(route, navigator, index, nextState) {
            switch (route.id) {
                case RouteId.COMMUNION:
                    return '';
                default:
                    return BarUtil.getTitle(route.name);
            }
            
    }
}