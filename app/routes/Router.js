

import {
    Navigator
    } from 'react-native';


import ClassDetail from '../components/ClassDetail';
import Home from '../containers/Home';
import Discover from '../containers/Discover';
import Skill from '../containers/Skill';
import Mine from '../containers/Mine';
import Communion from '../containers/Communion';
import CommunionDetail from '../components/CommunionDetail';
import SkillDetail from '../components/SkillDetail';
import PubCommunion from '../components/PubCommunion';
import PubCommunionSub from '../components/PubCommunionSub';
import PubSkill from '../components/PubSkill';
import MineVipInfo from '../components/MineVipInfo';
import MineScore from '../components/MineScore';
import MineScoreDescList from '../components/MineScoreDescList';
import MineGetScore from '../components/MineGetScore';
import MineMakeScore from '../components/MineMakeScore';
import MinePubPage  from '../components/MinePubPage';
import MineCollect from '../components/MineCollect';
import MineBoughtClass from '../components/MineBoughtClass';
import MineInfo from '../components/MineInfo';
import SkillTypeList from '../components/SkillTypeList';
import CommunionTypeList from '../components/CommunionTypeList';
import * as RouteId from '../constants/RouteId'; 

class Router {
    constructor(route,navigator) {
        this.navigator = navigator;
        this.route = route;
    }
    getRouteProps() {
        return this.route.props;
    }
    getNavigator() {
        return this.navigator;
    }
    getData() {
        if(this.route.props) {
            return this.route.props.data||{};
        }else {
            return {};
        }
        
    }
    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes();
        let nextIndex = routesList[routesList.length - 1].index + 1;
        route.props = props;
        route.index = nextIndex;
        this.route = route;
        this.navigator.push(route);
    }


    pop() {
        this.navigator.pop();
    }


    toClssDetail(props) {
        this.push(props, {
            component: ClassDetail,
            name: '详情',
            id: RouteId.CLASSDETAIL,
        })
    }
    toCommunionDetail(props) {
        this.push(props, {
            component: CommunionDetail,
            name: '详情',
            id: RouteId.COMMUNIONDETAIL,
        })
    }
    toSkillDetail(props) {
         this.push(props, {
            component: SkillDetail,
            name: '说话',
            id: RouteId.SKILLDETAIL,
        })
    }
    toAddQuestion(props) {
         this.push(props, {
            component: PubCommunion,
            name: '发布交流',
            id: RouteId.PUBQUESTION,
        })
    }
    toAddSkill(props) {
         this.push(props, {
            component: PubSkill,
            name: '发布技巧',
            id: RouteId.PUBSKILL,
        })
    }
    toMineVipInfo(props) {
        this.push(props, {
            component: MineVipInfo,
            name: '会员信息',
            id: RouteId.MINEVIPINFO,
        });
            
    }
    toMineScore(props) {
        this.push(props, {
            component: MineScore,
            name: '会员等级',
            id: RouteId.MINESCORE,
        })
    }
    toMineScoreDescList(props) {
        this.push(props, {
            component: MineScoreDescList,
            name: '经验分明细',
            id: RouteId.MINESCOREDESCLIST,
        });
    }
    toMineGetScore(props) {
        this.push(props, {
            component: MineGetScore,
            name: '兑换经验分',
            id: RouteId.MINEGETSCORE,
        })
    }
    toMineMakeScore(props) {
        this.push(props, {
            component: MineMakeScore,
            name: '赚取经验分',
            id: RouteId.MINEMAKESCORE,
        })
    }
    toMinePubPage(props) {
         this.push(props, {
            component: MinePubPage,
            name: '公开主页',
            id: RouteId.MINEPUBPAGE,
        })
    }
    toMineCollect(props) {
         this.push(props, {
            component: MineCollect,
            name: '收藏/关注',
            id: RouteId.MINECOLLECT,
        })
    }
    toMineBoughtClass(props) {
        this.push(props, {
            component: MineBoughtClass,
            name: '我购买的课程',
            id: RouteId.MINEBOUGHTCLASS,
        })
    }
    toMineInfo(props) {
         this.push(props, {
            component: MineInfo,
            name: '我的消息',
            id: RouteId.MINEINFO,
        })
    }
    toSkillType(props) {
        this.push(props, {
            component: SkillTypeList,
            name: '技巧类型',
            id: RouteId.SKILLTYPELIST,
        })
    }
    toCommunionType(props) {
        this.push(props, {
            component: CommunionTypeList,
            name: '交流类型',
            id: RouteId.COMMUNIONTYPELIST,
        })
    }
    toAddCommunionSub(props) {
        this.push(props, {
            component: PubCommunionSub,
            name: '交流回复',
            id: RouteId.PUBCOMMUNIONSUB,
        })
    }
    changeContainer(type) {
        
        switch(type) {
            case RouteId.HOME:
                this.navigator.resetTo({
                     component: Home,
                     name: 'iiiT',
                     id: RouteId.HOME,
                })
            break;
            case RouteId.DISCOVER:
                this.navigator.resetTo({
                     component: Discover,
                     name: '发现',
                     id: RouteId.DISCOVER,
                })
            break;
            case RouteId.COMMUNION:
                this.navigator.resetTo({
                     component: Communion,
                     name: '交流',
                     id: RouteId.COMMUNION,
                })
            break;
            case RouteId.SKILL:
                this.navigator.resetTo({
                     component: Skill,
                     name: '技巧',
                     id: RouteId.SKILL,
                })
            break;
            case RouteId.MINE:
                this.navigator.resetTo({
                     component: Mine,
                     name: '我的',
                     id: RouteId.MINE,
                })
            break;
            default:
            break;
        }
        
        
    }
 
    
}

module.exports = Router

