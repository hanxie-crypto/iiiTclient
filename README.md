
---
#iiiT客户端
---

> 关于我，欢迎关注  
  微信：[wqinsist]
  邮箱aitongbian123@163.com

这是一个使用ReactNative制作的**视频教育类客户端**。目前使用的RN版本是**0.30.0**，包含ios和android两种。数据流框架使用[redux](http://camsong.github.io/redux-in-chinese/)做数据流框架，尝试使用了immutable不可变类库，结合react 组件生命周期方法shouldComponentUpdate方法优化组件渲染。路由方面自己做了实现，很感谢[noder](https://github.com/soliury/noder-react-native)的开源让我从中学到了不少精妙的设计方式。
遗憾的是产品设计和开发都尚未完成，而且由于产品思路断片，所以暂时没有继续开发。
现将其开源，仅供想使用**RN技术做视频类应用**的做参考。

与本客户端对应的服务端地址：**https://github.com/wq123456/iiiTserver** 。

####示例:  

###### ios
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v1.gif)
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v2.gif)
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v3.gif)
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v5.gif)
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v6.gif)
##### android
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v1a.gif)
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v2a.gif)
![Alt text](https://wq123456.github.io/2016/08/29/iiit/v3a.gif)


#### 依赖的第三方组件：
[react-native-file-transfer](https://github.com/kamilkp/react-native-file-transfer)    文件上传类。仅支持ios。
[react-native-image-picker](https://github.com/marcshilling/react-native-image-picker)    图片选取  支持ios和android
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)  图标库 支持ios和android
[react-native-video](https://github.com/react-native-community/react-native-video)  视频库 支持ios和android （android没有控制器）
[react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)  tab滑动
[react-native-swiper](https://github.com/leecade/react-native-swiper)     滑动轮播

#### 安装启动
(ps:先启动iiiTServer服务端)
将项目拷贝到本地，进入目录下，npm install 安装可能会失败，建议使用国内镜像或者翻墙。
[react-native-file-transfer](https://github.com/kamilkp/react-native-file-transfer),
[react-native-image-picker](https://github.com/marcshilling/react-native-image-picker) ,  
 [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)  ,
[react-native-video](https://github.com/react-native-community/react-native-video)
上面四个组件库涉及原生代码，使用前请先按照说明配置。
然后启动就可以






### 下载安装
升级node到最新版本
提前安装redis&mysql或者自行配置
git clone 


###使用方法
cd proj
npm install
npm start
浏览器访问 http://127.0.0.1:3000/users

测试
npm test
测试覆盖
npm run test-cover

### 注意事项


###TODO


## License

